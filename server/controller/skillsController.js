const Skill = require('../model/skillsModel');
const catchAsync = require('../utils/catchAsync');

exports.getAllSkills = catchAsync(async (req, res) => {
    const skills = await Skill.find();
    res.status(200).json({
        status: 'success',
        data: {
            skills,
        },
    });
});

exports.getSingleSkill = catchAsync(async (req, res) => {
    const skill = await Skill.findById(req.params.id);
    res.status(200).json({
        status: 'success',
        data: {
            skill,
        },
    });
});

exports.createNewSkill = catchAsync(async (req, res) => {
    const newSkill = await Skill.create(req.body);
    res.status(201).json({
        status: 'success',
        data: {
            newSkill,
        },
    });
});

exports.updateSkill = catchAsync(async (req, res) => {
    const updatedSkill = await Skill.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
    });
    res.status(200).json({
        status: 'success',
        data: {
            updatedSkill,
        },
    });
});

exports.deleteSkill = catchAsync(async (req, res) => {
    await Skill.findByIdAndDelete(req.params.id);
    res.status(204).json({
        status: 'success',
        data: null,
    });
});
