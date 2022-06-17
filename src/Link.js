import React from 'react'
import {useLocation} from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

function Link() {
    const location = useLocation()
    const {text} = location.state

    const navigate = useNavigate();

  return (

      <div className='w-screen h-screen p-5  bg-[#eeeeee]'>
        <p>
            This Text Was Passed Through The Link
        </p>
          <p>
                {text}

          </p>


          <button className='flex rounded border-black bg-black border text-white px-3 py mx-auto'  onClick={() => navigate(-1)}>
          GO BACK
        </button>
        </div>

  
  
  )
}

export default Link