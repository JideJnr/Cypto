import { collection, onSnapshot, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import CoinsList from './CoinsList'
import { auth, db } from '../config/firebase';

const WatchList = ({love}) => {

  const [coins, setCoins] = useState([]);
  const id = auth.currentUser.uid
  
  useEffect(() => {

    const coinsRef = collection(db, `coins/${id}/love`);

    const q = query(coinsRef);

    const unsub = onSnapshot(q,  querySnapshot =>{
      let coins = [];
      querySnapshot.forEach(doc =>{
      coins.push(doc.data())
        
      });
      setCoins(coins);
    });
    return () => unsub();
  }, );

  return (
    <div className='bg-white border-y '>

      <div className='py-3 px-5 font-medium text-xl'>
        <p>
          WatchList
        </p>
      </div>

      {coins.length <= 0  && (
        <div>

           
           <div className='mx-auto'>
           <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><g clip-path="url(#search-empty-state-icon_svg__clip0)"><path d="M45.99 35.987c9.947 0 18.01-8.063 18.01-18.01 0-9.946-8.063-18.01-18.01-18.01-9.947 0-18.01 8.064-18.01 18.01 0 9.947 8.063 18.01 18.01 18.01z" fill="#DEE5EC"></path><path d="M51.65 12.317c-8.99-8.99-23.56-8.99-32.55 0-8.58 8.58-8.95 22.22-1.16 31.26l-2.18 2.18-1.61-1.61L0 58.307l5.66 5.66 14.15-14.15-1.61-1.61 2.18-2.18c9.04 7.79 22.69 7.42 31.26-1.16 9-8.99 9-23.56.01-32.55z" fill="#B8C2CC"></path><path d="M51.65 12.317c-5.15-5.15-12.12-7.34-18.83-6.59-6.58 7.06-6.44 18.11.44 24.99 6.88 6.88 17.93 7.01 24.99.44.74-6.72-1.45-13.69-6.6-18.84z" fill="#A2ACB6"></path><path d="M43 14l1.796 5.528h5.813l-4.703 3.416 1.796 5.528L43 25.056l-4.702 3.416 1.796-5.528-4.703-3.416h5.813L43 14z" fill="#fff"></path></g><defs><clipPath id="search-empty-state-icon_svg__clip0"><path fill="#fff" d="M0 0h64v64H0z"></path></clipPath></defs></svg>
 
         </div>
 
         <div className='text-center '>
           <p className='mb-2  font-medium text-xl'>
             Start Building Your WatchList
           </p>
           <span className='block text-sm '>
               Wherever you see the star icon, you can use it to add assets here<span className='text-blue-500 cursor'> Explore assets  </span> 
           </span>
 
         </div>

        </div>

            )}




      <div className='p-5 flex flex-col'>

      {coins.map((coins) => (

                        
                        
<CoinsList
key={coins.uid}
coin={coins}


/>
))}




      </div>

        
    </div>
  )
}

export default WatchList