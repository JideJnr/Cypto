import React from 'react'
import Featured from './Components/Featured'
import Hero from './Components/Hero'
import Sidebar from './Components/Sidebar'
import Signup from './Components/Signup'
import Footer from './Components/Footer'
import News from './Components/News'
import './Home.css'

function Home() {
  return (
    <>
      <Sidebar/>
      <Hero />
      <Featured />
      <News/>
      <Signup />
      <Footer />
    </>
  );
}

export default Home;
