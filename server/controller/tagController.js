const Tag = require('../model/tagModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllTags = catchAsync(async (req, res) => {
    const tags = await Tag.find();
    res.status(200).json({
        status: 'success',
        data: {
            tags,
        },
    });
});

exports.getSingleTag = catchAsync(async (req, res) => {
    const tag = await Tag.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            tag,
        },
    });
});
exports.createNewTag = catchAsync(async (req, res) => {
    const newTag = await Tag.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newTag,
        },
    });
});

exports.updateTag = catchAsync(async (req, res) => {
    const updatedTag = await Tag.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedTag,
        },
    });
});

exports.deleteTag = catchAsync(async (req, res) => {
    await Tag.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
