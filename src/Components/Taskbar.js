import React from 'react'
import { Link ,useNavigate } from 'react-router-dom';

function Taskbar( {label} ) {
  const navigate = useNavigate();
  return (
   
    <div className='flex  p-3  bg-white text-white w-full shadow-b   font-medium'>
   
        <div className='flex-col text-black text-center my-auto ' onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </div>
    

        <div  className=' my-auto ml-5 grow '>
      
          <p className=' flex text-2xl  text-black '>C<span className='primary'>V</span></p>
        </div>
    </div>
  )
}

export default Taskbar