import React from 'react'
import LinkComp from './LinkComp'

const RegisterForm = ({ handleSubmit, handleChange, formData }) => {
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
                            name="name"
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

                    {/* Phone Number */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your phone number..."

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
                    {/* User Type Selection */}
                    <div>
                        <label className="block mb-1 text-sm font-medium">Register as</label>
                        <div className="flex items-center space-x-4">
                            {/* Client/User */}
                            <div>
                                <input
                                    type="radio"
                                    id="client"
                                    name="role"
                                    value="client"
                                    checked={formData.role === 'client'}
                                    onChange={handleChange} // Correct state update
                                    className="mr-2"
                                />
                                <label htmlFor="client" className="text-sm">Client (Hire Service)</label>
                            </div>

                            {/* Service Provider */}
                            <div>
                                <input
                                    type="radio"
                                    id="serviceProvider"
                                    name="role"
                                    value="service_provider" // Update 'role' instead of 'userType'
                                    checked={formData.role === 'service_provider'}
                                    onChange={handleChange} // Correct state update
                                    className="mr-2"
                                />
                                <label htmlFor="serviceProvider" className="text-sm">Service Provider</label>
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
                <p className='my-3 text-center text-black/60'>If you have already account ! <span className='text-blue-500 underline'><LinkComp to="/login" >Login</LinkComp></span></p>
            </div>
        </div>
    )
}

export default RegisterForm