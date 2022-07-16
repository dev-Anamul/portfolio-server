const { Schema, model } = require('mongoose');

const educationSchema = new Schema(
    {
        degree: {
            type: String,
            required: [true, 'Degree is required'],
            trim: true,
        },

        institution: {
            type: String,
            required: [true, 'Institution is required'],
            trim: true,
        },
        startDate: {
            type: Date,
            required: [true, 'Start date is required'],
            trim: true,
        },
        endDate: {
            type: Date,
            required: [true, 'End date is required'],
            trim: true,
        },
        location: {
            type: String,
            required: [true, 'Location is required'],
            trim: true,
        },
        status: {
            type: String,
            required: [true, 'Status is required'],
            trim: true,
        },
        gpa: {
            type: String,
            required: [true, 'GPA is required'],
            trim: true,
        },
    },
    { timestamps: true }
);

const Education = model('Education', educationSchema);
module.exports = Education;
