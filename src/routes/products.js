const express = require('express');
const { getProducts, createProduct } = require('../controllers/productCtrl');

const router = express.Router();

router.get('/', getProducts);
router.post('/', createProduct);

module.exports = router;
