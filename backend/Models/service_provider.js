import mongoose from 'mongoose';
const { Schema, models, model } = mongoose
const serviceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profileImg: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    education: {
        type: String,
        required: true
    },
    workAt: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    fees: {
        type: Number,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    field: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: "service_provider"
    }
}, { timestamps: true });


const serviceProviderModel = models.service_provider || model('service_provider', serviceSchema);
export default serviceProviderModel;
