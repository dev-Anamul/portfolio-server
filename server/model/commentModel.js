const { Schema, model } = require('mongoose');

const commentSchema = new Schema(
    {
        comment: {
            type: String,
            required: [true, 'Comment is required'],
            trim: true,
        },
        commentUser: {
            type: String,
            required: [true, 'Comment user is required'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Comment image is required'],
            trim: true,
        },
        blogId: {
            type: Schema.Types.ObjectId,
            ref: 'Blog',
            required: true,
        },
    },
    { timestamps: true }
);

const Comment = model('Comment', commentSchema);
module.exports = Comment;
