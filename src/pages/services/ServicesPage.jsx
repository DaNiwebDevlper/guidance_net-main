import React from 'react'
import { LinkComp, ServiceCard } from '../../components'
const serviceData = [
    { title: "Doctors", imgSrc: "/assets/card-images/doctor.png", field: "doctor", desc: "Comprehensive healthcare services for all ages, focusing on personalized treatment, prevention, and well-being to ensure a healthy life ", },
    {
        imgSrc: "/assets/card-images/lawyer.png",
        title: "Lawyer",
        desc: "Expert legal assistance for personal, business, or family matters. Providing guidance and representation to protect your rights and interests",
        field: "lawyer"
    },
    {
        imgSrc: "/assets/card-images/engineer.png",
        title: "Engineer",
        desc: " Professional accounting and financial management services, from bookkeeping to tax planning, ensuring accurate and compliant financial records",
        field: "agent"
    },
]
const ServicesPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center p-5 gap-5'>
            <h1 className='text-3xl sm:text-4xl font-semibold my-5 capitalize'>Our services</h1>
            <div className="flex flex-wrap justify-center items-center gap-5">
                {serviceData.map((data) => (
                    <LinkComp to={`/services/${data.field}`}>
                        <ServiceCard servicesData={data} />
                    </LinkComp>
                ))}
            </div>
        </div>
    )
}

export default ServicesPage