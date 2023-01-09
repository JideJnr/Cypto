import React, {useState} from 'react'
import { createUserWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom';
import { doc,  setDoc,  Timestamp } from 'firebase/firestore';
import {auth, db} from '../config/firebase';

const Signup = () => {
    const [name, setName] = useState('');
    const [dob, setDob] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const isInvalid = password === '' || email === '' ;
    const navigate = useNavigate()

    
  const handleSubmit= async (e) => {
    e.preventDefault();
   
    if (name ==='' || dob ==='' || email==='' || password===''){
        setError('Input All Fields!!!');
    }
    try{
        const result = await createUserWithEmailAndPassword( auth, email, password);

        await setDoc(doc(db, 'client',result.user.uid ),{
            uid: result.user.uid,
            name,
            password,
            email,
            createdAt: Timestamp.fromDate(new Date()),
            dob,
        });

        navigate('/o')
        
    }
    catch(error){
        

    }
};


    return (
        <div className='w-screen h-screen flex p-5'>
            <div className=' flex-col m-auto w-fit h-fit  p-5  text-[12px]'>
                <p className=' flex text-[3.5rem] mx-auto'>Ne<span className='primary'>Fli</span></p>
                <p className='text-[13px]'>Create Your Nefli Account</p>
                <p>{error}</p>
                <div className='   marker:flex-col my-5 p-5 border border-xl border-[#d8dee4] rounded bg-[#f6f8fa] '>
                    <p className=' mb-2'>Enter Full Name</p>
                   
                    <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                      onChange={({ target }) => setName(target.value)} 
                      type='email'/>
                    <p className=' mb-2'>Email Address</p>
                   
                   <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                     onChange={({ target }) => setEmail(target.value)} 
                     type='email'/>
                                         <p className=' mb-2'>Enter Date of Birth</p>
                   
                   <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                     onChange={({ target }) => setDob(target.value)} 
                     type='date'/>
                    <div className='flex mb-2  '>
                        <p className=' ' >Create Password </p>
                        
                    </div>

                    <input className='w-full bg-white mb-2 h-8 rounded border p-2'
                      onChange={({ target }) => setPassword(target.value)}
                      type='password'/>
                    <button className='w-full h-8 bg-[#118c4f] text-white text-[14px] rounded'  disabled={isInvalid} onClick={handleSubmit}>
                        Continue
                    </button>
                </div>

                <div className='flex my-2 p-5   text-black border border-[#d8dee4] border-xl rounded bg-[#f6f8fa]'>
                    <p className=' '>Already Have An Account  </p>
                    <Link to= '/l'>
                    <p className='  text-blue-500'> Sign In</p>
                    </Link>
                </div>


                <div className='flex justify-between mx-auto  text-[11px] px-5 py-10 mt-10'>
                    <p >Terms</p>
                    <p  >Privacy</p>
                    <p >Security</p>
                    <p >Contact DeFi</p>
                </div>

            </div>
        </div>
  )
}

export default Signup