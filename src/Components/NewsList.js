import React from 'react'
import Logo from '../assets/svg/coinbase.jpg'

const Test = () => {
  return (
    <div className='w-full h-fit border flex bg-white '>
        <div className='mr-2'>

    
            <img
            src={Logo}
            alt=''
            className=' w-[250px] h-full'
            />
        </div>
        <div className=' flex flex-col p-2 '>
            <div >
                <p className='font-medium text-xl'>
                    Why Choose Bitcoin
                </p>
            </div>
            <div className=''>
                <p className='block'>
                    bitcoin is the first digital crypto available and aceprted lamba lamba article from online <span className='text-blue-500'>Read more</span>
                </p>
            </div>
        </div>
    </div>
  )
}

export default Test