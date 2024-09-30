import React, { useState } from 'react';
import { LinkComp } from '../../components';
import toast from 'react-hot-toast';
import { Router } from 'react-router-dom';
import { authenticateUser, isAdmin } from '../../../backend/Middlewares/Authorization';
import { adminDasbboard } from '../../../backend/Controllers/AdminController';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        role: 'client', // Default role as 'client'
    });
const router = Router()
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform validation and registration logic here
        if (formData.password !== formData.confirmPassword) {
            toast.error('Passwords do not match!');
        } else {
            console.log(formData); // Send formData to the backend for registration
        }
    };

    // if (formData.email === "zubair@gmail.com" && formData.password === "zubair") {
    //     setFormData(formData.role === "admin")
    //     router.get('/dashboard', authenticateUser, isAdmin , adminDasbboard);
    // }

    return (
        <div className="flex items-center p-9 justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center">Register</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>

                    {/* Username */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Username</label>
                        <input
                            type="text"
                            name="username"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your username"
                            required
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    {/* Address */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your address"
                            required
                        />
                    </div>

                    {/* Phone Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phone"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number"
                            required
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Confirm Password</label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Confirm your password"
                            required
                        />
                    </div>

                    {/* User Type Selection */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Register as</label>
                        <div className="flex items-center space-x-4">
                            {/* Client/User */}
                            <div>
                                <input
                                    type="radio"
                                    id="client"
                                    name="userType"
                                    value="client"
                                    checked={formData.role === 'client'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="client" className="text-sm">Client (Hire Service)</label>
                            </div>

                            {/* Service Provider */}
                            <div>
                                <input
                                    type="radio"
                                    id="serviceProvider"
                                    name="userType"
                                    value="serviceProvider"
                                    checked={formData.role === 'serviceProvider'}
                                    onChange={handleChange}
                                    className="mr-2"
                                />
                                <label htmlFor="serviceProvider" className="text-sm">Service Provider </label>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            Register
                        </button>
                    </div>
                </form>
                <p className='my-3 text-center text-black/60'>if you have already account<span className='text-blue-500 underline'><LinkComp to="/login" >Login</LinkComp></span></p>
            </div>
        </div>
    );
};

export default Register;
