import React from 'react'

const Banner = () => {
    return (
        <div className='min-h-screen flex gap-9 justify-center bg-bgPrimary mt-9 items-center'>
            <div className="w-[30%] sm:w-full  justify-end hidden sm:flex">
                <img src="/assets/banner.png" alt="professional-img" className='w-[570px]' />
            </div>
            <div className="w-full flex justify-center flex-col gap-y-6 px-9 sm:px-0">
                <h1 className='sm:text-4xl text-3xl font-mono text-black font-semibold w-[90%]'>We Provide Professional Services</h1>
                <p className='text-md w-[90%] text-black/70'>A website that connects users with
                    experts in various fields providing a convenient and accessible way to seek
                    advice and guidance.</p>
                <button className='text-lg text-white font-semibold px-7 py-3 bg-bgSecondary rounded w-fit'>Read more</button>
            </div>
        </div>
    )
}

export default Banner