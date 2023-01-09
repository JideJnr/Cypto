import React from 'react'
import Navbar from '../Components/Navbar'
import TradePanel from '../Components/TradePanel'
import Withdraw from '../Components/Withdraw';
import Convert from '../Components/Convert';
import Balance from '../Components/Balance';
import AllCoin from '../Components/AllCoin';
import Suspence from '../Components/Suspence';

import Test from '../Test'

const Trade = () => {

  return (
    <div className='flex flex-col w-full h-full sm:h-screen bg-[#eeeeee] text-black  '>

    
      <Navbar title={'Trade'}/>
      

      <div className='w-full flex flex-col md:flex-row   grow overflow-auto   '>
            <div class=" md:w-3/5 w-full shadow-md sm:rounded-lg flex flex-col">
               
                <AllCoin/>
              
                <div>


</div>


            </div>

            <div className='md:w-2/5 w-full flex flex-col '>
              <TradePanel/>

            </div>
      </div>

    </div>
  )
}

export default Trade