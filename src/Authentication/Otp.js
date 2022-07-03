import React, {useState, useEffect} from 'react'
import { useNavigate, Link } from 'react-router-dom';

import { db, auth } from "../firebase";
import {  getDoc ,doc } from "firebase/firestore";
import { signOut } from 'firebase/auth';








const Otp = () => {
    const [otp, setOtp] = useState('');
    const [error, setError] = useState('');
    const isInvalid = otp === '' ;
    const navigate = useNavigate();
    const [data, setData] = useState("");
    const user1 = auth.currentUser.uid
  


    useEffect(() => {
        
      getDoc(doc(db, "client", user1)).then((docSnap) => {
          if (docSnap.exists) {
            setData(docSnap.data());
          }
        });

      
    
      }, );


    return (
        <div className='w-screen h-screen flex p-5'>
            <div className=' flex-col m-auto w-fit h-fit  p-5 '>
                <p className=' flex text-[3.5rem] mx-auto'>Ne<span className='primary'>Fli</span></p>
            
                <p>{error}</p>
                <div className=' text-[11px] marker:flex-col my-5 p-5 border border-xl border-[#d8dee4] rounded bg-[#f6f8fa] '>
                    <p className=' mb-2'>Enter The One Time Password Sent to {data.num}</p>
                    <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                      onChange={({ target }) => setOtp(target.value)} 
                      type='number'/>


                    <Link to= '/d'>
                        <button className='w-full h-8 bg-[#118c4f] text-white text-[14px] rounded' type='submit' disabled={isInvalid}>
                            Continue
                        </button>
                    </Link>
                </div>

                <div className='flex my-2 p-5 text-[11px] text-black border border-[#d8dee4] border-xl rounded bg-[#f6f8fa]'>
                    <p className=' '>Didn't get code?  </p>
                    
                    
                        <p className='  text-blue-500'> Resend Code</p>
                   


                </div>

        

            </div>
        </div>
  )
}

export default Otp