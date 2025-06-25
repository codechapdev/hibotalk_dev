const express = require('express');
const router = express.Router();
const upload = require('../middlewares/uploadCommunity');
const authenticate = require('../middlewares/authMiddleware');
const { addCommunity, getMentorCommunities } = require('../controllers/communityController');

router.post('/add-community', authenticate, upload.single('image'), addCommunity);

router.get('/my-communities', authenticate, getMentorCommunities);

module.exports = router;