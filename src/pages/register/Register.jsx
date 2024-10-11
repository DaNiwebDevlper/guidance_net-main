import React, { useState } from 'react';
import { LinkComp, RegisterForm } from '../../components';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        role: 'client', // Default role as 'client'
        confirmPassword: '',
        phoneNumber: ''
    });

    const navigate = useNavigate()

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // compare password to confirmPassword
            if (formData.password !== formData.confirmPassword) {
                toast.error('Passwords do not match!');
            } else {
                // send data to database
                const response = await axios.post('http://localhost:8080/auth/signup', formData);
                // sent message based on Role
                toast.success("Registered successfully✨");
                navigate("/login")
                // after submission clear fields
                setFormData({
                    name: '',
                    email: '',
                    password: '',
                    role: 'client',
                    confirmPassword: '',
                    phoneNumber: ''
                })


            }
        } catch (error) {
            console.error(error.response.data.message);
            toast.error(error.response.data.message);
        }
    };

    return (
        <RegisterForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
    );
};

export default Register;