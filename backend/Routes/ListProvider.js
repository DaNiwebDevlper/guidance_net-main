// In your Routes file
import express from 'express';
import serviceProviderModel from '../Models/service_provider.js';

const router = express.Router();


//  fetch all service providers
router.get('/providers', async (req, res) => {
    try {
        const providers = await serviceProviderModel.find();
        res.status(200).json(providers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching providers', error });
    }
});

// DELETE route to remove a service provider by ID
router.delete('/providers/:id', async (req, res) => {
    try {
        await serviceProviderModel.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Provider deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting provider', error });
    }
});

// PUT route to update provider information
router.put('/providers/:id', async (req, res) => {
    try {
        const updatedProvider = await serviceProviderModel.findByIdAndUpdate(
            req.params.id,
            { $set: req.body }, // Update the provider's fields with request body data
            { new: true } // Return the updated document
        );

        if (!updatedProvider) {
            return res.status(404).json({ message: 'Provider not found' });
        }

        res.status(200).json({ message: 'Provider updated successfully✨', provider: updatedProvider });
    } catch (error) {
        console.error("Error updating provider:", error);
        res.status(500).json({ message: 'Error updating provider', error });
    }
});

// to get the updated data
router.get('/edit/:id', async (req, res) => {
    try {
        const provider = await serviceProviderModel.findById(req.params.id);
        if (!provider) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json({ provider });
    } catch (error) {
        console.error('Error fetching provider data:', error);
        res.status(500).json({ message: 'Error fetching provider data', error });
    }
});

// to get service provider data by field or catagory
router.get('/services/:field', async (req, res) => {
    const { field } = req.params;
    try {
        const providers = await serviceProviderModel.find({ field });
        res.status(200).json({ providers });
    } catch (error) {
        console.error('Error fetching providers:', error);
        res.status(500).json({ message: 'Error fetching providers' });
    }
});


// to get service provider data by id
router.get('/providerData/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const providerData = await serviceProviderModel.findById(id); // Use `id` directly
        if (!providerData) {
            return res.status(404).json({ message: 'Provider not found' });
        }
        res.status(200).json({ providerData });
    } catch (error) {
        console.error('Error fetching provider data:', error);
        res.status(500).json({ message: 'Error fetching provider data' });
    }
});

export { router };
