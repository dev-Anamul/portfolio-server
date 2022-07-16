const express = require('express');

const router = express.Router();
const educationController = require('../controller/educationController');

router
    .route('/')
    .get(educationController.getAllEducations)
    .post(educationController.createNewEducation);

router
    .route('/:id')
    .get(educationController.getSingleEducation)
    .patch(educationController.updateEducation)
    .delete(educationController.deleteEducation);

module.exports = router;
