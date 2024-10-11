import React from 'react'
const Contact = () => {

  return (
    <div className='px-9 min-h-screen flex justify-center items-center flex-col sm:flex-row'>
      <div className="sm:w-[50%] w-full">
        <h1 className='text-4xl font-semibold font-mono my-5'>Contact US</h1>
        <form className='flex gap-5 flex-col'>
          <input type="text" className='shadow-md w-full px-5 py-2 border' placeholder='Name...' />
          <input type="text" className='shadow-md w-full px-5 py-2 border' placeholder='Email...' />
          <input type="text" className='shadow-md w-full px-5 py-2 border' placeholder='Phone...' />
          <textarea name="" rows={7} className='shadow-md w-full px-5 py-2 border' placeholder='Message...'></textarea>
          <button className='text-lg font-semibold px-9
           py-3 bg-primary text-white w-fit uppercase' type='submit'>submit</button>
        </form>
      </div>
      <div className="sm:w-[50%] p-9 overflow-hidden">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d851.2122458487569!2d73.10629512838878!3d31.41828659838459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392269dec289e8cd%3A0x33aa0371e60d11d4!2sGovt.%20Municipal%20Graduate%20College%20Jaranwala%20Road%2C%20Abdullahpur%20%2C%20Faisalabad!5e0!3m2!1sen!2s!4v1725609970563!5m2!1sen!2s" className='sm:w-[550px] sm:h-[400px] w-[350px] h-[350px]' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Contact
