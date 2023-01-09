import { doc, updateDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import User from '../assets/user.png'
import { auth, db } from '../config/firebase';


function Settings() {
    const navigate = useNavigate();

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [img, setImg] = useState('');

    const submit= async (e) => {
        e.preventDefault();
       
            await updateDoc(doc(db,  'client',auth.user.uid ),{

                fname,
                lname,        
                img,
            });
    
            navigate('/');
    
    };

    
    return (
        <div className='flex flex-col w-screen h-screen p-5 bg-[#eeeeee] text-black overflow-scroll font-medium '>
            
            <div className='flex text-blue-800 font-medium '>

                <div  className='flex mr-auto  mb-auto '>
                    <button className='flex text-blue-800 font-medium '
                    onClick={() => navigate(-1)}
                    >
                        Cancel
                    </button>
                </div>

                <div className=' flex flex-col mb-5 '>
                    <div className='rounded-full mx-auto flex border mb-2'>
                        <img src={User} alt='' className='w-[100px] h-[100px]'/>
                    </div>
                    <div className='flex flex-col text-center w-full'>
                        <button className='flex text-blue-800 font-medium '>
                            Set New Photo or Video
                        </button>
                        <input
                            accept='image/*'
                            type='file'
                            style={{display:'none'}}
                            onChange={e => setImg(e.target.files[0])}/>
          
                    </div>

                </div>

                <div className='flex ml-auto  mb-auto '>
                    <button className='flex text-blue-800 font-medium '
                    onClick={submit}
                    >
                        Done
                    </button>
                </div>

                

            </div>

            <div className='rounded-xl border bg-white p-3 mb-3 '>

            
                <div className='border-b p-2'>
                    <input        onChange={({ target }) => setFname(target.value)}/>
                    
                </div>
        

    
                <div className=' p-2'>
                    <input
                    onChange={({ target }) => setLname(target.value)}
                    />
                    
                    
                </div>

            
            </div>

            <div className='rounded-xl border bg-white p-3 mb-3'>
                
            
                    <div className='border-b p-2'>
                        <input/>
                        
                    </div>
    
                    <div className='border-b p-2'>
                        <input/>
                        
                    </div>

    
                    <div className=' p-2'>
                        <input/>
                        
                    </div>
            </div>

            <div className='rounded-xl border bg-white p-3 mb-3'>
                
                
                <Link to='/lt' >

                    <div className='border-b p-2'>
                        <p>
                            Change Email
                        </p>
                    </div>


                </Link>

                <Link to='/lt' >


                    <div className=' p-2'>
                        <p>
                        Change Number
                        </p>
                    </div>

                </Link>
            </div>
            

        </div>
  )
}

export default Settings