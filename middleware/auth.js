const jwt = require('jsonwebtoken');
var path= require('path');
const ENV="development";
var config=require(path.join(__dirname,'..','.config','jwt_config.json'))[ENV];

var verifyToken=function(req,res,next){
    try{
        req.decoded=jwt.verify(req.headers.authorization,config.JWT_SECRET);
        return next();
    }
    catch(err){
        if(err.name==="TokenExpiredError"){
            return res.status(419).json({
                errorCode:419,
                message:"TokenExpired"
            });
        }
        return res.status(401).json({
            errorCode:401,
            message:"Invalid Token"
        })
    }
}



module.exports={verifyToken};