import React from 'react'

export default function Experience() {
  return (
    <div>
        <section id='experience' className='text-gray-600 body-font'>
            <div className='container px-5 py-24 mx-auto'>
                <div className='flex flex-col text-center w-full mb-20'>
                    <h1 data-aos='fade-up' data-aos-delay='300' className='sm:text-3xl text-3xl font-bold title-font mb-4 text-gray-900'>Experience</h1>
                    <p data-aos='fade-up' data-aos-delay='400' className='lg:w-2/3 mx-auto leading-relaxed text-base'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, facere, libero tempore, est fugiat recusandae dolore quos eaque distinctio vero eveniet esse laudantium suscipit reiciendis veniam aut! Harum, illo labore!
                    </p>
                </div>
                <div data-aos='fade-up' data-aos-delay='500' className='flex flex-wrap -m-4 text-center'>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                     <div className='border-2 border-blue-200 px-4 py-6 rounded-lg'>
                        <h2 className='title-font font-medium text-3xl text-gray-900'>+10 ans</h2>
                        <p className='leading-relaxed'>experience</p>
                     </div>
                    </div>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                     <div className='border-2 border-blue-200 px-4 py-6 rounded-lg'>
                        <h2 className='title-font font-medium text-3xl text-gray-900'>+1.3K</h2>
                        <p className='leading-relaxed'>Client</p>
                     </div>
                    </div>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                     <div className='border-2 border-blue-200 px-4 py-6 rounded-lg'>
                        <h2 className='title-font font-medium text-3xl text-gray-900'>+74</h2>
                        <p className='leading-relaxed'>Comploted projects </p>
                     </div>
                    </div>
                    <div className='p-4 md:w-1/4 sm:w-1/2 w-full'>
                     <div className='border-2 border-blue-200 px-4 py-6 rounded-lg'>
                        <h2 className='title-font font-medium text-3xl text-gray-900'>+1.5k</h2>
                        <p className='leading-relaxed'>Services</p>
                     </div>
                    </div>

                </div>
            </div>

        </section>
    </div>
  )
}
