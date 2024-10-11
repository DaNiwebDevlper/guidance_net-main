import appointmentModel from "../Models/Appointment.js";
import { sendEmail } from "../utils/emailService.js";

// Book appointment
export const bookAppointment = async (req, res) => {
    const { name, email, phone, date, time, providerId, providerEmail } = req.body;

    try {
        console.log(req.body); // Check if all fields are present

        // Save the appointment to the database
        const newAppointment = new appointmentModel({
            name, email, phone, date, time, providerId, providerEmail
        });

        await newAppointment.save();

        // Send email notification to the provider
        await sendEmail({
            to: providerEmail,
            subject: 'New Appointment Request',
            html: `<p>You have received a new appointment request from <b>${name}</b>. Date: <b>${date}</b>, Time: <b>${time}</b>.</p>`
        });

        res.status(201).json({ message: 'Appointment booked successfully!' });
    } catch (error) {
        console.error('Error booking appointment:', error);
        res.status(500).json({ message: 'Failed to book appointment' });
    }
}