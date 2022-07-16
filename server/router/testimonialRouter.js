const express = require('express');

const router = express.Router();
const testimonialController = require('../controller/testimonialController');

router
    .route('/')
    .get(testimonialController.getAllTestimonial)
    .post(testimonialController.createNewTestimonial);

router
    .route('/:id')
    .get(testimonialController.getSingleTestimonial)
    .patch(testimonialController.updateTestimonial)
    .delete(testimonialController.deleteTestimonial);

module.exports = router;
