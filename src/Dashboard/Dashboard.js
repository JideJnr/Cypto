import React,  { useEffect, useState } from 'react'

import { Tab } from '@headlessui/react'
import { Fragment } from 'react'


import LogoBar from '../Components/LogoBar'
import LogoBarBeta from '../Components/LogoBarBeta'
import Home from '../Pages/Home'
import Asset from '../Pages/Asset'
import Trade from '../Pages/Trade'
import Pay from '../Pages/Pay'
import Settings from '../Pages/Settings'

import { auth, db } from '../config/firebase';
import { doc, getDoc } from 'firebase/firestore';



const Dashboard = () => {

    const [data, setData] = useState("");
    const user1 = auth.currentUser.uid
  
    useEffect(() => {
      getDoc(doc(db, "client", user1)).then((docSnap) => {
        if (docSnap.exists) {
          setData(docSnap.data());
        }
      });
  
  
    }, );
  

  return (


    <Tab.Group   >
        <div className=' w-screen h-screen  flex flex-col sm:flex-row-reverse '>
            <LogoBar/>
            
            <div className=' grow  flex bg-black overflow-auto '>
                
                <Tab.Panels className=' w-full h-full  flex bg-green-500'>
                   
                   <Tab.Panel className='  w-full h-full'>
                               
                           <Home />
                   </Tab.Panel>
  
                   <Tab.Panel className='  w-full h-full'>
                       <Asset/>
                      
                   </Tab.Panel>

                   <Tab.Panel className='  w-full h-full'>
                       <Trade/>
                   </Tab.Panel >

                   <Tab.Panel className='  w-full h-full'>
                        <Pay/>
                       
                   </Tab.Panel>

                   <Tab.Panel className='  w-full h-full'>
                        <Settings
                         data={data}
                        />
                   </Tab.Panel>


                </Tab.Panels>
       
            </div>

            <Tab.List className='flex sm:flex-col border-t sm:border-r ' >
   
                <div className=' bg-white  flex sm:flex-col w-full sm:w-[100px] md:w-[200px] lg:w-[250px]   '>    

                    <LogoBarBeta/>

                    <div className='flex flex-row sm:flex-col p-5 justify-center w-full  '>

                    <div className='w-1/5 sm:w-full sm:my'>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={`${selected ? 'text-blue-700 bg-blue-100 font-bold rounded-3xl' : 'bg-white font-semibold text-black rounded '}
                                flex flex-row border-gray-300 p-3`}
                            
                            >
                                <div className='flex mx-auto md:mx-2 p-3 sm:p-0'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                    </svg>


                                </div>

                                <div className='hidden md:flex'>
                                    <p>
                                        Home
                                    </p>

                                </div>


                            </div>
                            )}
                        </Tab>
                    </div>

                    <div className='w-1/5 sm:w-full sm:my'>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={`${selected ? 'text-blue-700 bg-blue-100 font-bold rounded-3xl' : 'bg-white font-semibold text-black rounded '}
                                flex flex-row border-gray-300 p-3`}
                            
                            >
                                <div className='flex mx-auto md:mx-2 p-3 sm:p-0 '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                                </svg>

                                </div>

                                <div className='hidden md:flex'>
                                    <p>
                                        Asset
                                    </p>

                                </div>


                            </div>
                            )}
                        </Tab>
                    </div>

                    <div className='w-1/5 sm:w-full sm:my'>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={`${selected ? 'text-blue-700  bg-blue-100 font-bold rounded-3xl p-2 m-auto w-full' : 'bg-white font-semibold text-black rounded '}
                                flex flex-row border-gray-300 p-2 m-auto w-full`}
                            
                            >
                                <div className='flex mx-auto md:mx-2 border sm:border-0 rounded-3xl bg-blue-500 sm:bg-transparent text-white sm:text-black p-3 sm:p-0'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>

                                </div>

                                <div className='hidden md:flex'>
                                    <p>
                                        Trade
                                    </p>

                                </div>


                            </div>
                            )}
                        </Tab>
                    </div>

                    <div className='w-1/5 sm:w-full sm:my'>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={`${selected ? 'text-blue-700 bg-blue-100 font-bold rounded-3xl' : 'bg-white font-semibold text-black rounded '}
                                flex flex-row border-gray-300 p-3`}
                            
                            >
                                <div className='flex mx-auto md:mx-2 p-3 sm:p-0 '>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                </svg>
                                </div>

                                <div className='hidden md:flex'>
                                    <p>
                                        Pay
                                    </p>

                                </div>


                            </div>
                            )}
                        </Tab>
                    </div>

                    <div className='w-1/5 sm:w-full sm:hidden'>
                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={`${selected ? 'text-blue-700 bg-blue-100 font-bold rounded-3xl' : 'bg-white font-semibold text-black rounded '}
                                flex flex-row border-gray-300 p-3`}
                            
                            >
                                <div className='flex mx-auto md:mx-2 p-3 '>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
                                </div>

                                <div className='hidden md:flex'>
                                    <p>
                                        Pay
                                    </p>

                                </div>


                            </div>
                            )}
                        </Tab>
                    </div>

                    </div>








                </div>

            </Tab.List>





                    

                


 
        </div> 
    </Tab.Group>


  )
}

export default Dashboard