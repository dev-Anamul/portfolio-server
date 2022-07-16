const { Schema, model } = require('mongoose');

const skillSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Skill name is required'],
            unique: [true, 'Skill name is already taken'],
            trim: true,
        },
        value: {
            type: Number,
            required: [true, 'Skill value is required'],
            trim: true,
        },
    },
    { timestamps: true }
);

const Skill = model('Skill', skillSchema);
module.exports = Skill;
