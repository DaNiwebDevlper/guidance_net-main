import React, { useState } from 'react';

const ImageModal = ({ isOpen, onClose }) => {
    const [imagePreview, setImagePreview] = useState(null);
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');

    // Handle image upload and preview
    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const imageUrl = URL.createObjectURL(file);
            setImagePreview(imageUrl);
        }
    };

    // Delete selected image
    const handleDeleteImage = () => {
        setImagePreview(null);
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name,
            designation,
            image: imagePreview,
        };
        console.log('Submitted Data:', formData);
        // You can pass formData to the parent component or API as needed
        onClose(); // Close modal after submission
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Add Details</h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">

                    {/* Image Input */}
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                        className="mb-2"
                    />

                    {/* Image Preview and Delete Button */}
                    {imagePreview && (
                        <div className="relative mb-4 ">
                            <img
                                src={imagePreview}
                                alt="Uploaded"
                                className="h-32 object-cover rounded-full w-fit"
                            />
                            <button
                                type="button"
                                onClick={handleDeleteImage}
                                className="absolute top-5 right-5 text-white bg-red-500 rounded-full p-1"
                            >
                                X
                            </button>
                        </div>
                    )}

                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder="Enter the name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="p-2 border rounded"
                        required
                    />

                    {/* Designation Input */}
                    <input
                        type="text"
                        placeholder="Enter the designation..."
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        className="p-2 border rounded"
                        required
                    />

                    {/* Action Buttons */}
                    <div className="mt-4 flex justify-end gap-2">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-500 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-rose-500 text-white px-4 py-2 rounded"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ImageModal;
