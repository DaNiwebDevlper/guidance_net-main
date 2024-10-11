import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { AddForm } from '../../components';

const AddProviders = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        profileImg: '',
        phoneNumber: '',
        address: '',
        education: '',
        workAt: '',
        specialization: '',
        fees: '',
        experience: '',
        field: ''
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, profileImg: e.target.files[0] });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = new FormData();
        Object.keys(formData).forEach(key => {
            form.append(key, formData[key]);
        });

        try {
            const res = await axios.post('http://localhost:8080/addServiceProvider/provider', form, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            toast.success('Service provider created successfully!');
            navigate('/admin/list_providers');
        } catch (error) {
            console.error('Error creating service provider:', error);
            toast.error('Failed to create service provider.');
        }
    };
    return (
        <AddForm formData={formData} handleChange={handleChange} handleFileChange={handleFileChange} handleSubmit={handleSubmit} />
    )
}

export default AddProviders