import React from 'react'

function Footer() {
  return (
    <div id='Contact' className='flex justify-center h-[80rem] md:h-[26rem]'>
      <div className='flex flex-col text-center md:text-left md:flex-row gap-20 md:gap-10 w-5/6 mt-20'>
        <div className=' md:w-1/4'>
          <div className=' mb-8 text-3xl'>
            <span className='font-bold'>CAR</span> Rental
          </div>
          <div className='flex flex-col gap-8'>
            <span>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</span>
            <div className='flex flex-col gap-2'>
              <a href='tel:123456789' className='cursor-pointer font-bold hover:text-colour'>
                &#9742; (123)-456-789
              </a>
              <a href='mailto: carrental@gmail.com' className='cursor-pointer font-bold hover:text-colour'>
                &#9993; carrental@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className='md:w-1/4'>
          <div className='mb-8'>
            <span className='font-bold text-3xl'>COMPANY</span>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <span className='cursor-pointer hover:text-colour'>New York</span>
            <span className='cursor-pointer hover:text-colour'>Careers</span>
            <span className='cursor-pointer hover:text-colour'>Mobile</span>
            <span className='cursor-pointer hover:text-colour'>Blog</span>
            <span className='cursor-pointer hover:text-colour'>How we work</span>
          </div>
        </div>
        <div className='md:w-1/4'>
          <div className='mb-8'>
            <span className='font-bold text-3xl'>WORKING HOURS</span>
          </div>
          <div className='flex flex-col gap-2 md:gap-4'>
            <span>Mon - Fri: 9:00AM - 9:00PM</span>
            <span>Sat: 9:00AM - 19:00PM</span>
            <span>Sun: Closed</span>
          </div>
        </div>
        <div className='md:w-1/4'>
          <div className='mb-8'>
            <span className='font-bold text-3xl'>SUBSCRIPTION</span>
          </div>
          <div className='flex flex-col gap-4'>
            <span>Subscribe your Email address for latest news & updates.</span>
            <input className='bg-slate-200 p-4 border-0 focus:outline-none' placeholder='Enter Email Address'></input>
            <div className='bg-colour p-4 text-white text-center font-bold rounded shadow-lg shadow-red-200 cursor-pointer hover:shadow-colour'>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
