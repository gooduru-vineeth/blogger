const router = require('express').Router();
const blogController = require('../controllers/blog.js');

router.post(
  '/blog',
  blogController.handleBlog,
);
module.exports = router;
