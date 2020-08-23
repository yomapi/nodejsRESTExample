var express = require('express');
var router = express.Router();
var postController=require('./controller/post.controller');

router.get('/',postController.index);
router.get('/:id',postController.show);

module.exports = router;

