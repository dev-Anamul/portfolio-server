const express = require('express');

const router = express.Router();
const portfolioController = require('../controller/portfolioController');

router
    .route('/')
    .get(portfolioController.getAllPortfolios)
    .post(portfolioController.createNewPortfolio);

router
    .route('/:id')
    .get(portfolioController.getSinglePortfolio)
    .patch(portfolioController.updatePortfolio)
    .delete(portfolioController.deletePortfolio);

module.exports = router;
