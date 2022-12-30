const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  product_id: {
    type: String,
    required: true,
  },
  group_type: {
    type: String,
    required: true,
  },
  sub_group_type:{
    type: String,
    required: true,
  },
  product_name:{
    type: String,
    required: true,
  },
  product_description:{
    type: String,
    required: true,
  },
  measure_description:{
    type: String,
    required: true,
  },
  price_amount:{
    type: Number,
    required: true,
  },
  stock_number:{
    type: Number,
    required: true,
  },
  product_image_id:{
    type: String,
    required: true,
  },
  deployment_ind_type:{
    type: Boolean,
    required: true
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

module.exports = mongoose.model('Product', productSchema);