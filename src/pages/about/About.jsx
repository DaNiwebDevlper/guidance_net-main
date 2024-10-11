import React from 'react'

const AboutPage = () => {
  return (
    <div className='min-h-screen flex flex-col sm:flex-row gap-5 justify-center items-center p-9'>
      <div className="flex flex-col gap-y-5 justify-center sm:w-[50%]">
        <h1 className='sm:text-5xl text-4xl font-bold font-mono uppercase'>About Us</h1>
        <p className='text-md text-justify text-black/70'>Guidance Net is a website that allows users to find and consul with experts in various fields such as healthcare, finance, law, education and more who are located nearby. The platform uses geo location technology to connect users with experts in their area making it easier to get personalized advice and guidance.</p>
        <button className='text-lg w-fit font-semibold px-6 py-3 bg-bgSecondary text-white rounded'>Read more</button>
      </div>
      <div className="sm:w-[50%]">
        <img src="/assets/about.jpg" alt="about-img" className="w-[550px] h-[400px] rounded-lg" />
      </div>

    </div>
  )
}

export default AboutPage
