import React from 'react'
import BlueButton from './BlueButton'

const BitcoinCount = () => {
  return (
    <div className=' w-full 2xl:w-1/2  px-5 pb-5 sm:px-10  h-full flex flex-col m-auto  '>

        <div className='flex   lg:flex-row 2xl:flex-col my-auto sm:border-b  sm:mb-5 '>

            <div className='flex my-auto'>
                <div className='rounded-full border h-fit w-fit p-3 mx-auto  my-auto'>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" data-element="Portrait"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.75 3.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm-.76 4.26c1.22.03 2.31.79 2.74 1.94L16 16H0l2.27-6.05a2.984 2.984 0 012.74-1.94C5.05 8.04 6.37 9 8 9c1.63 0 2.95-.96 2.99-.99z" fill="#1652F0"></path></svg>

                </div>
            </div>

            <div className='py-4 px-2 grow my-auto'>
                <p className='flex'>
                    <span className='text-blue-500'>2345+ </span> Bought Bitcoin Today
                </p>

            </div>

        </div>

        <BlueButton className='bg-blue-500 hidden sm:flex' title={'Get Started'}/>
            

        
    


    </div>
  )
}

export default BitcoinCount