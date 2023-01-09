
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import { auth, db } from "../../../config/firebase";
import { collection, addDoc,  Timestamp } from "firebase/firestore";





const ChatTaskbar = () => {


  const [msg, setMsg] = useState('');
  const [img, setImg] = useState('');
  const id = auth.currentUser.uid;
  
  const handleSubmit= async (e) => {
    e.preventDefault();
    await addDoc(collection(db, `chat/${id}/message`), {
        img,
        msg,
        from: id,
        createdAt: Timestamp.fromDate(new Date()),
      
        
     });
      setImg();
      setMsg();
  };

  return (
    <div className='flex w-full '>
      
      <div className='flex' >
        <input
          accept='image/*'
          type='file'
          style={{display:'none'}}
          onChange={e => setImg(e.target.files[0])}/>
          
          <Button component='span'>
         VV
          </Button>

      </div>

      <div>

        <input
                      aria-label='Enter Your Message'
                      type='text'
                      placeholder='Enter Your Message'
                      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
                      onChange={({ target }) => setMsg(target.value)}/>
          

      </div>

      <div>
      <Button variant="contained" 
    onClick={handleSubmit}
      >
        Send</Button>
      </div>
       
    </div>
  )
}

export default ChatTaskbar