import React , {useState} from 'react'

const Balance = () => {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(!isOpen)
}

  return (
    <div className='w-full  flex bg-white p-5'>
      <div className='flex flex-col '>
          { isOpen === true ? 
            <p className=' text-[28px] font-medium  flex my-auto'>$0.00</p>         
                      : 
            <p className=' font-medium text-[28px] flex my-auto '> $ ****** </p> } 
            
            <p className='text-[14px]'>Available Balance</p>
      </div>  

      <div className='flex  mr-2 ml-auto'>
        <button onClick={openModal}>
        { isOpen === true ? 
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>        
                      : 
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg> } 
        </button>
      </div>



    </div>

  )
}

export default Balance