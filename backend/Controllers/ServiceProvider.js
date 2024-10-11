import serviceProviderModel from "../Models/service_provider.js"

const providerDasbboard = async (req, res) => {
    try {
        console.log('====================================');
        console.log(req.user._id);
        console.log('====================================');
        const user = await serviceProviderModel.findById({ _id: "6704145bf08a2b620676e235" });
        console.log('====================================');
        console.log(user);
        console.log('====================================');

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({
            name: user.name,
            email: user.email,
            role: user.role
        });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
}

export { providerDasbboard }
