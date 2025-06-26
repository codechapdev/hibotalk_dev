const express = require('express');
const { signup, addSpecializations,getAllSpecializations, getUserSpecializations, addIntrested, getAllIntrest, getUserIntrest, login, forgotPassword, resetPassword, logout, switchRole, uploadProfilePic, updateProfilePhoto } = require('../controllers/userController');
const authenticate = require('../middlewares/authMiddleware');
const upload = require('../middlewares/upload');
const router = express.Router();

//auth routes
router.post('/signup',upload.single('profile_pic'), signup)
router.post('/login', login)
router.post('/switch-role/:id', authenticate, switchRole);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password', resetPassword);
router.post('/logout',authenticate, logout);
router.post('/upload-profile',authenticate,upload.single('profile_pic'),uploadProfilePic);
router.post('/update-profile',authenticate,upload.single('profile_pic'),updateProfilePhoto);

//specialization
router.post('/addspecialization',addSpecializations)
router.get('/specializations',getAllSpecializations)
router.get('/getUser/:id',getUserSpecializations)


//intrested
router.post('/addintrested',addIntrested)
router.get('/intrested', getAllIntrest)
router.get('/getUserintrest/:id',getUserIntrest)



module.exports = router;