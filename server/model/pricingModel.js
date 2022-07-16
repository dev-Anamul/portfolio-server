const { Schema, model } = require('mongoose');

const pricingSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Pricing name is required'],
            trim: true,
        },
        price: [
            {
                timingPlan: {
                    type: String,
                    required: [true, 'Price timing plan is required'],
                    trim: true,
                },
                price: {
                    type: String,
                    required: [true, 'Price is required'],
                    trim: true,
                },
            },
        ],
        priceFeatures: [
            {
                feature: {
                    type: String,
                    required: [true, 'Price feature is required'],
                    trim: true,
                },
                status: {
                    type: String,
                    required: [true, 'Price features status is required'],
                    trim: true,
                },
            },
        ],
    },
    { timestamps: true }
);

const Pricing = model('Pricing', pricingSchema);
module.exports = Pricing;
