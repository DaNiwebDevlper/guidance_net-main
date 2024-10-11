// import express from 'express';

// import Appointment from '../models/appointmentModel';
// import { sendEmail } from './emailService';

// const router = express.Router();

// router.post('/appointments', async (req, res) => {
//     const { name, email, phone, date, time, providerId } = req.body;

//     try {
//         // Save appointment to the database
//         const newAppointment = new Appointment({ name, email, phone, date, time, providerId, status: 'pending' });
//         await newAppointment.save();

//         // Send email to the provider
//         await sendEmail({
//             to: providerEmail, // Fetch provider's email from the database
//             subject: 'New Appointment Request',
//             text: `You have received a new appointment request from ${name}. Date: ${date}, Time: ${time}.`
//         });

//         res.status(201).json({ message: 'Appointment booked successfully!' });
//     } catch (error) {
//         console.error('Error booking appointment:', error);
//         res.status(500).json({ message: 'Failed to book appointment' });
//     }
// });

// export default router;
import nodemailer from 'nodemailer';

const { createTransport } = nodemailer
// Setup nodemailer transport configuration
const transporter = createTransport({
    service: 'gmail', // or another service like SendGrid
    auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
    },
});

// Utility function to send emails
const sendEmail = async ({ to, subject, text }) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        const res = await transporter.sendMail(mailOptions);
        res.json({ message: "Email sent successfully" })
        console.log('Email sent successfully');
    } catch (error) {
        console.error('Error sending email:', error);
        throw new Error('Failed to send email');
    }
};

export { sendEmail };
