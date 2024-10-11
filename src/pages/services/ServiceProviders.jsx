import React, { useEffect, useState } from 'react';
import { EmployeeCard, LinkComp } from '../../components';
import Loader from "../../components/loader/Loader";
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ServiceProvder = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true); // Initialize as true
    const [error, setError] = useState(null);

    const { field } = useParams();
    const fetchData = async () => {
        setLoading(true);
        try {
            const res = await axios.get(`http://localhost:8080/list/services/${field}`);
            setServices(res.data.providers);
        } catch (error) {
            setError('Failed to fetch services.');
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        fetchData();
    }, []);

    if (loading) {
        return <Loader />;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className='min-h-screen flex flex-col items-center justify-center p-9'>
            <div className="flex flex-wrap gap-5 justify-center w-full">
                {services.map(service => (
                    <LinkComp to={`/services/${service.field}/${service._id}`} key={service._id} className="service-card">
                        <EmployeeCard employeeData={service} />
                    </LinkComp>
                ))}
            </div>
        </div>
    );
};

export default ServiceProvder;
