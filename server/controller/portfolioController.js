const Portfolio = require('../model/portfolioModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllPortfolios = catchAsync(async (req, res) => {
    const portfolios = await Portfolio.find();
    res.status(200).json({
        status: 'success',
        data: {
            portfolios,
        },
    });
});

exports.getSinglePortfolio = catchAsync(async (req, res) => {
    const portfolio = await Portfolio.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            portfolio,
        },
    });
});

exports.createNewPortfolio = catchAsync(async (req, res) => {
    const newPortfolio = await Portfolio.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newPortfolio,
        },
    });
});

exports.updatePortfolio = catchAsync(async (req, res) => {
    const updatedPortfolio = await Portfolio.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedPortfolio,
        },
    });
});

exports.deletePortfolio = catchAsync(async (req, res) => {
    await Portfolio.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
