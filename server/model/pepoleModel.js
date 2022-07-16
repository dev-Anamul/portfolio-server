const { Schema, model } = require('mongoose');

const peopleSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            trim: true,
            unique: [true, 'Email already exists'],
        },
        phone: {
            type: String,
            required: [true, 'Phone number is required'],
            trim: true,
        },
        username: {
            type: String,
            required: [true, 'Username is required'],
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters'],
        },
        confirmPassword: {
            type: String,
            required: [true, 'Confirm password is required'],
            trim: true,
            validate: {
                validator(value) {
                    return value === this.password;
                },
            },
        },
    },
    { timestamps: true }
);

const People = model('People', peopleSchema);
module.exports = People;
