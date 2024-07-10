import React from 'react'
import { Envolpe } from '../svg/envolpe'

export const Footer = () => {
  return (
      <div className='flex flex-col md:px-10  pb-10 lg:px-30 pt-20'>
      <div className='text-white bg-black p-10 flex flex-col sm:flex-row  justify-between rounded-2xl'>
        <h1 className=' text-xl md:text-2xl  lg:text-4xl  xl:text-6xl font-extrabold font-serif'>STAY UP TO DATE ABOUT LATEST TRENDS</h1>
        <form className='flex flex-col max-w-1/2 min-w-[300px] gap-1'>
         <div className="relative ">
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
       <Envolpe />
        <span className="sr-only">Search icon</span>
      </div>
      <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg flex-grow bg-[#ffffff]  focus:ring-gray-50 focus:outline-0" placeholder="Enter your Email address" />
        </div>
<button type="button" className="text-black bg-white hover:bg-gray-50 focus:ring-2 focus:outline-none cursor-pointer focus:ring-gray-100 font-medium rounded-lg text-sm px-4 py-2 text-center ">Subscribe to Newsletter</button>
        </form>

      </div>
      <div className='flex flex-col items-start justify-center mt-5'>
        <h3 className='font-extrabold font-2xl'>Go Fashion</h3>
        <p>We have clothes that suite  </p>
        <p>your style</p>
      </div>
    </div>
  )
}
