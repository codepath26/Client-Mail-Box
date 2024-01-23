const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailcon')

router.post('/email',emailController.sendmail);
router.get('/inbox/:email' , emailController.inboxCheck);
router.delete('/inbox/remove/:id' , emailController.deleteIndoxMail);
router.get('/sent/:email' , emailController.sentboxCheck);
router.get('/sent/details/:id' , emailController.sentemailDetails);
router.get('/inbox/details/:id' , emailController.inboxemailDetails);
module.exports = router;