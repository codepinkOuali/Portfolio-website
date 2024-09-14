import React from 'react'
import Navbar from '../navbar/Navbar'
import me from '../../assets/me.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] flex flex-col items-center'>
        <div className='md:h-[720px] h-[990px] md:w-[1600px] w-[900px] bg-gradient-to-r absolute bg-blue-950 rounded-full transform rotate-6 -top-40 z-0'></div>
        <Navbar />

        <section id='home' className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pd-24 md:pt-32 pt-24 md:pb-24 mt-24 md:mt-0 z-10'>
          <div data-aos='fade-up' className='flex-1 md:text-left mt-10 md:mt-0'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>Cristian Reynolds</h1>
            <p data-aos='fade-up' data-aos-delay='300' className='text-base sm:text-lg md:text-lg text-gray-300 mb-6'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo voluptatum 
            </p>
            <button type="button" className="text-gray-900 mt-4 bg-white hover:bg-blue-300 font-semibold rounded-full text-sm px-5 py-2.5 text-center ">
              Contact
            </button>
          </div>
          <div data-aos='fade-up' className='flex-1 flex justify-center md:justify-end mt-0 md:mt-0'>
          <img src={me} alt="Hero Image" className='h-[300px] sm:h-[400px] md:h-[440px] w-[250px] sm:w-[360px] object-cover rounded-lg' />

          </div>
        </section>

    </div>
  )
}
