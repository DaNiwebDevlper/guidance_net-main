import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { AppointmentModal, Loader } from '../../components';


const ProfileDetails = () => {
    const [providerData, serProviderData] = useState([])
    const [loading, setLoading] = useState()
    const [error, setError] = useState(null)
    const { id } = useParams()
    const [showModal, setShowModal] = useState(false)

    // appointment model function
    const handleBookAppointment = () => {
        setShowModal(true);
    };

    const fetchData = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`http://localhost:8080/list/providerData/${id}`)
            serProviderData(res.data.providerData)
        } catch (error) {
            setError('Failed to fetch services.');
            console.error('Error fetching services:', error);
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchData()
    }, [])


    if (error === true) {
        return <div className="text-red-500">Provider not found!</div>;
    }

    if (loading === true) {
        return <Loader />
    }

    return (
        <main className="min-h-screen">
            <div className=" flex flex-col gap-5 sm:flex-row justify-center items-center p-9">
                {/* img section */}
                <section className="bg-gradient-to-b from-blue-500 to-blue-700 rounded-xl">
                    <img src={providerData.profileImg} alt={providerData.name} className='w-[300px] h-[300px] object-cover' />
                </section>
                {/* details section */}
                <section className="sm:w-[80%] w-full">
                    {/* basic details */}
                    <div className="w-full">
                        <div className="flex gap-2 flex-col items-center sm:items-start border-b-2 p-3 border-dashed ">
                            <h1 className="text-4xl font-semibold">{providerData.name}</h1>
                            <p className='text-lg text-black/70'>{providerData.education}</p>
                            <p className='text-lg text-black/70'>
                                Specialization in  {providerData.specialization}
                            </p>
                        </div>
                        <div className="flex gap-1 flex-col items-center sm:items-start border-b-2 p-3 border-dashed ">

                            <p className='text-lg text-black/70'>Working At</p>
                            <p className='text-lg text-black font-semibold'>
                                {providerData.workAt}
                            </p>
                        </div>
                        <div className="flex gap-1 flex-col items-center sm:items-start border-b-2 p-3 border-dashed ">
                            <p className='text-lg text-black/80'>
                                <b>Consultation Fee </b> Take : {providerData.fees} (incl.tax)
                            </p>
                        </div>
                    </div>
                </section>
            </div>
            {/* experience section */}
            <div className="sm:flex hidden gap-5 flex-wrap justify-center items-center p-5">
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Total experience</p>
                    <p className='font-semibold text-lg'>{providerData.experience} Years</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100 overflow-hidden">
                    <p className='text-md text-gray-400'>Education</p>
                    <p className='font-semibold text-lg'>{providerData.education}</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Join Date</p>
                    <p className='font-semibold'>{new Date(providerData.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Specialization</p>
                    <p className='font-semibold text-lg'>{providerData.specialization}</p>
                </div>
                <div className="flex gap-2 w-[200px] p-3 h-[100px] flex-col rounded-xl bg-gradient-to-t from-slate-50 to-slate-100">
                    <p className='text-md text-gray-400'>Total Rating(122)</p>
                    <p className='font-semibold text-lg'>⭐ (4.89)</p>
                </div>

            </div>
            <div className="sm:w-full justify-center items-center flex my-5">

                <button className="text-xl text-white bg-primary py-3 sm:w-[95%] w-[85%] rounded-xl"
                    onClick={handleBookAppointment}>
                    Book Apointment Now
                </button>
            </div>

            {showModal && <AppointmentModal closeModal={() => setShowModal(false)} providerId={providerData._id} providerEmail={providerData.email} />}
        </main>
    );
};

export default ProfileDetails;
