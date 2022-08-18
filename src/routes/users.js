const express = require('express');
const { getUsers, createUser } = require('../controllers/userCtrl');

const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);

module.exports = router;
