import pkg from 'mongoose';
const { Schema, models, model } = pkg;

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
    }
});

// Check if the model exists to prevent recompiling it
const UserModel = models.users || model('users', UserSchema);

export default UserModel;
