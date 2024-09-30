import React, { useState } from 'react'
import AddButton from '../component/AddButton'
import StaffModel from '../component/StaffModel';
import { MdDelete } from "react-icons/md";
const StaffData = [
    { name: "Zulfiqar Ali Cheema", desig: "Library Attendant", imgSrc: "/assets/client-1.jpg" },
    { name: "Zulfiqar Ali Cheema", desig: "Library Attendant", imgSrc: "/assets/client-1.jpg" },
    { name: "Zulfiqar Ali Cheema", desig: "Library Attendant", imgSrc: "/assets/client-1.jpg" }
]

const LibraryStaff = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => setIsModalOpen(true);
    const handleCloseModal = () => setIsModalOpen(false);

    return (
        <div>
            <AddButton text="Add Staff" onClick={handleOpenModal} />
            <h1 className='text-4xl font-bold font-mono m-5'>Library Staff</h1>
            <div className='flex flex-col sm:flex-row gap-5 flex-wrap justify-center items-center p-5'>
                {StaffData.map((staffInfo) => (
                    <div className="border my-5 flex-col rounded-lg p-5 sm:w-[300px] items-center min-h-[150px] bg-slate-50 flex gap-y-2 justify-center relative">
                        <img src={staffInfo.imgSrc} alt={staffInfo.name} className='size-[150px] rounded-full border' />
                        <p className='font-semibold'>{staffInfo.name}</p>
                        <p><b>Desig: </b> <span>{staffInfo.desig}</span></p>

                        <button className='text-xl absolute top-2 right-2 hover:bg-red-200 text-red-500 bg-red-100 rounded-full p-2'><MdDelete /></button>
                    </div>
                ))}
                {/* StaffModal component */}
                <StaffModel isOpen={isModalOpen} onClose={handleCloseModal} />
            </div>
        </div>
    )
}

export default LibraryStaff