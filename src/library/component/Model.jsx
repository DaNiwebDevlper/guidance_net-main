import React, { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const Modal = ({ isOpen, onClose }) => {
    const [selectedImages, setSelectedImages] = useState([]);

    // image logic
    const handleImageUpload = (e) => {
        const files = Array.from(e.target.files);
        const imagePreviews = files.map((file) => ({
            src: URL.createObjectURL(file),
            caption: '',
        }));
        setSelectedImages([...selectedImages, ...imagePreviews]);
    };

    // delete images button function

    const handleDeleteImage = (index) => {
        const updatedImages = selectedImages.filter((image, imgIndex) => imgIndex !== index);
        setSelectedImages(updatedImages);
    };


    // add caption
    const handleCaptionChange = (index, newCaption) => {
        const updatedImages = selectedImages.map((image, imgIndex) =>
            imgIndex === index ? { ...image, caption: newCaption } : image
        );
        setSelectedImages(updatedImages);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white p-5 rounded-lg w-[90%] max-w-md">
                <h2 className="text-xl font-bold mb-4">Add Images</h2>
                <input
                    type="file"
                    accept="image/*"
                    multiple
                    onChange={handleImageUpload}
                    className="mb-4"
                />

                <div className="flex flex-wrap gap-4">
                    {selectedImages.map((image, index) => (
                        <div key={index} className="relative border rounded-lg gap-2 flex flex-col items-center">
                            <img
                                src={image.src}
                                alt={`Selected ${index}`}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <input
                                type="text"
                                placeholder="Enter caption..."
                                value={image.caption}
                                onChange={(e) => handleCaptionChange(index, e.target.value)}
                                className=" p-1 border rounded w-full"
                            />
                            <button
                                onClick={() => handleDeleteImage(index)}
                                className="absolute top-1 right-1 text-red-500 bg-white rounded-full p-1 shadow hover:bg-red-100"
                            >
                                <MdDelete />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="mt-4 flex justify-end gap-2">
                    <button onClick={onClose} className="bg-gray-500 text-white px-4 py-2 rounded">
                        Cancel
                    </button>
                    <button onClick={onClose} className="bg-rose-500 text-white px-4 py-2 rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
