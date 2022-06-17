import React,{useState} from 'react'
import { Link } from 'react-router-dom'


function Main() {
  const [text, setText] = useState('');
 
  return (
    <div className=' bg-white w-screen p-5'>
      <p>
        This is an Example Of How States Are Passed Through Link
      </p>
      
      <input
      aria-label='Enter Text'
      type='text'
      placeholder='Enter Text'
      className='text-sm text-black w-full mr-3 py-5 px-4 h-2 border  rounded mb-2'
      onChange={({ target }) => setText(target.value)}/>

      <Link to='/l' state={{text}}>
        <button className='flex rounded border-black bg-black border text-white px-3 py mx-auto'>
           GO
        </button>
      </Link>

    </div>
  )
}

export default Main