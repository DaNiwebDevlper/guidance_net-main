import React from 'react'
import toast from 'react-hot-toast'


const LandingPage = () => {
  return (
    <div className='min-h-[80vh] bg-bgPrimary flex flex-col sm:flex-row flex-wrap justify-center items-center p-9 relative'>
      <div className='sm:w-[50%] flex flex-col gap-y-5 p-5'>
        <h1 className='sm:text-5xl text-4xl font-bold text-primary font-mono'>Seek Guidance <br /> From Professionals</h1>
        <p className='text-black/60 '>A website that connects users with
          experts in various fields providing a convenient and accessible way to seek
          advice and guidance.</p>

        <button onClick={() => toast.success("message is sent")} className='text-lg font-semibold font-mono text-white px-9 py-3 rounded-lg bg-bgSecondary w-fit'>
          Contact US
        </button>
      </div>
      <div className="sm:w-[40%]">
        <img src="/assets/hero.png" alt="slider-img" className='md:w-[500px] lg:w-[550px] w-[400px] sm:absolute bottom-0' />
      </div>
    </div>
  )
}

export default LandingPage
