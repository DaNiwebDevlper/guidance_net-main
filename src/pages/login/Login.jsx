import React, { useState } from 'react';
import { LinkComp } from '../../components';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: 'client', // Default userType as 'client'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here based on userType
    console.log(formData);
    // Example: send formData to backend for authentication
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center">Login</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>

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

          {/* User Type Selection */}
          <div>
            <label className="block mb-1 text-sm font-medium">Login as</label>
            <div className="flex items-center space-x-4">
              {/* Client/User */}
              <div>
                <input
                  type="radio"
                  id="client"
                  name="userType"
                  value="client"
                  checked={formData.userType === 'client'}
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
                  checked={formData.userType === 'serviceProvider'}
                  onChange={handleChange}
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
              Login
            </button>
          </div>
        </form>
        <p className='my-3 text-center text-black/60'>if you do not have account <span className='text-blue-500 underline'><LinkComp to="/register" >Register</LinkComp></span> </p>
      </div>
    </div>
  );
};

export default Login;
