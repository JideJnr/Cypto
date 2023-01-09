import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/auth'
import Suspence from './Components/Suspence';

const CoinsPage =  lazy(() => import('./Components/CoinsPage'));
const Security =  lazy(() => import('./Components/Security'));
const Profile =  lazy(() => import('./Components/Profile'));
const Legal = lazy(() => import( './Components/Legal'));
const Test =  lazy(() => import('./Test'));
const Chat =  lazy(() => import('./Dashboard/Contact/Chat/Chat'));
const Contact =  lazy(() => import('./Dashboard/Contact/Contact'));
const Settings =  lazy(() => import('./Pages/Settings'));
const Otp =  lazy(() => import('./Authentication/Otp'));
const Signup =  lazy(() => import('./Authentication/Signup'));
const Login =  lazy(() => import('./Authentication/Login'));
const Home=  lazy(() => import('./Home'));



function App() {
  
  return (

  <AuthProvider>
      <BrowserRouter>  
        
        <Suspense fallback={<Suspence/>}>
          
        
          <Routes>
            <Route path="/c/:id" element={CoinsPage} />
            <Route path="/sc" element={<Security/>}/> 
            <Route path="/p" element={<Profile/>}/> 
            <Route path='/t' element={<Test/>}/> 
            <Route path='/lt' element={<Legal/>}/> 
            <Route path='/c/c' element={<Chat/>}/>              
            <Route path='/c' element={<Contact/>}/>   
            <Route path='/st' element={<Settings/>}/>      
            <Route path='/o' element={<Otp/>}/>
            <Route path='/s' element={<Signup/>}/>
            <Route path='/l' element={<Login/>}/>
            <Route path='/' element={<Home/>}/>
            <Route path='/*'element={<p>404 notfound</p>}/> 
      
          </Routes>

        </Suspense>
      
    </BrowserRouter>
  </AuthProvider>
    
  );
}

export default App;