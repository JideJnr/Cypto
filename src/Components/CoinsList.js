import React, { useState } from 'react'
import numberWithCommas from './numberWithCommas'
import { useNavigate } from 'react-router-dom';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';

const CoinsList = ({coins}) => {

    const [star, setStar] = useState(false);
    const navigate = useNavigate();
    const id = auth.currentUser.uid
    const profit = coins.price_change_percentage_24h > 0;
    console.log(star);

  const toggleStar= async (e) => {
    e.preventDefault();

        await updateDoc(doc(db,  `coins/${id}/love`,auth.user.uid ),{
      
            star: (star),
            
        });

        setStar(!star);

};



  return (
    <div className='flex flex-row bg-white border-y p-2 my'  >
        
        <div className='flex flex-row' onClick={() => navigate( `/c/${coins.id}`)}>
            

            <div className=' my-auto'>
         
                <img src={coins?.image} alt={coins.name} className='h-8 w-8' />

            </div>

            <div className='   flex-col grow  '>
            <p>
                {coins.name}
            </p>
            <p>
                {coins.symbol}
            </p>
            </div>

            <div  className='w-1/5 flex my-auto'>
                {numberWithCommas(coins.current_price.toFixed(2))}
            </div>

            <div  className='w-1/5 mx-2  flex my-auto'>
                {coins.price_change_percentage_24h.toFixed(2)}%
            </div>

            <div  className=' w-1/5 mx-2 flex my-auto'>
                {numberWithCommas(coins.market_cap.toString().slice(0, -6))}M
        </div>        



        </div>

        <button onClick={toggleStar} >
            { star === true ? 
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>  
                    : 

                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                 } 
        </button>

    </div>
  )
}

export default CoinsList