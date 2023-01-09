import React  from 'react'
import ChatMessage from './ChatMessage';
import ChatTaskbar from './ChatTaskbar';
import Taskbar from '../../../Components/Taskbar';




const Chat = () => {

    
  return (
    <div className=' flex flex-col w-screen h-screen  '>

      <Taskbar   />
      <ChatMessage  />
      <ChatTaskbar />




    </div>
  )
}

export default Chat