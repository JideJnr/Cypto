import React from 'react'
import Sidebar from '../Components/Sidebar'

import HomeOne from './HomeOne'

const hero = () => {
  return (
    <div className='w-screen h-screen bg-white flex flex-col'>
        <Sidebar/>
        <HomeOne/>

    </div>
  )
}

export default hero