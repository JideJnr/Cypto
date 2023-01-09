import React from 'react'

const Test = () => {
  return (
    <div className='w-full h-full bg-white max-w-xl mx-auto flex flex-col text-sm '>
      
      <div className=' p-5 bg-blue-500 text-white flex'>
          
              <p className='text-xl my-auto'>
                Facebook GivesBack Promotion
              </p>
            
            <div className='ml-auto '>
            <svg viewBox="0 0 36 36" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4" fill="url(#jsc_s_4)" height="40" width="40"><defs><linearGradient x1="50%" x2="50%" y1="97.0782153%" y2="0%" id="jsc_s_4"><stop offset="0%" stop-color="#0062E0"></stop><stop offset="100%" stop-color="#19AFFF"></stop></linearGradient></defs><path d="M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z"></path><path class="p361ku9c" d="M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z"></path></svg>
            </div>

      </div>
        
      <div className='mx-5 '>

          <p className='my-3 '>
            Dear <span className='font-medium'> Patrick Robert,</span>
          </p>
          <p className='mb-3'>
            Please Find Detailed Information On Your Facebook Giveback Promotion Below:
          </p>

          <div  className='flex flex-col font-base mb-3'>
            <p className='mb-2'>
            We have received a request to access your Facebook Promotions Winning Claims  Have Been Approved And Your WInnings Would be Subsequently Paid immediately after you complete your Profile verification
              
            </p>
            <p className='mb-2'>
              If you did not make this claim, it is possible that someone else is trying to access your facebook giveback winnings.Do not forward or give this link to anyone.

            </p>
            <p className='mb-2'>
            You received this message because this email is listed as the primary email of your facebook account 
            </p>
            <p className='text-blue-500 mb-2'>
              Please Click Here To Complete Verification
            </p>

          </div>
        
          <button  className='bg-blue-500 text-white rounded w-full max-w-sm text-center text-sm p-2 mx-auto flex'>
            Complete Verification
          </button>  

      </div>

      <div className=''>
        <p className='font-medium text-[16px] my-3'>
          Important security and privacy information
        </p>
        <p className=' text-[11px] inline-flex mx-5'>

          For enquiries, contact us on +234 700 500 0000, +234 1 270 1323, +234 708 065 3700 or send an e-mail
          to Claims@facebookboard.com

          Do not share your card PIN, OTP or Facebook online login details with anyone for any reason, even if they claim to be Facebook staff. These details are personal security information and Facebook will never ask to share them via email, SMS, phone call, social media or any other medium.

        </p>
      </div>

  </div>
  )
}

export default Test