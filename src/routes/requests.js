const express = require('express');
const { getRequestById, getRequestsByStatus, getTablesByStatus,getRequestsByTable, createRequest } = require('../controllers/requestCtrl');

const router = express.Router();

router.get('/byId/:id',getRequestById);
router.get('/bill/:id',getRequestsByTable);
router.get('/tables/:status',getTablesByStatus);
router.get('/:status', getRequestsByStatus);
router.post('/', createRequest);

module.exports = router;
