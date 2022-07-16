/* eslint-disable comma-dangle */
const { Schema, model } = require('mongoose');

const sericeSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Service name is required'],
            unique: [true, 'Service name is already taken'],
            trim: true,
        },
        serviceIcon: {
            type: String,
            required: [true, 'Service icon is required'],
            trim: true,
        },
        serviceDescription: {
            type: String,
            required: [true, 'Service description is required'],
            trim: true,
        },
    },
    { timestamps: true }
);

const Service = model('Service', sericeSchema);
module.exports = Service;
