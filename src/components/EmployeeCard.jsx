import React from 'react'

const EmployeeCard = ({ employeeData }) => {
    return (
        <div className=' p-3 sm:w-[300px] bg-slate-50 w-[300px] min-h-[280px] border rounded-xl justify-center items-center flex flex-col shadow-md hover:scale-105 transition-all cursor-pointer'>
            <div className="mb-2">
                <img src={employeeData.img} alt={employeeData.name} className='w-[200px] h-[200px] rounded-full object-cover' />
            </div>
            <div className="flex flex-col gap-2 justify-center items-center w-full">
                <h1 className='text-2xl font-semibold text-center'>{employeeData.name}</h1>
                <p className='text-lg font-semibold text-black/70'>{employeeData.education}</p>
                <p className='font-normal text-black/70'>Specialization in <span className=''>{employeeData.specialization}</span></p>

            </div>
        </div>
    )
}

export default EmployeeCard