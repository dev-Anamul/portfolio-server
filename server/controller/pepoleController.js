const Pepole = require('../model/pepoleModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllPepoles = catchAsync(async (req, res) => {
    const pepole = await Pepole.find();
    res.status(200).json({
        status: 'success',
        data: {
            pepole,
        },
    });
});

exports.getSinglePepole = catchAsync(async (req, res) => {
    const pepole = await Pepole.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            pepole,
        },
    });
});

exports.createNewPepole = catchAsync(async (req, res) => {
    const newPepole = await Pepole.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newPepole,
        },
    });
});

exports.updatePepole = catchAsync(async (req, res) => {
    const updatedPepole = await Pepole.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedPepole,
        },
    });
});

exports.deletePepole = catchAsync(async (req, res) => {
    await Pepole.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
