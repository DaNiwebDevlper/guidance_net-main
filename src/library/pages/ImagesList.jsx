import React, { useState } from 'react';
import { MdDelete } from "react-icons/md";
import Modal from '../component/Model';
import AddButton from "../component/AddButton"
const images = [
    { imgSrc: "/assets/images/1.jpg", id: 1 },
    { imgSrc: "/assets/images/2.jpeg", id: 2 },
    { imgSrc: "/assets/images/3.jpg", id: 3 },
    { imgSrc: "/assets/images/4.jpg", id: 4 },
    { imgSrc: "/assets/images/5.jpg", id: 5 },
    { imgSrc: "/assets/images/6.jpg", id: 6 },
    { imgSrc: "/assets/images/7.jpg", id: 7 },
    { imgSrc: "/assets/images/8.jpg", id: 8 },
];

const ImagesList = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [imageList, setImageList] = useState(images)

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // delete button function
    const handleDeleteImg = (id) => {
        const updateImages = images.filter((img) => img.id !== id)
        setImageList(updateImages)
    }

    return (
        <main>
            {/* Add images button */}
            <AddButton text="Add images" onClick={openModal} />

            {/* Modal */}
            <Modal isOpen={isModalOpen} onClose={closeModal} />

            {/* Images list */}
            <section className="p-5">
                <div className="flex gap-5 flex-wrap justify-center items-center my-5">
                    {imageList.map((image, index) => (
                        <div className="relative" key={index}>
                            <img src={image.imgSrc} alt="gallery images" className="w-[300px] h-[200px] object-cover rounded-xl" />

                            {/* Delete Button */}
                            <button onClick={() => handleDeleteImg(image.id)} className="text-2xl text-red-500 bg-white rounded-full p-1 hover:bg-rose-200 border cursor-pointer active:scale-90 transition-all absolute top-2 right-2">
                                <MdDelete />
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default ImagesList;
