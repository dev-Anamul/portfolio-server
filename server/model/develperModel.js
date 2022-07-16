/* eslint-disable comma-dangle */
const { Schema, model } = require('mongoose');

const developerSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Developer name is required'],
            unique: [true, 'Developer name is already taken'],
            trim: true,
        },
        designation: {
            type: String,
            required: [true, 'Developer designation is required'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Developer image is required'],
            trim: true,
        },
        socialMedia: [
            {
                accountName: {
                    type: String,
                    trim: true,
                },
                accountLink: {
                    type: String,
                    trim: true,
                },
            },
        ],
        about: {
            type: String,
            required: [true, 'Developer about is required'],
            trim: true,
        },
        work: [
            {
                workType: {
                    type: String,
                    trim: true,
                },
                workDescription: {
                    type: String,
                    trim: true,
                },
                workQuantity: {
                    type: Number,
                    trim: true,
                },
            },
        ],
    },
    { timestamps: true }
);

const Developer = model('Developer', developerSchema);
module.exports = Developer;
