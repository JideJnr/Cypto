import React from 'react'

import { Link } from 'react-router-dom'

function Contact({data}) {
  return (
    <div className='bg-[#f6f6f6] w-full h-screen'>

        <div className='p-5 '>
        <div>
        <div className='flex-col text-center'>
                
                <p className=' m-2 text-2xl font-medium'>Hello Olajide</p>
                  
                <p className=' m-2  font-medium'>
                    How can we help you today?
                </p>
    
        </div>
    
            <div className='flex justify-center'>
            <Link to='/c'>
                <button className= 'cursor-pointer px-6 my-3  h-10 text-white w-28 bg-[#111111]   rounded text-xs '>
                        Lets Chat
                </button>
            </Link>

            </div>

        </div>
            <div>
               <p className='text-blue-700'> Contact Us</p> 
            </div>

            <div className='flex  text-sm border-b'>
                <div className=' border rounded m-2 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                </div>
                
                <div className='m-2 p-3 '>
                    <p>    EMAIL US AT</p>
                    <p>HELPDESK@NEFLI.COM</p>
                    
                </div>
            </div>

            <div className='flex  text-sm border-b'>
                <div className=' border rounded m-2 p-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                    </svg>
                </div>
                
                <div className='m-2 p-3' >
                    <p>   Visit FAQ </p>
                    <p>FAQ.NEFLI.COM</p>
                 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact