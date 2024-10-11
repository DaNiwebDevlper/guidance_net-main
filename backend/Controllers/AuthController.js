import { hash, compare } from 'bcrypt';
import jsonwebtoken from 'jsonwebtoken';
import UserModel from "../Models/User.js";

const { sign, verify } = jsonwebtoken;
const signup = async (req, res) => {
    try {
        const { name, email, password, role, phoneNumber } = req.body;

        // Check if the user already exists
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already in exist' });
        }

        if (role === 'admin') {
            // Check if the current user is an admin (assuming you have some way to identify the logged-in user)
            return res.status(403).json({ message: 'Only admins can create admin accounts' });
        }

        const hashedPassword = await hash(password, 10);

        const newUser = new UserModel({
            name,
            email,
            password: hashedPassword,
            role,
            phoneNumber
        });

        await newUser.save();

        res.status(201).json({
            user: {
                name: newUser.name,
                email: newUser.email,
                role: newUser.role,
                phoneNumber: newUser.phoneNumber
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}


const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });

        const errorMsg = 'Auth failed email or password is wrong';
        if (!user) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }

        const isPassEqual = await compare(password, user.password);

        if (!isPassEqual) {
            return res.status(403)
                .json({ message: errorMsg, success: false });
        }

        // Sign JWT tokens
        const jwtToken = sign(
            { email: user.email, _id: user._id, role: user.role },  // Include role in the JWT payload
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: '24h' }
        );

        const refreshToken = sign(
            { email: user.email, _id: user._id, role: user.role },
            process.env.JWT_REFRESH_SECRET,
            { expiresIn: '7d' }
        );

        // Set the refresh token in the cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        // Send the response with role included
        res.status(200)
            .json({
                message: "Login Success",
                success: true,
                jwtToken,
                role: user.role,  // Include the role in the response
                email,
                name: user.name,

            });

    } catch (err) {
        res.status(500)
            .json({
                message: "Internal server error",
                success: false
            });
    }
};



const refreshToken = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
        return res.status(403).json({ message: 'No refresh token provided' });
    }
    try {
        const decoded = verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        const user = await UserModel.findById(decoded._id);
        if (!user) {
            return res.status(403).json({ message: 'User not found' });
        }
        const newAccessToken = sign(
            { email: user.email, _id: user._id, role: user.role },
            process.env.JWT_ACCESS_SECRET,
            { expiresIn: '15m' }
        );
        res.status(200).json({
            message: 'New access token created',
            accessToken: newAccessToken
        });

    }
    catch (error) {
        console.error('Error verifying refresh token:', error);
        return res.status(403).json({ message: 'Invalid refresh token' });
    }
}


const userProfile = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await UserModel.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        if (!user.isApproved) {
            return res.status(403).json({ message: 'User is not approved by admin yet.' });
        }
        const { profilePicture, phoneNumber, websiteLink, company } = req.body;
        user.profilePicture = profilePicture || user.profilePicture;
        user.phoneNumber = phoneNumber || user.phoneNumber;
        user.websiteLink = websiteLink || user.websiteLink;
        user.company = company || user.company;

        await user.save();

        res.status(200).json({
            message: 'Additional information updated successfully',
            user: {
                name: user.name,
                email: user.email,
                profilePicture: user.profilePicture,
                phoneNumber: user.phoneNumber,
                websiteLink: user.websiteLink,
                company: user.company,
                isApproved: user.isApproved
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}




export {
    signup,
    login,
    refreshToken,
    userProfile
}