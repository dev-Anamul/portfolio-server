const { Schema, model } = require('mongoose');

const tagSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Tag name is required'],
            unique: [true, 'Tag name is already taken'],
            trim: true,
        },
    },
    { timestamps: true }
);

const Tag = model('Tag', tagSchema);
module.exports = Tag;
