const express = require('express');
const router = express.Router();
const userController = require('../../controllers/user');
const resetpasswordController = require('../../controllers/forgotpass');

router.post('/add-user' , userController.signupCheck);
router.post('/login' , userController.logincheck);

router.get('/updatepassword/:resetpasswordid', resetpasswordController.updatepassword)
router.get('/resetpassword/:id', resetpasswordController.resetpassword)
router.use('/forgotpassword', resetpasswordController.forgotpassword)
module.exports = router;