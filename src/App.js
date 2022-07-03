import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './Context/auth'
import Suspence from './Components/Suspence';


const Dashboard =  lazy(() => import('./Dashboard/Dashboard'));


const Otp =  lazy(() => import('./Authentication/Otp'));
const Signup =  lazy(() => import('./Authentication/Signup'));
const Login =  lazy(() => import('./Authentication/Login'));
const Home =  lazy(() => import('./Home'));



function App() {
  
  return (

  <AuthProvider>
      <BrowserRouter>  
        
        <Suspense fallback={<Suspence/>}>
        
          <Routes>
      
            
            <Route path='/d' element={<Dashboard/>}/>
          
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