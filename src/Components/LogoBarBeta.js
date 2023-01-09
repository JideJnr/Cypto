import React from 'react'

const LogoBar = () => {
  return (
    <div className='sm:flex  font-medium w-full bg-white hidden p-5 shadow-b shadow-black'>
        
        <p className=' flex md:hidden text-[2.0rem]  text-black '>C<span className='primary'>V</span></p>
        <p className='  hidden md:flex text-[2.0rem]  text-black '>Coin<span className='primary'>Vest</span></p>

    </div>
  )
}

export default LogoBar