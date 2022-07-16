const Pricing = require('../model/pricingModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllPricing = catchAsync(async (req, res) => {
    const pricing = await Pricing.find();
    res.status(200).json({
        status: 'success',
        data: {
            pricing,
        },
    });
});

exports.getSinglePricing = catchAsync(async (req, res) => {
    const pricing = await Pricing.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            pricing,
        },
    });
});

exports.createNewPricing = catchAsync(async (req, res) => {
    const newPricing = await Pricing.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newPricing,
        },
    });
});

exports.updatePricing = catchAsync(async (req, res) => {
    const updatedPricing = await Pricing.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedPricing,
        },
    });
});

exports.deletePricing = catchAsync(async (req, res) => {
    await Pricing.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
