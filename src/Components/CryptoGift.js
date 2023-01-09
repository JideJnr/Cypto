import React from 'react'
import { Link } from 'react-router-dom'
import Recent from '../assets/svg/recent'

const CryptoGift = () => {
  return (
    <div className='hidden sm:flex w-full h-fit  border bg-white p-2'>
        
      <div className='flex my-auto '>
          <Recent/>
      </div>

     
      <div className=' flex-col grow m-2' >
            <div>
              <p className='mb-2 font-medium text-[20px]'>Crypto Gift</p>
            </div>
            <div>
              <p  className='text-[15px] mb-2 '>Gift Crypto To your Loved Ones </p>
            </div>
            <div>
              <Link to='/lm1'>
                <p className='text-blue-500 text-[14px]'> 
                  > Click Here To Get Started
                </p>
              </Link>

            </div>


      </div> 
      

    </div>
  )
}

export default CryptoGift