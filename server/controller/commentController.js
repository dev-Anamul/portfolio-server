const Comment = require('../model/commentModel');

exports.getAllComments = async (req, res) => {
    const comments = await Comment.find();
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};
exports.getComment = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};
exports.createComment = async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newComment,
        },
    });
};

exports.updateComment = async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedComment,
        },
    });
};

exports.deleteComment = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

// ! normal comment routes
exports.getAllCommentsByBlogId = async (req, res) => {
    const comments = await Comment.find({ blogId: req.params.id });
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};

exports.getCommentByBlogId = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};

exports.createCommentByBlogId = async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newComment,
        },
    });
};

exports.updateCommentByBlogId = async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedComment,
        },
    });
};

exports.deleteCommentByBlogId = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

// ! comment routes for admin
exports.getAllCommentsByUserId = async (req, res) => {
    const comments = await Comment.find({ commentUser: req.params.id });
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};
exports.getCommentByUserId = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};
exports.createCommentByUserId = async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newComment,
        },
    });
};

exports.updateCommentByUserId = async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedComment,
        },
    });
};

exports.deleteCommentByUserId = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

exports.getAllCommentsByCommentUser = async (req, res) => {
    const comments = await Comment.find({ commentUser: req.params.id });
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};

exports.getCommentByCommentUser = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};

exports.createCommentByCommentUser = async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newComment,
        },
    });
};

exports.updateCommentByCommentUser = async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedComment,
        },
    });
};

exports.deleteCommentByCommentUser = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

exports.getAllCommentsByCommentDate = async (req, res) => {
    const comments = await Comment.find({ commentDate: req.params.id });
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};

exports.getCommentByCommentDate = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};

exports.createCommentByCommentDate = async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newComment,
        },
    });
};

exports.updateCommentByCommentDate = async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedComment,
        },
    });
};

exports.deleteCommentByCommentDate = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

exports.getAllCommentsByCommentText = async (req, res) => {
    const comments = await Comment.find({ commentText: req.params.id });
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};

exports.getCommentByCommentText = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};
exports.createCommentByCommentText = async (req, res) => {
    const newComment = await Comment.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newComment,
        },
    });
};

exports.updateCommentByCommentText = async (req, res) => {
    const updatedComment = await Comment.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedComment,
        },
    });
};

exports.deleteCommentByCommentText = async (req, res) => {
    await Comment.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
};

exports.getAllCommentsByCommentBlog = async (req, res) => {
    const comments = await Comment.find({ commentBlog: req.params.id });
    res.status(200).json({
        status: 'success',
        data: {
            comments,
        },
    });
};
exports.getCommentByCommentBlog = async (req, res) => {
    const comment = await Comment.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            comment,
        },
    });
};
