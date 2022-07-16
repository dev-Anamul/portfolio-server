/* eslint-disable consistent-return */
const Service = require('../model/serviceModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getAllServices = catchAsync(async (req, res) => {
    const services = await Service.find();
    res.status(200).json({
        status: 'success',
        results: services.length,
        data: {
            services,
        },
    });
});

exports.getSingleService = catchAsync(async (req, res, next) => {
    const service = await Service.findById(req.params.id);
    if (!service) {
        return next(new AppError(`No service found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            service,
        },
    });
});

exports.createNewService = catchAsync(async (req, res) => {
    const newService = await Service.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            service: newService,
        },
    });
});

exports.updateService = catchAsync(async (req, res, next) => {
    const service = await Service.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    if (!service) {
        return next(new AppError(`No service found with id ${req.params.id}`, 404));
    }
    res.status(200).json({
        status: 'success',
        data: {
            service,
        },
    });
});

exports.deleteService = catchAsync(async (req, res, next) => {
    const service = await Service.findByIdAndDelete(req.params.id);
    if (!service) {
        return next(new AppError(`No service found with id ${req.params.id}`, 404));
    }
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
