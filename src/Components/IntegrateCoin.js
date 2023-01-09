import React from 'react'
import { Link } from 'react-router-dom'
import Coinbase from '../assets/svg/coinbase.jpg'


const IntegrateCoin = () => {
  return (
    <div className='hidden sm:flex w-full h-fit p-3 border bg-white'>
        
        <div className='flex w-full '>
        <div className=' flex-col grow ' >
          <div>
            <p className='mb-2 font-medium text-[20px]'>Integrate Coinbase</p>
          </div>
          <div>
            <p  className='text-[15px] '>Move Bitcoin Securely Between Your Coinbase Account And Your CoinVest Account</p>
          </div>
          <div>
            <Link to='/lm1'>
              <p className='text-blue-500 text-[14px]'>                  > Learn More
              </p>
            </Link>

          </div>


        </div>

        <div className=' ml-auto my-auto w-[90px]'>
          <img src={Coinbase} alt='coinbase-img' className='h-[50px] w-[50px] my-auto '/>
        </div>
        </div>
    </div>
  )
}

export default IntegrateCoin