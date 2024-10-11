import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LoginForm } from "../../components/index"
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../redux/slices/AuthSlice';
const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const dispatch = useDispatch()

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/auth/login", formData);
      const { role, jwtToken, success } = res.data;

      // Check if the response has the required data
      if (!jwtToken) {
        console.error("Login failed: Missing token in response.");
        toast.error("Login failed: Missing token");
        return;
      }

      // Store JWT token and user role in localStorage
      localStorage.setItem("jwtToken", jwtToken);


      // Dispatch the login action to set isLoggedIn to true
      dispatch(loginSuccess({ jwtToken, isLoggedIn: success, role: role, user: success }));

      toast.success("Login Successful!");
      // Navigate based on the user's role
      if (role === "client") {
        navigate("/userProfile");
      } else if (role === "admin") {
        navigate("/admin");
      } else if (role === "service_provider") {
        navigate("/sp_dashboard");
      }
    } catch (error) {
      console.error("Full error:", error);
      toast.error("Login failed. Check your credentials.")
    }
  };

  return (
    <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} formData={formData} />
  );
};

export default Login;
