import React from 'react'
import Crypto from '../assets/hero-img.png'

const HomeTabOne = () => {
  return (
    <div className='w-full max-w-[1024px] flex flex-col md:flex-row justify-center mx-auto'>
                    
    <div className='inline-block w-full md:w-1/2 p-4 flex-col '>
        <p className='text-base '>Buy & Sell Crypto 24/7 using your retirement account</p>
        <p className='text-3xl my-4'>Invest in Cryptocurreny with Your IRA</p>
        <p  className='text-base'>Buy, Sell, and store hundreds of cryptocurrencies</p>
        <div className='w-full my-4'>
            <input type='email' placeholder='Enter your email' className='w-full rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md   border border-green-500 p-3' />
            <button className='my-4 w-full rounded-tl-3xl rounded-tr-md rounded-br-3xl rounded-bl-md   border bg-green-500 px-5 py-3'>Learn More</button>
        </div>
    </div>

    
    <div className='w-full md:w-1/2 m-auto '>
        <div className='flex'>
            <img src={Crypto} alt='' className='w-4/5 mx-auto'/>
        </div>
    </div>

</div>
  )
}

export default HomeTabOne