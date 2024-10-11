import { hash } from 'bcrypt';
import UserModel from '../Models/User.js';

const adminDasbboard = async (req, res) => {
    res.json({
        msg: "Admin Dashboard"
    })
}


const createAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Check if the user making the request is an admin
        if (req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Only admins can create admin accounts' });
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in use' });
        }

        const hashedPassword = await hash(password, 10);

        // Create a new admin user
        const newAdmin = new UserModel({
            name,
            email,
            password: hashedPassword,
            role: 'admin', // Set role to admin
            status: "approved", // Admins can be automatically approved
        });

        await newAdmin.save();

        res.status(201).json({
            message: 'Admin user created successfully',
            user: {
                name: newAdmin.name,
                email: newAdmin.email,
                role: newAdmin.role,
                status: newAdmin.status
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


export {
    adminDasbboard,
    createAdmin
}