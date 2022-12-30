const Product = require('../models/product');

const getProducts = async (req, res) => {
  Product.find()
    .where('deployment_ind_type').equals('true')
    .then((data) => res.send(data))
    .catch((error) => res.json(error));
};

const createProduct = async (req, res) => {
  try {
    const { 
        product_id, 
        group_type, 
        sub_group_type,
        product_name,
        product_description,
        measure_description, 
        price_amount,
        stock_number,
        product_image_id,
        deployment_ind_type,
        create_user,
        create_date,
        last_audit_user,
        audit_date,
    } = req.body;
    const newProduct = await Product({
        product_id: product_id,
        group_type: group_type,
        sub_group_type:sub_group_type,
        product_name: product_name,
        product_description: product_description,
        measure_description:measure_description,
        price_amount: price_amount,
        stock_number: stock_number,
        product_image_id:product_image_id,
        deployment_ind_type:deployment_ind_type,
        create_user: create_user,
        create_date:create_date,
        last_audit_user:last_audit_user,
        audit_date:audit_date,
    });
    if (!product_id || !group_type || !sub_group_type || !product_name || !product_description || !measure_description || !price_amount ||!stock_number || !product_image_id || !create_user || !last_audit_user) {
      return res
        .status(400)
        .send({ message: '*Debe completar todos los campos*' });
    }
    newProduct.save();
    res.status(200).send({ message: 'Producto creada exitosamente.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getProducts, createProduct };
