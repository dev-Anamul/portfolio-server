const express = require('express');

const router = express.Router();
const blogController = require('../controller/blogController');

router.route('/').get(blogController.getAllBlogs).post(blogController.createNewBlog);

router
    .route('/:id')
    .get(blogController.getSingleBlog)
    .patch(blogController.updateBlog)
    .delete(blogController.deleteBlog);

module.exports = router;
