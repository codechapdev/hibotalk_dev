const express = require('express');
const router = express.Router();

const upload = require('../middlewares/uploadResource');
const authenticate = require('../middlewares/authMiddleware'); 
const { addResouce, getMentorResources, getResourcesByCategory } = require('../controllers/resourceController');

router.post('/add-resource', authenticate, upload, addResouce);
router.get('/mentor-resources', authenticate, getMentorResources);
router.get('/get-resources/:categoryId', authenticate, getResourcesByCategory);
module.exports = router;