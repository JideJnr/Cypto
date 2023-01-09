import React from 'react';
import { signOut } from 'firebase/auth';
import { Link, useNavigate} from 'react-router-dom';
import User from '../assets/user.png'
import {auth} from '../config/firebase';

function Settings({data}) {


    const navigate = useNavigate();

    const handleSignout = async () =>{
       
        await signOut(auth);

        navigate('/');

    }  ;

    
    return (
    <div className='flex flex-col w-full h-full p-5 bg-[#eeeeee] text-black overflow-scroll font-medium '>

        <div className=' flex flex-col mb-5 '>
            <div className='rounded-full mx-auto flex border mb-2'>
                <img src={data.avatar || User}  alt='' className='w-[100px] h-[100px]'/>
            </div>
            <div className='flex  text-center w-full'>
                <p>
                    {data.fName}
                </p>
                <p>
                    {data.lName}
                </p>
            </div>
            <div className='flex flex-col text-center w-full'>
                <p>
                    {data.mail}
                    
                </p>

            </div>

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

        <div className='rounded-xl border bg-white p-3 mb-3'>
            
            
            <Link to='/lt' >

                <div className='border-b p-2'>
                    <p>
                        Privacy
                    </p>
                </div>


            </Link>

            <Link to='/lt' >

                <div className='border-b p-2'>
                    <p>
                      
                    </p>
                </div>

            </Link>

            <Link to='/lt' >


                <div className=' p-2'>
                    <p>
                        Payments
                    </p>
                </div>

            </Link>
        </div>
        
        <div className='rounded-xl border bg-white p-3 mb-3'>

                        
            <Link to='/c' >
                <div className='border-b p-2'>
                    <p>
                        Help
                    </p>
                </div>
            </Link>

            <Link to='/lt' >
            <div className=' p-2'>
                <p>
                    About
                </p>
            </div>
            </Link>

        </div>

        <div className='flex justify-center'>
            <button className='cursor-pointer px-6 my-3  h-10 text-white w-28 bg-blue-500  rounded text-xs ] hover:text-blue-500 duration-500'
             onClick={handleSignout}   
                >
                Logout
            </button>
        </div>


   </div>
  )
}

export default Settings