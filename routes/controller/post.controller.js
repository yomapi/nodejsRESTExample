var express = require('express');

var {Post} = require('../../models');

var index=function(req,res){
    Post.findAll()
    .then(result=>{
      return res.json(result);
    })
    .catch(err=>{
      return res.status(500).json(err);
    }) 
}

var show=function(req,res){
    const id=req.params.id;
    Post.findOne({
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
