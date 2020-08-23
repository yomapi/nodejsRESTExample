var express = require('express');
var router = express.Router();
var {User} = require('../../models/');


let index=function(req,res){
    User.findAll()
    .then(result=>{
      return res.json(result);
    })
    .catch(err=>{
      return res.status(500).json(err);
    })     
}


let show=function(req,res){
    const id=req.params.id;
    User.findOne({
      where: { id: 1 }
    }).then(result=>{
      return res.json(result)
    }).catch(err=>{
      return res.status(500).json(err);
    })  
}

module.exports = {
    index:index,
    show:show
};
