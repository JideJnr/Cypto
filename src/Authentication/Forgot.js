import React, {useState} from 'react'
import {auth} from './../firebase'
import {  signInWithEmailAndPassword} from 'firebase/auth'
import { useNavigate, Link } from 'react-router-dom';








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
        navigate('/d');
          
      }
      catch(error){
        
      }
  };

console.log(error)

    return (
        <div className='w-screen h-screen flex p-5'>
            <div className=' flex-col m-auto w-fit h-fit  p-5 '>
                <p className=' flex text-[3.5rem] mx-auto'>Ne<span className='primary'>Fli</span></p>
                <p>Sign In Into Your account</p>
                <p>{error}</p>
                <div className=' text-[12px] flex-col my-5 p-5 border border-xl border-[#d8dee4] rounded bg-[#f6f8fa] '>
                    <p className=' mb-2'>Email Address</p>
                    <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                      onChange={({ target }) => setEmail(target.value)} 
                      type='email'/>


                     
                        <button className='w-full h-8 bg-[#118c4f] text-white text-[14px] rounded' type='submit' disabled={isInvalid} onClick={handleSubmit}>
                            Send Verification Code
                        </button>
                   
                </div>


            </div>
        </div>
  )
}

export default SigninForm