import multer from 'multer';
import path from 'path';

// Set up Multer storage engine (files stored in memory temporarily)
const storage = multer.memoryStorage();

// File filter to only allow image files
const fileFilter = (req, file, cb) => {
    const allowedTypes = /jpeg|jpg|png/;
    const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());

    if (extname) {
        cb(null, true);
    } else {
        cb(new Error('Only .jpg, .jpeg, and .png files are allowed!'));
    }
};

const upload = multer({ storage, fileFilter });

export default upload;
