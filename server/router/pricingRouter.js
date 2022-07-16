const express = require('express');

const router = express.Router();
const pricingController = require('../controller/pricingController');

router.route('/').get(pricingController.getAllPricing).post(pricingController.createNewPricing);

router

    .route('/:id')
    .get(pricingController.getSinglePricing)
    .patch(pricingController.updatePricing)
    .delete(pricingController.deletePricing);

module.exports = router;
