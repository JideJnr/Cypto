import React from 'react'

const AssetsComponent = () => {
  return (
    <div className='border border-rounded p-5 font-medium bg-white'>

        <div className='px-3 py-5'>
            <p className='text-[20px]'>
                Your assets
            </p>
        </div>

        <div className='text-center flex flex-col px-6 py-3'>
            <div className='mx-auto my-2'>
                <svg width="64" height="64" viewBox="0 0 64 64" fill="none"><path d="M50 28c7.732 0 14-6.268 14-14S57.732 0 50 0 36 6.268 36 14s6.268 14 14 14zM14 64c7.732 0 14-6.268 14-14s-6.268-14-14-14S0 42.268 0 50s6.268 14 14 14z" fill="#DEE1E7"></path><path d="M32 56.5c13.531 0 24.5-10.969 24.5-24.5S45.531 7.5 32 7.5 7.5 18.469 7.5 32 18.469 56.5 32 56.5z" fill="#A3A9B6"></path><path d="M26.7 55.9c2.4-5.2 1.5-11.5-2.8-15.8-4.3-4.3-10.6-5.2-15.8-2.8 1 4.4 3.1 8.6 6.6 12 3.5 3.4 7.6 5.6 12 6.6zM37.3 8.1c-2.4 5.2-1.5 11.5 2.8 15.8 4.3 4.3 10.6 5.2 15.8 2.8-1-4.4-3.1-8.6-6.6-12-3.4-3.4-7.6-5.6-12-6.6z" fill="#717886"></path><path d="M38 32l-4.6 1.4L32 38l-1.4-4.6L26 32l4.6-1.4L32 26l1.4 4.6L38 32z" fill="#fff"></path></svg>
            </div>
            

            <p className='my-2'>
                Get Started With Crypto
            </p>
            <p  className='my-2'>
                Your Crypto Assets Will Appear Here
            </p>
            <button className='bg-gray-500 text-white rounded-xl w-[100px] max-w-4/5 text-sm py-2 px-2 mx-auto my-2'>
                Get Started
            </button>
        </div>

    </div>
  )
}

export default AssetsComponent