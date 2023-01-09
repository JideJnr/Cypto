import React from 'react'
import Navbar from '../Components/Navbar'
import PayComponent from '../Components/PayComponent'
import TransactionComponent from '../Components/TransactionComponent'
import CryptoGift from '../Components/CryptoGift'
import Recent from '../assets/svg/recent'
import Convert from '../Components/Convert'
import Withdraw from '../Components/Withdraw'


const Pay = () => {
  return (
    <div className='flex flex-col w-full h-full sm:h-screen bg-[#eeeeee] text-black'>

      <Navbar title={'Pay'}/>

      <div className='flex flex-col md:flex-row  grow overflow-auto w-full   '>

        <div className=' flex flex-col md:w-3/5 w-full '>

          <PayComponent/>
    
          <TransactionComponent/>
          <Convert/>
          <Withdraw/>


        </div>

        <div className='flex flex-col w-full md:w-2/5'>


          <CryptoGift/>
        
        </div>

      </div>

    </div>
  )
}

export default Pay