import express from 'express';
import appointmentModel from '../Models/Appointment.js';
import { bookAppointment } from '../Controllers/AppointmentController.js';


const router = express.Router();
// Book an Appointment
router.post('/appointments', bookAppointment);


// Update appointment status
router.put('/appointments/:appointmentId/status', async (req, res) => {
    const { appointmentId } = req.params;
    const { status } = req.body; // 'accepted' or 'rejected'

    try {
        const appointment = await appointmentModel.findById(appointmentId);
        if (!appointment) {
            return res.status(404).json({ message: 'Appointment not found' });
        }

        appointment.status = status;
        appointment.updatedAt = Date.now();
        await appointment.save();

        res.status(200).json({ message: `Appointment ${status} successfully!` });
    } catch (error) {
        console.error('Error updating appointment status:', error);
        res.status(500).json({ message: 'Failed to update appointment status' });
    }
});


// Get appointments for user
router.get('/appointments/user/:email', async (req, res) => {
    const { email } = req.params;

    try {
        const appointments = await appointmentModel.find({ email }).sort({ createdAt: -1 });
        res.status(200).json(appointments);
    } catch (error) {
        console.error('Error fetching user appointments:', error);
        res.status(500).json({ message: 'Failed to fetch appointments' });
    }
});

export { router };
