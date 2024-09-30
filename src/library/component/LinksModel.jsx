import React from 'react';

const LinksModel = ({ isOpen, onClose }) => {
    if (!isOpen) return null; // Conditionally render the modal

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 backdrop-blur-sm">
            <div className='bg-white p-5 rounded-lg w-[90%] max-w-md'>
                <h2 className="text-xl font-bold mb-4">Add New Link</h2>
                <form className="flex flex-col gap-4">
                    <input
                        type="text"
                        placeholder='Enter the title...'
                        className="p-2 border rounded"
                    />
                    <input
                        type="url"
                        name="link"
                        placeholder='Enter the URL...'
                        className="p-2 border rounded"
                    />
                </form>
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

export default LinksModel;
