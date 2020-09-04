const express=require('express');
const router=express.Router();
const authController=require('./controller/auth.controller');
const {verifyToken}=require('../middleware/auth');

router.get('/confirm',verifyToken,authController.confirm);
router.post('/login',authController.login);
module.exports=router;