import React from 'react'

const Banner = () => {
    return (
        <div className='min-h-screen flex gap-9 justify-center bg-bgPrimary mt-9 items-center'>
            <div className="w-[30%] sm:w-full  justify-end hidden sm:flex">
                <img src="/assets/professional-img.png" alt="professional-img" className='w-[450px]' />
            </div>
            <div className="w-full flex justify-center flex-col gap-y-6 px-9 sm:px-0">
                <h1 className='sm:text-4xl text-3xl font-mono text-primary font-semibold w-[90%]'>We Provide Professional Home Services</h1>
                <p className='text-md w-[90%] text-black/70'>randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All randomised words which don't look even slightly</p>
                <button className='text-lg text-white font-semibold px-7 py-3 bg-bgSecondary rounded w-fit'>Read more</button>
            </div>
        </div>
    )
}

export default Banner