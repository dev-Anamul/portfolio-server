const express = require('express');

const router = express.Router();
const serviceController = require('../controller/serviceController');

router.route('/').get(serviceController.getAllServices).post(serviceController.createNewService);

router
    .route('/:id')
    .get(serviceController.getSingleService)
    .patch(serviceController.updateService)
    .delete(serviceController.deleteService);

module.exports = router;
