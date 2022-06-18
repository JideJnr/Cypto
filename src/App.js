import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AuthProvider from './context/auth'
import Suspence from './components/Suspence';

const Login =  lazy(() => import('./Authentication/Login'));
const Home =  lazy(() => import('./Home'));



function App() {
  return (

  <AuthProvider>
      <BrowserRouter>      
        <Suspense fallback={<Suspence/>}>
        
          <Routes>
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