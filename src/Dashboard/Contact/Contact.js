import React from 'react'

import { Link } from 'react-router-dom'
import Taskbar from '../../Components/Taskbar'
import User from '../../assets/user.png'

function Contact({data}) {
  return (
    <div className='bg-[#eeeeee] w-screen h-screen font-medium '>

        <Taskbar/>

        <div className='p-5  flex flex-col'>

        <div className='rounded-full mx-auto flex border mb-2 w-fit h-fit'>
                <img src={User} alt='' className='w-[100px] h-[100px]'/>
            </div>
            <div className=' p-5 rounded-xl  grow overflow auto bg-white'>


                
                <div className='flex-col text-center'>

                    <p className=' m-2 text-2xl font-medium'>Hello </p>
                            
                    <p className=' m-2  font-medium'>
                        How can we help you today?
                    </p>

                    <Link to='c'>
                        <button className= 'cursor-pointer px-6 my-3  h-10 text-white w-28 bg-blue-500   rounded text-xs mx-auto '>
                            Lets Chat
                        </button>
                    </Link>
                
                </div>

                <div>

                    <div>
                        <p className='text-blue-700'> Contact Us</p> 
                    </div>

                    <div className='flex  text-sm border-b'>
                        <div className=' border rounded m-2 p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </div>
                        
                        <div className='m-2 p-3 flex flex-col '>
                            <p>    EMAIL US AT</p>
                            <p>HelpDesk@CoinVest.com</p>
                            
                        </div>
                    </div>

                    <div className='flex  text-sm border-b'>
                        <div className=' border rounded m-2 p-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                            </svg>
                        </div>
                        
                        <div className='m-2 p-3 flex flex-col' >
                            <p>   Visit FAQ </p>
                            <p>FAQ.CoinVest.COM</p>
                        
                        </div>
                    </div>

                </div>

            </div>


        </div>


    </div>
  )
}

export default Contact