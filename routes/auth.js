const express=require('express');
const {User}=require('../models');
const verifyToken=require('../middleware/verifyToken');
const jwt=require('jsonwebtoken');
var path= require('path');

const router=express.Router();

const ENV="development";
var config=require(path.join(__dirname,'..','.config','jwt_config.json'))[ENV];

router.post('/login',async(req,res,next)=>{
    const {useremail,password}=req.body;
    console.log(req.body);
    console.log(useremail);
    User.findOne({
        where:{useremail:useremail}
    }).then(result=>{
        console.log(result);
        const token=jwt.sign({
            user_id:result.id,
            userEmail:result.useremail,
            userName:result.name
        },config.JWT_SECRET,{
            expiresIn:"5m",
            issuer:"YoMaPi"
        })
        return res.status(200).json({
            resultCode:200,
            message:"Token is givven",
            token
        })
    }).catch(err=>{
        return res.status(500).json(err)
    })
});

router.get('/confirm',verifyToken,(req,res,next)=>{
    res.json(req.decoded);
});
module.exports=router;