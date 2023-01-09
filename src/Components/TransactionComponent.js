import React   from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'


const Dashboard = () => {





  return (
    <div className='w-full h-fit  border bg-white border-[ #5a5f6e] p-5 rounded  '>

        <p className='text-[20px] font-medium mb-2 '>
            Transactions
        </p>  

        <Tab.Group  >
            <div className='w-full p-3 '>

                <Tab.List className='flex w-full h-[50px] bg-white' >
                    
                    <Tab as={Fragment}>
                        {({ selected }) => (
                        <p
                            className={
                            selected ? 
                            '  text-sm font-medium leading-5  text-blue-500 mr-2 '
                            :
                            'text-sm font-medium leading-5 text-black mr-2 '
                            }
                        >
                            
                                Sends
                        
                        </p>
                        )}
                    </Tab>

                    <Tab as={Fragment}>
                        {({ selected }) => (
                        <p
                            className={
                            selected ? 
                            '  text-sm font-medium leading-5 text-blue-500 '
                            :
                            ' text-sm font-medium leading-5  text-black '
                            }
                        >
                            
                                Receives
                        
                        </p>
                        )}
                    </Tab>



                </Tab.List>
            </div>

            <div className='w-full '>
                <Tab.Panels className=' w-full  ' >

                    <Tab.Panel >

                        <div className='w-full flex flex-col'>

                            <p className='text-[18px] mb-2'>
                                You Haven't Sent Any Crypto Yet
                            </p>

                            <p className='text-blue-500 text-[14px]'>
                                > Click Here To Get Started
                            </p>

                        </div>
                                           
                    </Tab.Panel>

                    <Tab.Panel>
                    <div className='w-full flex flex-col'>

                        <p className='text-[18px] mb-2'>
                            You Haven't Received Any Crypto Yet
                        </p>

                        <p className='text-blue-500 text-[14px]'>
                            > Click Here To Get Started
                        </p>

                    </div>

                        
                    </Tab.Panel>


                </Tab.Panels>
            </div>

        </Tab.Group>
    </div>
  )
}

export default Dashboard