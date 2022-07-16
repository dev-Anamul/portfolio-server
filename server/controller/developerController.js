const Developer = require('../model/develperModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllDevelopers = catchAsync(async (req, res) => {
    const developers = await Developer.find();
    res.status(200).json({
        status: 'success',
        data: {
            developers,
        },
    });
});

exports.getSingleDeveloper = catchAsync(async (req, res) => {
    const developer = await Developer.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            developer,
        },
    });
});

exports.createNewDeveloper = catchAsync(async (req, res) => {
    const newDeveloper = await Developer.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newDeveloper,
        },
    });
});

exports.updateDeveloper = catchAsync(async (req, res) => {
    const updatedDeveloper = await Developer.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedDeveloper,
        },
    });
});

exports.deleteDeveloper = catchAsync(async (req, res) => {
    await Developer.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
