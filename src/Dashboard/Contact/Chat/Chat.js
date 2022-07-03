import React from 'react'
import ChatMessage from './ChatMessage';
import ChatTaskbar from './ChatTaskbar';
import Taskbar from '../../../Components/Taskbar';




const Contact = () => {


  

 
    
  return (
    <div className=' flex flex-col w-screen max-h-screen bg-[#eee] '>

      <Taskbar />
      <ChatMessage  />
      <ChatTaskbar  />




    </div>
  )
}

export default Contact