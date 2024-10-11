import express from "express";
import cloudinary from "../config/cloudinary.js";
import upload from "../config/multerCongfig.js";
const router = express.Router();

router.post('/upload', upload.single('image'), async (req, res) => {
    try {
        // Check if the file was uploaded
        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        // Upload to Cloudinary
        const uploadStream = cloudinary.uploader.upload_stream((error, result) => {
            if (error) {
                return res.status(500).json({ message: 'Cloudinary upload failed', error });
            }
            res.status(200).json({ message: "Image uploaded successfully to Cloudinary", url: result.secure_url });
        });

        // Pass the buffer from Multer to Cloudinary
        uploadStream.end(req.file.buffer); // Use .end() with the buffer directly
    } catch (error) {
        console.error("Server error:", error); // Log the error for debugging
        res.status(500).json({ message: 'Server error', error });
    }
});

export { router }; // Change export to default if you want to use default import
