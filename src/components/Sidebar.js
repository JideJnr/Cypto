import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='w-screen flex flex-row shadow-xl border-b h-fit p-2 md:p-5  '>
    <div className='flex  ml-5 align-center my-auto'>
        <Link to='/'>
            <p className='hidden md:flex text-[30px] sm:text-[40px]  align-center '>Coin<span className='primary'>Vest</span></p>
            <p className='md:hidden flex  text-[30px] sm:text-[40px]align-center '>C<span className='primary'>V</span></p>
        </Link>

    </div>

    <div className='ml-auto mr-5 sm:flex-row  my-auto  flex'>
  
        <Link to='/s' className='flex '>
            <p  className='hidden  my-auto mr-5 ml-auto sm:flex font-medium text-[16px] text-blue-500 align-center '
            >
                Sign Up
                
            </p>
        </Link>

      


        <Link to='/l' className='flex'>
            <div className='flex  my-auto text-[12px] sm:text-[16px] ml-auto sm:ml-2 bg-blue-700 px-2.5 py-1.5 rounded text-white   '>
            Get Started
            

            </div>
        </Link>


    </div>



</div>
  )
}

export default Sidebar