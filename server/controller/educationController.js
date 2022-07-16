const Education = require('../model/educationModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllEducations = catchAsync(async (req, res) => {
    const education = await Education.find();
    res.status(200).json({
        status: 'success',
        data: {
            education,
        },
    });
});

exports.getSingleEducation = catchAsync(async (req, res) => {
    const education = await Education.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            education,
        },
    });
});

exports.createNewEducation = catchAsync(async (req, res) => {
    const newEducation = await Education.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newEducation,
        },
    });
});

exports.updateEducation = catchAsync(async (req, res) => {
    const updatedEducation = await Education.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedEducation,
        },
    });
});

exports.deleteEducation = catchAsync(async (req, res) => {
    await Education.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
