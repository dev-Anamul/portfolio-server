const { Schema, model } = require('mongoose');

const testimonialSchema = new Schema(
    {
        review: {
            type: String,
            required: [true, 'Review is required'],
            trim: true,
        },

        description: {
            type: String,
            required: [true, 'Description is required'],
            trim: true,
        },
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        image: {
            type: String,
            required: [true, 'Image is required'],
            trim: true,
        },
    },
    { timestamps: true }
);

const Testimonial = model('Testimonial', testimonialSchema);
module.exports = Testimonial;
