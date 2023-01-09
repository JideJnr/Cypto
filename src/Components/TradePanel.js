import React  from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'
import Error from './Error'
import Insufficient from './Insufficient'



const Dashboard = () => {





  return (
    <div className='w-full h-fit  min-h-sm border bg-white mx-auto hidden sm:flex  '>
        
        <Tab.Group  >

            <div className='w-full h-fit flex flex-col'>
                
                <div className='w-full h-[50px] '>
                    <Tab.List className='flex w-full  bg-white' >
                        
                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={
                                selected ? 
                                'w-1/3 text-center py-2.5 text-sm font-medium leading-5 text-black  bg-white  border-t-2 border-blue-500 '
                                :
                                'w-1/3 text-center py-2.5 text-sm font-medium leading-5 text-blue-500 hover:bg-[#eeeeee]/[0.5]  border-b border'
                                }
                            >
                                <p>
                                    Buy
                                </p>
                            </div>
                            )}
                        </Tab>

                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={
                                selected ? 
                                'w-1/3 text-center py-2.5 text-sm font-medium leading-5 text-black  bg-white  border-t-2 border-blue-500 '
                                :
                                'w-1/3 text-center py-2.5 text-sm font-medium leading-5 text-blue-500 hover:bg-[#eeeeee]/[0.5]  border-b border'
                                }
                            >
                                <p>
                                    Sell
                                </p>
                            </div>
                            )}
                        </Tab>

                        <Tab as={Fragment}>
                            {({ selected }) => (
                            <div
                                className={
                                selected ? 
                                'w-1/3 text-center py-2.5 text-sm font-medium leading-5 text-black  bg-white  border-t-2 border-blue-500 '
                                :
                                'w-1/3 text-center py-2.5 text-sm font-medium leading-5 text-blue-500 hover:bg-[#eeeeee]/[0.5]  border-b border'
                                }
                            >
                                <p>
                                    Trade
                                </p>
                            </div>
                            )}
                        </Tab>



                    </Tab.List>
                </div>

                <div className='w-full h-fit '>
                <Tab.Panels className=' w-full h-fit ' >

                <Tab.Panel >
                    <Error/>
                    
                    
                </Tab.Panel>


                <Tab.Panel>
                    <Insufficient/>
                </Tab.Panel>

                <Tab.Panel>
                    <Error/>
                </Tab.Panel>


                </Tab.Panels>
                </div>


            </div>
        </Tab.Group>
    </div>
  )
}

export default Dashboard