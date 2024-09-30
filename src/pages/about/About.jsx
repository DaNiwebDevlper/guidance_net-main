import React from 'react'

const AboutPage = () => {
  return (
    <div className='min-h-screen flex flex-col sm:flex-row gap-5 justify-center items-center p-9'>
      <div className="flex flex-col gap-y-9 justify-center sm:w-[50%]">
        <h1 className='sm:text-5xl text-4xl font-bold font-mono uppercase'>About Us</h1>
        <p className='text-md text-justify text-black/70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores iste architecto maxime rem quas molestiae nisi hic quos assumenda itaque saepe error dolores ab magnam, obcaecati qui officia quo aspernatur. Hic nemo iure illum iusto consequuntur facere unde delectus ullam aliquam quo, laboriosam sint aut sit, eaque eius sunt. Dolores maiores inventore neque incidunt dolore doloremque voluptatem, esse nemo error perspiciatis velit. Minus, quos ratione corrupti harum sequi mollitia amet velit. Temporibus aperiam vero culpa quia est ut id quidem architecto non sapiente sint sequi et debitis animi ducimus veniam a iure expedita, laboriosam iusto ratione error repellat tempore eius.</p>
        <button className='text-lg w-fit font-semibold px-6 py-3 bg-bgSecondary text-white rounded'>Read more</button>
      </div>
      <div className="sm:w-[50%]">
        <img src="/assets/about-img.jpg" alt="about-img" className="w-[550px] h-[400px]" />
      </div>

    </div>
  )
}

export default AboutPage
