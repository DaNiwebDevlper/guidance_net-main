import express from 'express';
import multer from 'multer'; // For file uploads
import serviceProviderModel from "../Models/service_provider.js";
import { v2 as cloudinary } from 'cloudinary'; // Cloudinary import

const router = express.Router();

// Multer setup for file uploads using memory storage
const storage = multer.memoryStorage();
const upload = multer({ storage });

// POST route for registering service provider
router.post('/provider', upload.single('profileImg'), async (req, res) => {
    try {
        const { name, email, phoneNumber, address, education, workAt, specialization, fees, experience, field } = req.body;

        // Check if a file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded' });
        }

        // Upload the image to Cloudinary using the file buffer
        const uploadResult = await new Promise((resolve, reject) => {
            const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });

            uploadStream.end(req.file.buffer); // Pass the buffer from Multer to Cloudinary
        });

        // Create a new service provider object and save to database
        const newServiceProvider = new serviceProviderModel({
            name,
            email,
            phoneNumber,
            address,
            education,
            workAt,
            specialization,
            fees,
            experience,
            field,
            profileImg: uploadResult.secure_url // Save Cloudinary URL
        });

        await newServiceProvider.save();

        res.status(201).json({ message: 'Service Provider registered successfully!', newServiceProvider });
    } catch (error) {
        console.error('Error registering service provider:', error);
        res.status(500).json({ message: 'Error registering service provider.', error });
    }
});

export { router };
