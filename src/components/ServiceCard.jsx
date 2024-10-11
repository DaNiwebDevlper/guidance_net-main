import React from 'react'

const ServiceCard = ({ servicesData }) => {
  return (
    <div className='p-5 sm:w-[380px] bg-slate-50 w-[300px] min-h-[280px] border rounded justify-center items-center flex flex-col gap-y-5 shadow-md hover:scale-105 transition-all cursor-pointer'>
      <div className="">
        <img src={servicesData.imgSrc} alt={servicesData.title} className='w-[200px] h-[200px] object-cover rounded-full' />
      </div>
      <h1 className='text-2xl font-mono font-semibold text-center'>{servicesData.title}</h1>

    </div>
  )
}

export default ServiceCard