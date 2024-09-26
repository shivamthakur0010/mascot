var express = require('express');
var router = express.Router();

const authenticateJWT = require('../helper/helper').authenticateJWT;
const verifyJWT = require('../helper/helper').verifyUser;
const usercontroller = require('../controller/apiController')

router.post('/login',usercontroller.login);

router.post('/signup',usercontroller.signup);

router.post('/verify_otp',usercontroller.verify_otp);

router.post('/resetPassword',usercontroller.resetPassword);

router.post('/resend_otp',usercontroller.resend_otp);


module.exports = router;
