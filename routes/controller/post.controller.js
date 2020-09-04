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
    Post.findOne({
      where: { id: req.params.id }
    }).then(result=>{
      if(result!==null)
        return res.status(200).json(result)
      else
        return res.status(400).json(
          {
            err:"Can Not Find Post"
          }
        )
    }).catch(err=>{
      return res.status(500).json(err);
    })
}

var create=function(req,res){
  req.body.author=req.decoded.user_id;
  Post.create(req.body)
  .then(result=>{
    return res.status(201).json(result);
  })
  .catch(err=>{
    return res.status(500).json(err);
  })
}

var edit=function(req,res){
  const author=Number(req.body.author)
  if(req.decoded.user_id==author){
    Post.update(req.body,{where:{id:req.params.id}})
    .then(affectedRow=>{
      if(affectedRow<1){
        return res.status(400).json(
          {
            err:"Can Not Find Post"
          }
        )
      }
      else{
        return res.status(200).json(
          {
            id:req.params.id,
            affectedRow:affectedRow
          }
        )
      }
    })
    .catch(err=>{
      return res.status(500).json(err)
    })
  }else{
    return res.status(403).json({
      error:"Forbidden Access!"
    })
  }
}

var destroy=function(req,res){
  const author=Number(req.body.author)
  if(req.decoded.user_id===author){
    Post.destroy({where:{id:req.params.id}})
    .then(affectedRow=>{
      if(affectedRow<1){
        return res.status(400).json(
        {
          err:"Can not Find Post"
        })
      }
      return res.status(200).json(
        {
          message:"post deleted"
        })
    })
    .catch(err=>{
      return res.status(500).json(err);
    })
  }
  else{
    return res.status(403).json({
      error:"Forbidden Access!"
    })
  }
}

module.exports = {
    index:index,
    show:show,
    create:create,
    edit:edit,
    destroy:destroy
};
