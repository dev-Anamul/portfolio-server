const Category = require('../model/categoryModel');

exports.getAllCategories = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({
        status: 'success',
        data: {
            categories,
        },
    });
};
exports.getSingleCategory = async (req, res) => {
    const category = await Category.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            category,
        },
    });
};

exports.createNewCategory = async (req, res) => {
    const newCategory = await Category.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newCategory,
        },
    });
};

exports.updateCategory = async (req, res) => {
    const updatedCategory = await Category.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedCategory,
        },
    });
};

exports.deleteCategory = async (req, res) => {
    await Category.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
