import React from 'react'

import Crypto from '../assets/trade.png'
const HomeTabOne = () => {
  return (
    <div className='w-full max-w-[1024px] my-2 flex flex-col-reverse md:flex-row justify-center mx-auto'>

        <div className='w-full md:w-1/2 m-auto   '>
            <div className='flex'>
                <img src={Crypto} alt='' className='w-4/5 mx-auto h-fit max-w-[300px]'/>
            </div>
        </div>  
        <div className='inline-block w-full md:w-1/2 p-4 flex-col m-auto'>

            <p className='text-3xl my-4'>Earn passive income with crypto.</p>
            <p  className='text-base'>Earn up to 12% annual rewards on 30+ digital assets. Simply hold your assets in the app to automatically earn rewards at the end of each month with no lockups and no limits</p>
            
            <div className='w-full my-4'>
                <input type='email' placeholder='Enter your email' className='w-full rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md   border border-green-500 p-3' />
                <button className='my-4 w-full rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md   border bg-green-500 px-5 py-3'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default HomeTabOne