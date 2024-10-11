import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Loader } from '../../components';
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
const ListProviders = () => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate()
    useEffect(() => {
        const fetchProviders = async () => {
            try {
                const response = await axios.get('http://localhost:8080/list/providers');
                setProviders(response.data);
            } catch (err) {
                setError('Error fetching providers.');
            } finally {
                setLoading(false);
            }
        };

        fetchProviders();
    }, []);


    // delete any provider
    const handleDelete = async (id) => {
        if (window.confirm('Are you sure you want to delete this provider?')) {
            try {
                await axios.delete(`http://localhost:8080/list/providers/${id}`);
                setProviders(providers.filter(provider => provider._id !== id));
            } catch (error) {
                alert('Error deleting provider');
            }
        }
    };

    // naviaget to edit page
    const handleEdit = (id) => {
        navigate(`/admin/edit_provider/${id}`)
    };

    if (loading) return <Loader />;
    if (error) return <p>{error}</p>;

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-3xl font-bold mb-4">Service Providers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {providers.map(provider => (
                    <div key={provider._id} className="p-4 bg-slate-50 flex flex-col justify-center items-center relative gap-3 shadow rounded-lg">
                        <img
                            src={provider.profileImg}
                            alt={provider.name}
                            className=" w-48 h-48 object-cover rounded-full"
                        />
                        <h3 className="text-xl font-bold">{provider.name}</h3>
                        <p className='font-semibold text-md'>Catagory:  <span className='font-normal uppercase'>{provider.field}</span></p>
                        <p> <b> Joined</b>: {new Date(provider.createdAt).toLocaleDateString()}</p>

                        <button
                            className=" text-green-500 absolute left-3 active:scale-90 transition-all top-3 w-fit"
                            onClick={() => handleEdit(provider._id)}
                        >
                            <FiEdit size={25} />
                        </button>
                        <button
                            className="text-red-500 active:scale-90 transition-all absolute w-fit top-2 right-2"
                            onClick={() => handleDelete(provider._id)}
                        >
                            <AiFillDelete size={25} />
                        </button>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListProviders;
