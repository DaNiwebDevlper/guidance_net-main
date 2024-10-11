import React, { useState } from 'react';
import { FaTimes } from "react-icons/fa";
import toast from 'react-hot-toast';
import axios from 'axios';
const AppointmentModal = ({ providerId, closeModal, providerEmail }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Send the formData directly, flattened with providerEmail and providerId
            const res = await axios.post('http://localhost:8080/book/appointments', {
                ...formData,
                providerEmail,
                providerId,
            });

            // Display a success message and close the modal
            toast.success(res.data.message);
            closeModal();
        } catch (error) {
            console.error("Error booking appointment:", error);
            toast.error("Failed to book an appointment. Please try again.");
        }
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="p-5 bg-[#fdfdfd] rounded-xl sm:w-[400px] w-[300px] relative">
                <h2 className="text-2xl mb-5 font-semibold text-center">Book Appointment</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your Name..."
                        value={formData.name}
                        onChange={handleInputChange}
                        className="px-3 py-2 border rounded-lg text-sm outline-1 outline-primary"
                    />
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="px-3 py-2 border rounded-lg text-sm outline-1 outline-primary"
                    />
                    <input
                        required
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="px-3 py-2 border rounded-lg text-sm outline-1 outline-primary"
                    />
                    <input
                        required
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        className="px-3 py-2 border rounded-lg text-sm outline-1 outline-primary"
                    />
                    <input
                        required
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="px-3 py-2 border rounded-lg text-sm outline-1 outline-primary"
                    />
                    <button type="submit" className="bg-primary text-white py-2 px-4 rounded">
                        Submit
                    </button>
                </form>
                <button onClick={closeModal} className="mt-3 text-black/70
                 absolute top-1 right-5 z-50"><FaTimes size={20} /></button>
            </div>
        </div>
    );
};

export default AppointmentModal;
