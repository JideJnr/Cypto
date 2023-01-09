import React from 'react'
import Taskbar from './Taskbar'

const Legal = () => {
  return (
    <div className='w-screen h-screen bg-[#eeeeee]'>
        <Taskbar/>
        <div className='overflow-auto  p-3'>

            <div className='bg-white p-3'>
                <p className=' mb-2 text-xl font-medium'>
                    Legal Terms And Condition
                </p>

                <p className=''>
                    Legal Terms And Condition some verly long unreadable terms nd condititon TBD
                </p>



            </div>

        </div>
    </div>
  )
}

export default Legal