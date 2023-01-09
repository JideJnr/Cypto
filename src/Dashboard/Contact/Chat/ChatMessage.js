import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../config/firebase";

import Message from "./Message";




const ChatMessage = () => {
   
  const [chat, setChat] = useState([]);
  const id = auth.currentUser.uid
  

  useEffect(() => {

    const chatRef = collection(db, `chat/${id}/message`);

    const q = query(chatRef , orderBy('createdAt', 'asc') );

    const unsub = onSnapshot(q,  querySnapshot =>{
      let chat = [];
      querySnapshot.forEach(doc =>{
      chat.push(doc.data())
        
      });
      setChat(chat);
    });
    return () => unsub();
}, );





  return (

    <div className="grow overflow-y-auto border-[#eeeeee]  ">

            {chat.length <= 0  && (
            <div className= 'flex h-full w-full text-center justify-center'>
              <p className=' flex mt-5 p-5 text-sm'  > Please Type a message to get started </p> 
            </div>)}



            {chat.map((chat) => (

                        
                        
                        <Message
                        key={chat.uid}
                        chat={chat}
                
                        
                        />
                      ))}
                    
            

    </div>
  )
}

export default ChatMessage