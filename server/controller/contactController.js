const Contact = require('../model/contactModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllContacts = catchAsync(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json({
        status: 'success',
        data: {
            contacts,
        },
    });
});

exports.getSingleContact = catchAsync(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            contact,
        },
    });
});

exports.createNewContact = catchAsync(async (req, res) => {
    const newContact = await Contact.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newContact,
        },
    });
});

exports.updateContact = catchAsync(async (req, res) => {
    const updatedContact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedContact,
        },
    });
});

exports.deleteContact = catchAsync(async (req, res) => {
    await Contact.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
