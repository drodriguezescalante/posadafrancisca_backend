const mongoose = require('mongoose');
const tableSchema = new mongoose.Schema({
  table_number: {
    type: String,
    required: true,
  },
  table_desc: {
    type: String,
    required: true,
  },
  table_status:{
    type:Boolean,
    required:true,
    default:false,
  }
});

module.exports = mongoose.model('Table', tableSchema);
