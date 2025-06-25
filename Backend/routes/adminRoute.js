const express = require('express');
const router = express.Router();
const { adminLogin, addAdmin } = require('../controllers/adminController');

router.post('/login', adminLogin);
router.post('/addadmin', addAdmin);
module.exports = router;