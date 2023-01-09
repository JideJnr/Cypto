import React from 'react'

import IntegrateCoin from '../Components/IntegrateCoin'
import TopMover from '../Components/TopMover'
import Balance from '../Components/Balance';
import WatchList from '../Components/WatchList';
import News from '../Components/News';
import Navbar from '../Components/Navbar';
import Suspense from '../Components/Suspence';




const Home = () => {

  return (
    <div className='flex flex-col w-full h-full sm:h-screen bg-[#eeeeee] text-black '>

      <Navbar title={'Home'} />
      
      <div className='w-full grow overflow-auto flex flex-col lg:flex-row '>
            
            <div class=" lg:w-3/5 w-full lg:border-r  flex flex-col ">
                <Balance/>
                <WatchList/>
                <News/>
                
                

            </div>

            <div className='lg:w-2/5 w-full flex flex-col  '>

                <IntegrateCoin/>
                


            </div>
        </div>

    </div>
  )
}

export default Home