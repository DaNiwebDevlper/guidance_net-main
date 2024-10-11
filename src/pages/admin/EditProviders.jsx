import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import EditForm from '../../components/admin/editPageForm/EditForm';

const EditProvider = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        address: '',
        education: '',
        workAt: '',
        specialization: '',
        fees: '',
        experience: '',
        field: '',
    });

    const navigate = useNavigate();
    const { id } = useParams();

    // Fetch provider data by ID on component mount
    const fetchProviderData = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/list/edit/${id}`);
            const providerData = res.data.provider;

            // Update form data with provider data (excluding profileImg)
            setFormData({
                name: providerData.name,
                email: providerData.email,
                phoneNumber: providerData.phoneNumber,
                address: providerData.address,
                education: providerData.education,
                workAt: providerData.workAt,
                specialization: providerData.specialization,
                fees: providerData.fees,
                experience: providerData.experience,
                field: providerData.field,
            });
        } catch (error) {
            console.error("Failed to fetch provider data:", error);
            toast.error("Failed to fetch provider data.");
        }
    };

    useEffect(() => {
        fetchProviderData();
    }, [id]);

    // Handle form input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.put(`http://localhost:8080/list/providers/${id}`, formData);

            toast.success(res.data.message);
            navigate('/admin/list_providers'); // Redirect after successful edit
        } catch (error) {
            console.error("Failed to update provider:", error);
            toast.error("Failed to update provider.");
        }
    };

    return (
        <EditForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
};

export default EditProvider;
