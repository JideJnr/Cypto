import React from 'react'
import Featured from './components/Featured'
import Hero from './components/Hero'
import Sidebar from './components/Sidebar'
import Signup from './components/Signup'
import Footer from './components/Footer'
import './Home.css'

function Home() {
  return (
    <>
      <Sidebar/>
      <Hero />
      <Featured />
      <Signup />
      <Footer />
    </>
  );
}

export default Home;
