import React from 'react';
import { Link, useParams } from 'react-router-dom';
import servicesData from '../../data/ServicesProvider.json';
import { EmployeeCard } from '../../components';

const ServiceProviders = () => {
    const { serviceId } = useParams();
    const service = servicesData.services.find(s => s.id === parseInt(serviceId));

    if (!service) {
        return <div>Service not found!</div>;
    }

    return (
        <div className='min-h-screen flex flex-col items-center p-9'>
            <h1 className='text-4xl font-semibold text-center mb-9'>{service.name}</h1>
            <div className="flex flex-wrap gap-5 justify-center w-full">
                {service.providers.map(provider => (
                    <Link to={`/services/${service.id}/${provider.id}`} key={provider.id} className="provider-card">
                        <EmployeeCard employeeData={provider} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ServiceProviders;
