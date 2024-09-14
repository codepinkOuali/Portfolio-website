import React from 'react'

export default function Contact() {
  return (
    <section id='contact' className='text-gray-600 body-font'>
        <div className='container mx-auto flex px-5 py-24 items-center justify-center flex-col'>
            <div data-aos='fade-up' data-aos-delay='300' className='text-center lg:w-2/3 w-full'>
             <h1 className='title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900'>Contact</h1>
             <p className='mb-8 leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, iusto quaerat similique delectus consequatur distinctio sapiente maiores eum aliquid voluptate nostrum magnam facere autem consectetur non ipsam, a doloribus quos?
             </p>  
                <div data-aos='fade-up' data-aos-delay='500' className='flex flex-col items-center text-xl font-bold'>
                  
                  <div className='flex items-center space-x-2'>
                    <svg class="h-8 w-8 text-green-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                        <path d="M15 6h6m-3 -3v6" />
                    </svg>
                        <span >+99 999999999</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                  <svg class="h-8 w-8 text-red-500" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" />
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <polyline points="3 7 12 13 21 7" />
                  </svg>
                        <span >myemail@eamil.com</span>
                  </div>
                  <div className='flex items-center space-x-2'>
                  <svg class="h-8 w-8 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                  </svg>
                        <span >mylinkedin</span>
                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}
