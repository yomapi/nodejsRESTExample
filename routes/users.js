var express = require('express');
var router = express.Router();
var userController=require('./controller/user.controller');

router.get('/',userController.index);
router.get('/:id',userController.show);

module.exports = router;
