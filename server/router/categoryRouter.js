const express = require('express');

const router = express.Router();
const categoryController = require('../controller/categoryController');

router
    .route('/')
    .get(categoryController.getAllCategories)
    .post(categoryController.createNewCategory);

router
    .route('/:id')
    .get(categoryController.getSingleCategory)
    .patch(categoryController.updateCategory)
    .delete(categoryController.deleteCategory);

module.exports = router;
