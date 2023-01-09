import React, {useState} from 'react'
import {auth} from '../config/firebase'
import {  signInWithEmailAndPassword} from 'firebase/auth'
import { Link, useNavigate  } from 'react-router-dom';








const SigninForm = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [password, setPassword] = useState('');

    const isInvalid = password === '' || email === '' ;
    
    const navigate = useNavigate()

    
    const handleSubmit= async (e) => {
      e.preventDefault();
     
      if ( email==='' || password===''){
          setError('Input All Fields!!!');
      }
      try{
        
        setLoading(true);
        await signInWithEmailAndPassword( auth, email, password);
        navigate('/')
      
          
      }
      catch(error){
        
      }
  };

console.log(error)

    return (
       <div className='w-screen h-screen flex p-5'>
            <div className=' flex-col m-auto w-fit h-fit  p-5 '>
                <p className=' flex text-[3.5rem] mx-auto'>Coin<span className='primary'>Vest</span></p>
                <p> Sign In Into Your account</p>
                <p>{error}</p>
                <div className=' text-[12px] flex-col my-5 p-5 border border-xl border-[#d8dee4] rounded bg-[#f6f8fa] '>
                    <p className=' mb-2'>Email Address</p>
                    <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                      onChange={({ target }) => setEmail(target.value)} 
                      type='email'/>
                    <div className='flex mb-2  '>
                        <p className=' ' > Password </p>
                        <p className='ml-auto text-blue-500 ' > Forgot Password? </p>
                    </div>

                    <input className='w-full bg-white mb-2 h-8 rounded border p-2'
                      onChange={({ target }) => setPassword(target.value)}
                      type='password'/>

                  

                     
                        <button className='w-full h-8 bg-[#118c4f] text-white text-[14px] rounded' type='submit' disabled={isInvalid} onClick={handleSubmit}>
                            Sign In
                        </button>
                   
                </div>

                <div className='flex my-2 p-5 text-[12px]   text-black border border-[#d8dee4] border-xl rounded bg-[#f6f8fa]'>
                    <p className=' '>New To Defi? </p>
                    
                    <Link to= '/s'>
                        <p className='  text-blue-500'> Create An Account?</p>
                    </Link>
                </div>

                <div className='flex justify-between mx-auto  text-[11px]  p-5 mt-10'>
                    <p >Terms</p>
                    <p  >Privacy</p>
                    <p >Security</p>
                    <p >Contact DeFi</p>
                </div>

            </div>
        </div>
  )
}

export default SigninForm