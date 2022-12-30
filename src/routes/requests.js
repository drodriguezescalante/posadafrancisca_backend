const express = require('express');
const { getRequestsByStatus, getTablesByStatus,getRequestsByTable, createRequest } = require('../controllers/requestCtrl');

const router = express.Router();

router.get('/bill/:id',getRequestsByTable);
router.get('/tables/:status',getTablesByStatus);
router.get('/:status', getRequestsByStatus);
router.post('/', createRequest);

module.exports = router;
