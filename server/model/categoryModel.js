const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Category name is required'],
            unique: [true, 'Category name is already taken'],
            trim: true,
        },

        categorySlug: String,
    },
    { timestamps: true }
);

const Category = model('Category', categorySchema);
module.exports = Category;
