const express = require('express');
const { getRoles, createRole } = require('../controllers/roleCtrl');

const router = express.Router();

router.get('/', getRoles);
router.post('/', createRole);

module.exports = router;
