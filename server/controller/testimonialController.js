const Testimonial = require('../model/testimonialModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllTestimonial = catchAsync(async (req, res) => {
    const testimonial = await Testimonial.find();
    res.status(200).json({
        status: 'success',
        data: {
            testimonial,
        },
    });
});

exports.getSingleTestimonial = catchAsync(async (req, res) => {
    const testimonial = await Testimonial.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            testimonial,
        },
    });
});

exports.createNewTestimonial = catchAsync(async (req, res) => {
    const newTestimonial = await Testimonial.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newTestimonial,
        },
    });
});

exports.updateTestimonial = catchAsync(async (req, res) => {
    const updatedTestimonial = await Testimonial.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedTestimonial,
        },
    });
});

exports.deleteTestimonial = catchAsync(async (req, res) => {
    await Testimonial.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
