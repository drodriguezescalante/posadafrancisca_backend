const express = require('express');
const { getTables, createTable } = require('../controllers/tableCtrl');

const router = express.Router();

router.get('/', getTables);
router.post('/', createTable);

module.exports = router;