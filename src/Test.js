import React, {useState} from 'react'
import Facebook from './assets/svg/facebook.svg'
import { Link, useNavigate  } from 'react-router-dom';




const Test = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');

  const isInvalid = password === '' || email === '' ;
  
  const navigate = useNavigate()

  
  const handleSubmit= async (e) => {
    e.preventDefault();
   
    if ( email==='' || password===''){
        setError('Input All Fields!!!');
    }
    try{
      
      setLoading(true);
      
      navigate('/')
    
        
    }
    catch(error){
      
    }
};

console.log(error)
  return (
    <div className='w-screen h-screen flex flex-col bg-[#eeeeee] '>

      <div className='flex max-w-[980px] mx-auto my-auto'>

        <div className='max-w-[500px]'>
          <div>
            <img src={Facebook} alt='' className='h-[80px] w-[240px]' />
          </div>
          <div>
            <p className='text-[28px]'>
              Facebook helps you connect and share with the people in your life.
            </p>
          </div>

        </div>

        <div className='w-full max-w-[400px] p-2'>
          <div className='bg-white rounded-sm border-b p-2'>

            <p>{error}</p>

            <input className='w-full bg-white h-8 rounded border mb-2 p-2'
                        onChange={({ target }) => setEmail(target.value)} 
                        type='email'/>
            <input className='w-full bg-white mb-2 h-8 rounded border p-2'
                        onChange={({ target }) => setPassword(target.value)}
                        type='password'/>

            <button className='bg-blue-500 text-white rounded w-full px-4 '>
              Log in
            </button>
            
            <p className='text-center text-blue-500'>
              forgotten password
            </p>
            


          </div>

        </div>
      
      </div>

      <div>

      </div>

    </div>
  )
}

export default Test