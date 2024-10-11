import UserModel from "../Models/User.js";

const clientDasbboard = async (req, res) => {
    try {
        const user = await UserModel.findById(req.user._id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};


export default clientDasbboard
