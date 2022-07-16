/* eslint-disable comma-dangle */
const { Schema, model } = require('mongoose');

const portfolioSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Portfolio name is required'],
            unique: [true, 'Portfolio name is already taken'],
            trim: true,
        },
        portfolioImage: {
            type: String,
            required: [true, 'Portfolio image is required'],
            trim: true,
        },
        portfolioDescription: {
            type: String,
            required: [true, 'Portfolio description is required'],
            trim: true,
        },
        portfolioLink: {
            type: String,
            required: [true, 'Portfolio link is required'],
            trim: true,
        },
        portfolioCategory: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Category',
                required: [true, 'Portfolio category is required'],
            },
        ],
        portfolioTags: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Tag',
                required: [true, 'Portfolio tag is required'],
            },
        ],
        portfolioReactions: {
            type: Number,
            default: 0,
            trim: true,
        },
        portfolioDesktopImg: {
            type: String,
            required: [true, 'Portfolio desktop image is required'],
            trim: true,
        },
        portfolioMobileImg: [String],
    },
    { timestamps: true }
);

const Portfolio = model('Portfolio', portfolioSchema);
module.exports = Portfolio;
