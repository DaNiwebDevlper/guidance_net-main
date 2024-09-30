import React from 'react';
import { useParams } from 'react-router-dom';
import servicesData from '../../data/ServicesProvider.json';


const ProfileDetails = () => {
    const { serviceId, providerId } = useParams();

    const service = servicesData.services.find(
        (s) => s.id === parseInt(serviceId)
    );


    if (!service) {
        return <div className="text-red-500">Service not found!</div>;
    }


    const provider = service.providers.find(
        (p) => p.id === parseInt(providerId)
    );


    if (!provider) {
        return <div className="text-red-500">Provider not found!</div>;
    }

    return (
        <main className="min-h-screen">
            <div className=" flex flex-col gap-5 sm:flex-row justify-center items-center p-9">
                {/* img section */}
                <section className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl">
                    <img src={provider.img} alt={provider.name} className='w-[300px] h-[300px] object-cover' />
                </section>
                {/* details section */}
                <section className="sm:w-[80%] w-full">
                    {/* basic details */}
                    <div className="w-full">
                        <div className="flex gap-2 flex-col items-center sm:items-start border-b-2 p-3 border-dashed ">
                            <h1 className="text-4xl font-semibold">{provider.name}</h1>
                            <p className='text-lg text-black/70'>{provider.education}</p>
                            <p className='text-lg text-black/70'>
                                Specialization in  {provider.specialization}
                            </p>
                        </div>
                        <div className="flex gap-1 flex-col items-center sm:items-start border-b-2 p-3 border-dashed ">

                            <p className='text-lg text-black/70'>Working At</p>
                            <p className='text-lg text-black font-semibold'>
                                {provider.workingAt}
                            </p>
                        </div>
                        <div className="flex gap-1 flex-col items-center sm:items-start border-b-2 p-3 border-dashed ">
                            <p className='text-lg text-black/80'>
                                <b>Consultation Fee </b> Take : {provider.fees} (incl.tax)
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/* experience section */}
            <div className="sm:flex hidden gap-5 flex-wrap justify-center items-center p-5">
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Total experience</p>
                    <p className='font-semibold text-lg'>{provider.experince} Years</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Total experience</p>
                    <p className='font-semibold text-lg'>{provider.experince} Years</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100 overflow-hidden">
                    <p className='text-md text-gray-400'>Education</p>
                    <p className='font-semibold text-lg'>{provider.education}</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Joined Doctime</p>
                    <p className='font-semibold text-lg'>28 Sept 2024</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Total Rating(500)</p>
                    <p className='font-semibold text-lg'>⭐ (5.00)</p>
                </div>
            </div>
            <div className="sm:w-full justify-center items-center flex my-5 w-[95%]">

                <button className="text-xl text-white bg-primary py-3 w-[95%] rounded-xl">
                    Book Apointment Now
                </button>
            </div>
        </main>
    );
};

export default ProfileDetails;
