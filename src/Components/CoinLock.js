import React from 'react'

const CoinLock = () => {
  return (
    <div className='bg-white p-5  border'>

    <div className='flex font-medium text-[20px] mb-2'>
        <p>
            CoinLock
        </p>

        <p className='text-blue ml-auto my-auto mr-2 text-[12px] text-blue-700'>
            Add New
        </p>
    </div>

    <div className='flex  w-full '>

        <div className='flex my-auto mr-2'>
            <svg width="50" height="48" viewBox="0 0 50 48" fill="none"><g clip-path="url(#recurring-buys-circle_svg__clip0)"><path d="M20.698 48C32.06 48 41.27 38.79 41.27 27.429c0-11.362-9.21-20.572-20.572-20.572C9.338 6.857.127 16.067.127 27.43.127 38.789 9.337 48 20.698 48z" fill="#BFE9FF"></path><path d="M20.698 0v27.429h27.429C48.127 12.283 35.844 0 20.698 0z" fill="#56B4FC"></path><path d="M20.698 6.857V27.43H41.27c0-11.357-9.215-20.572-20.572-20.572z" fill="#1652F0"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M20.698 12.75c-8.107 0-14.678 6.572-14.678 14.679 0 8.106 6.571 14.678 14.678 14.678 8.107 0 14.679-6.572 14.679-14.678 0-8.107-6.572-14.679-14.679-14.679zM4.52 27.429c0-8.936 7.243-16.179 16.178-16.179s16.179 7.243 16.179 16.179c0 8.935-7.244 16.178-16.179 16.178-8.935 0-16.178-7.243-16.178-16.178z" fill="#fff"></path></g><defs><clipPath id="recurring-buys-circle_svg__clip0"><path fill="#fff" transform="translate(.127)" d="M0 0h49v48H0z"></path></clipPath></defs></svg>
            
        </div>

        <div className='flex flex-col align-center my-auto  grow '>

            <p className='text-[14px] font-medium'>
                Learn About CoinLock
            </p>
            <p className='text-[12px]'>
                Lock Your Coins for a specified duration of time and have the interest available for withdrawal 
            </p>

        </div>

        <div className='flex ml-auto mr-2 align-center my-auto'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        </svg>

        </div>

    </div>

</div>
  )
}

export default CoinLock