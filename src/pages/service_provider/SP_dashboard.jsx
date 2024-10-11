import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "../../components/loader/Loader"


const SP_dashboard = () => {
    const [userData, setUserData] = useState(null)
    const [Loading, setLoading] = useState(null)
    const [error, setError] = useState('')

    // fetch data from database
    const fetchUserData = async () => {
        try {
            const token = localStorage.getItem('jwtToken');
            console.log('====================================');
            console.log("token:", token);
            console.log('====================================');
            if (!token) {
                setError('No token provided. Please login.');
                setLoading(false);
                return;
            }

            const response = await axios.get('http://localhost:8080/serviceprovider/sp_dashboard', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log('====================================');
            console.log("response:", response.data);
            console.log('====================================');
            setUserData(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            setError('Error fetching user data');
        } finally {
            setLoading(false);
        }
    };
    useEffect(() => {
        fetchUserData()
    }, [])


    if (Loading) return <Loader />;
    if (error) return <div className='text-xl font-semibold justify-center items-center flex min-h-[78vh]'><p>{error}</p></div>;

    return (
        <div className="p-8 bg-white shadow-lg rounded-lg max-w-lg mx-auto">
            <h2 className="text-3xl font-bold mb-4">Service Provider</h2>
            <div className="space-y-4">
                <p><strong>Name:</strong> {userData?.name}</p>
                <p><strong>Email:</strong> {userData?.email}</p>
                <p><strong>Role:</strong> {userData?.role}</p>
            </div>
        </div>
    );
}

export default SP_dashboard
