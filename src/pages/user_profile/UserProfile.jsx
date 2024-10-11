import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "../../components/loader/Loader"
const UserProfile = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    // fetch data from database
    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('jwtToken');

            if (!token) {
                setError('No token provided. Please login.');
                setLoading(false);
                return;
            }

            const response = await axios.get('http://localhost:8080/client/dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Error fetching user data');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUserData();
    }, []);

    if (loading) return <Loader />;
    if (error) return <div className='text-xl font-semibold justify-center items-center flex min-h-[78vh]'><p>{error}</p></div>;

    return (
        <div className="flex justify-center items-center min-h-screen p-5">

            <div className="flex flex-col sm:flex-row sm:w-[70%] w-full">

                {/* user profile section */}
                <section className="flex flex-col gap-5 justify-center items-left pr-5 border-r-2 min-w-[30%]">
                    <img src="/assets/userProfile.png" alt="profile image" className='w-[150px] h-[150px] rounded-full border-2 shadow-lg' />
                    <p><strong>Name:</strong> {userData?.name || "Name not available"}</p>
                    <p><strong>Email:</strong> {userData?.email || "Email not available"}</p>
                    <p><strong>Contact No:</strong> {userData?.phoneNumber || "Phone number not available"}</p>

                </section>
                {/* appointment section */}
                <section className='w-full'>
                    <h1 className='text-3xl font-semibold text-center'>Appointments List</h1>
                </section>

            </div>
        </div>
    );

};

export default UserProfile;
