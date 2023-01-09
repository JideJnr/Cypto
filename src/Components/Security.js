import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Security = () => {

    const navigate = useNavigate();
  return (
    <div className='flex flex-col w-screen h-screen p-5 bg-[#eeeeee] text-black overflow-scroll font-medium '>
            
    <div className='flex text-blue-800 font-medium  mb-10'>

        <div  className='flex mr-auto  mb-auto '>
            <button className='flex text-blue-800 font-medium '
            onClick={() => navigate(-1)}
            >
                Cancel
            </button>
        </div>

        <div className=' flex  '>
            <p className='text-black font-medium'>
                Security

            </p>
        </div>

        <div className='flex ml-auto  mb-auto '>
            <button className='flex text-blue-800 font-medium '
            
            >
                Done
            </button>
        </div>

        

    </div>

    <div className='rounded-xl border bg-white p-3 mb-3 '>

        <Link to='/p' >
            <div className='border-b p-2'>
                <p>
                    Language
                </p>
            </div>
        </Link>

        <Link to='/sc' >


            <div className=' p-2'>
                <p>
                    Currency
                </p>
            </div>

        </Link>

    </div>


    <div className='rounded-xl border bg-white p-3 mb-3 '>

<Link to='/p' >
    <div className='border-b p-2'>
        <p>
            Dark Mode
        </p>
    </div>
</Link>
<Link to='/p' >
    <div className='border-b p-2'>
        <p>
            Dark Mode
        </p>
    </div>
</Link>

<Link to='/sc' >


    <div className=' p-2'>
        <p>
            Security
        </p>
    </div>

</Link>
    </div>


    <div className='rounded-xl border bg-white p-3 mb-3 '>

<Link to='/p' >
    <div className='border-b p-2'>
        <p>
            Account
        </p>
    </div>
</Link>

<Link to='/sc' >


    <div className=' p-2'>
        <p>
            Security
        </p>
    </div>

</Link>
    </div>


</div>
  )
}

export default Security