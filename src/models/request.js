const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Table = require('./table');
const sequencing = require('../helpers/counters/sequencing');

const requestSchema = new mongoose.Schema({
  request_number: {
    type: Number
  },
  table: [{ 
    type: Schema.ObjectId, 
    ref: 'Table', 
    default: '',
    required: false
  }],
  order_structure: {
    type: Array,
    required: true,
  },
  request_status: {
    type: String,
    required: true,
  },
  create_user:{
    type: String,
    required: true,
  },
  create_date:{
    type: Date,
    required: true,
    default: Date.now,
  },
  last_audit_user:{
    type: String,
    required: true,
  },
  audit_date:{
    type: Date,
    required: true,
    default: Date.now,
  }
});

requestSchema.pre("save",function(next){
  let doc = this;
  sequencing.getSequenceNextValue("request_id").
  then(counter => {
    if(!counter){
      sequencing.insertCounter("request_id")
      .then(counter => {
        doc._id = counter;
        next();
      })
      .catch(error => next(error))
    }else{
      doc.request_number = counter;
      next();
    }
  })
  .catch(error => next(error))
});

module.exports = mongoose.model('Request', requestSchema);