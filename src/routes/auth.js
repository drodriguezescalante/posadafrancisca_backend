const express = require('express');
const { loginUser, verifyCtrl } = require('../controllers/authCtrl');

const router = express.Router();
router.post('/', loginUser);
router.get('/verify', verifyCtrl);
module.exports = router;
