import React from 'react'

import HomeTabOne from './HomeTabOne'
import HomeTabTwo from './HomeTabTwo'
import Featured from './Featured'
import Footer from './Footer'
import HomeTabThree from './HomeTabThree'

const HomeOne = () => {
  return (
    <div className=' overflow-y-auto text-left w-full p-4 my-4 '>
        
        <HomeTabOne/>
        <HomeTabTwo/>
        <HomeTabThree/>
        <Featured/>
        <Footer/>


</div>
  )
}

export default HomeOne