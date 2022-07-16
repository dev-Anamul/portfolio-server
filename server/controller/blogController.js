const Blog = require('../model/blogModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllBlogs = catchAsync(async (req, res) => {
    const blogs = await Blog.find();
    res.status(200).json({
        status: 'success',
        data: {
            blogs,
        },
    });
});

exports.getSingleBlog = catchAsync(async (req, res) => {
    const blog = await Blog.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            blog,
        },
    });
});

exports.createNewBlog = catchAsync(async (req, res) => {
    const newBlog = await Blog.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newBlog,
        },
    });
});
exports.updateBlog = catchAsync(async (req, res) => {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedBlog,
        },
    });
});

exports.deleteBlog = catchAsync(async (req, res) => {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
