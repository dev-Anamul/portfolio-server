const express = require('express');

const router = express.Router();
const commentController = require('../controller/commentController');

router.route('/').get(commentController.getAllComments).post(commentController.createNewComment);

router
    .route('/:id')
    .get(commentController.getSingleComment)
    .patch(commentController.updateComment)
    .delete(commentController.deleteComment);

module.exports = router;
