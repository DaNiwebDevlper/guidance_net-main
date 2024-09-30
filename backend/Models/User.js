const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ['admin', 'client', 'service_provider'],
        default: 'client',
        required: true,
    },
    address: {
        type: String,
        required: true
    },
    website: {
        type: String,
        default: null,
    },
    phoneNumber: {
        type: String,
        default: null,
        required: true,
    },
    company: {
        type: String,
        default: null,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'], // Add user status
        default: 'pending', // New users are set as pending by default
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
