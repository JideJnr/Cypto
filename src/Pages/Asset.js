import React from 'react'
import Navbar from '../Components/Navbar'
import AssetComponent from '../Components/AssetComponent'
import AssetsComponent from '../Components/AssetsComponent'
import Recur from '../Components/Recur'
import CoinLock from '../Components/CoinLock'
import TransactionHistory from '../Components/TransactionHistory'



const Home = () => {



 
  
  return (
    <div className='flex flex-col w-full h-full sm:h-screen bg-[#eeeeee] text-black '>

      <Navbar title={'Asset'}/>
      
      <div className='w-full grow overflow-auto flex flex-col lg:flex-row '>
            
      <div className=' lg:w-3/5 flex  flex-col   w-full '>
        <AssetComponent/>
        <AssetsComponent/>
        <TransactionHistory/>
      </div>
      <div className=' lg:w-2/5 w-full flex flex-col'>
        <Recur/>
        <CoinLock/>

      </div>
      
        </div>

    </div>
  )
}

export default Home
