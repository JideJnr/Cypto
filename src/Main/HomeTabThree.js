import React from 'react'
import Crypto from '../assets/hero-img.png'

const HomeTabOne = () => {
  return (
    <div className='w-full max-w-[1024px] flex flex-col md:flex-row justify-center mx-auto '>
        <div>
            <p className='text-3xl my-4'>What We Can Tell You About Bitcoin IRA</p>
        </div>            
        
        <div className='inline-block w-full md:w-1/2  flex-col border rounded-3xl shadow-xl p-5  text-center my-2 '>
            <p  className='text-base'>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div className='w-full my-4'>
            <img src={Crypto} alt='' className='w-8 h-8 mx-auto'/>
               
            </div>
        </div>

        
        <div className='inline-block w-full md:w-1/2  flex-col border rounded-3xl shadow-xl p-5  text-center my-2 '>
            <p  className='text-base'>Buy, Sell, and store hundreds of cryptocurrencies</p>
            <div className='w-full my-4'>
            <img src={Crypto} alt='' className='w-8 h-8 mx-auto'/>
               
            </div>
        </div>

</div>
  )
}

export default HomeTabOne