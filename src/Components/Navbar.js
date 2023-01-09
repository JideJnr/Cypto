import React from 'react'
import Dropdown from './Dropdown'

const Navbar = ( {title}) => {

  
  return (
    <div className='sm:flex hidden w-full h-[80px] border-[#dce2f0] border-b p-5 bg-white '>

      <div className='flex my-auto'>

          <p className='text-[22px] font-semibold '>
              {title}
          </p>

      </div>


      <div className='  flex my-auto ml-auto '>
          <Dropdown />
      </div>

</div>

  )
}

export default Navbar