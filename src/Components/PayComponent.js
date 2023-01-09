import React from 'react'
import { Tab } from '@headlessui/react'
import { Fragment } from 'react'

import Send from './Send'
import Receive from './Receive'


const Dashboard = () => {





  return (
    <div className='w-full h-fit border bg-white  '>
        
    <Tab.Group  >
        <div className='w-full '>
            <Tab.List className='flex w-full h-[50px] bg-white' >
                   
                <Tab as={Fragment}>
                    {({ selected }) => (
                    <div
                        className={
                        selected ? 
                        'w-1/2 text-center py-2.5 text-sm font-medium leading-5 text-black  bg-white  border-t-2 border-blue-500 '
                        :
                        'w-1/2 text-center py-2.5 text-sm font-medium leading-5 text-blue-500 hover:bg-[#eeeeee]/[0.5]  border-b border'
                        }
                    >
                        <p>
                            Send
                        </p>
                    </div>
                    )}
                </Tab>

                <Tab as={Fragment}>
                    {({ selected }) => (
                    <div
                        className={
                        selected ? 
                        'w-1/2 text-center py-2.5 text-sm font-medium leading-5 text-black  bg-white  border-t-2 border-blue-500 '
                        :
                        'w-1/2 text-center py-2.5 text-sm font-medium leading-5 text-blue-500 hover:bg-[#eeeeee]/[0.5]  border-b border'
                        }
                    >
                        <p>
                            Receive
                        </p>
                    </div>
                    )}
                </Tab>



            </Tab.List>
        </div>

        <div className='w-full '>
        <Tab.Panels className=' w-full border rounded ' >

        <Tab.Panel >
            <Send/>
            
        </Tab.Panel>


        <Tab.Panel>
            <Receive/>
        
            
        </Tab.Panel>


        </Tab.Panels>
        </div>

    </Tab.Group>
    
    </div>
  )
}

export default Dashboard