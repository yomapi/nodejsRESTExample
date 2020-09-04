var express = require('express');
var router = express.Router();

const postController=require('./controller/post.controller');
const {verifyToken}=require('../middleware/auth');

router.get('/',postController.index);
router.get('/:id',postController.show);
router.post('/create',verifyToken,postController.create);
router.post('/:id',verifyToken,postController.edit);
router.post('/destroy/:id',verifyToken,postController.destroy);

module.exports = router;

