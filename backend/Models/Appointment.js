import mongoose from 'mongoose';
const { Schema, model, models } = mongoose
const appointmentSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'service_provider', required: true },
    providerEmail: { type: String, required: true }
});

// export default model('Appointment', appointmentSchema);
const appointmentModel = models.appointment || model('appointment', appointmentSchema)
export default appointmentModel