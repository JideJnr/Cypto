import React from 'react'
import Navbar from '../Components/Navbar'
import AllCoin from '../Components/AllCoin';


const Explore = () => {
  

  return (
    <div className='w-full h-screen bg-[#eeee]'>
      <Navbar title={'Explore'}/>

      <AllCoin  />

    </div>
  )
}

export default Explore