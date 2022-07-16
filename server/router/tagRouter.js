const express = require('express');

const router = express.Router();
const tagController = require('../controller/tagController');

router.route('/').get(tagController.getAllTags).post(tagController.createNewTag);

router
    .route('/:id')
    .get(tagController.getSingleTag)
    .patch(tagController.updateTag)
    .delete(tagController.deleteTag);

module.exports = router;
