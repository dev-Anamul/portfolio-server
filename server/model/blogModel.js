const { Schema, model } = require('mongoose');

const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'Please add a title'],
            unique: [true, 'This title is already in use'],
            trim: true,
        },
        featuredImage: {
            type: String,
            required: [true, 'Please add a featured image'],
            trim: true,
        },
        blogDescription: {
            type: String,
            required: [true, 'Please add a description'],
            trim: true,
        },
        category: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Category',
                required: [true, 'Please add a category'],
            },
        ],
        tags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Tag',
                required: [true, 'Please add a tag'],
            },
        ],
        viewCount: {
            type: Number,
            default: 0,
            trim: true,
        },
        images: [
            {
                type: String,
                trim: true,
            },
        ],
        comments: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Comment',
            },
        ],
    },
    { timestamps: true }
);

const Blog = model('Blog', blogSchema);
module.exports = Blog;
