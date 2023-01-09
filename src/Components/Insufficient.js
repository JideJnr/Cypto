import React from 'react'
import ErrorSvg from '../assets/svg/error.svg'

const Error = () => {
  return (
    <div className='bg-white flex flex-col p-5'>

          <div className=' h-[150px] w-[150px] flex mx-auto'>
            <img src={ErrorSvg}   alt='error' />
          </div>

          <div className='text-center p-2 text-[16px]'>
            <p className='my-2 font-medium text-[16px]'>
                  Insufficient Balance
              </p>
              <p className='mb-2  text-[14px]'>
                  You do not have any coin available to sell.
              </p>

          </div>
            


            <button className='bg-blue-500 text-white rounded w-full text-sm py-2 px-2'>
                Deposit
            </button>
        
        

    </div>
  )
}

export default Error