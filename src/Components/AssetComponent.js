import React from 'react'
import AssetText from './AssetText'
import BitcoinCount from './BitcoinCount'

import Portfolio from './Portfolio'

const AssetComponent = () => {
  
  return (
   
        
        <div className='w-full sm:p-10 p-2 flex flex-col bg-white border font-medium  '>
                
            <Portfolio/>

            <div className='sm:border rounded-xl p-5  '>

                <div  className=' flex   mb-5'>
                    <div className=' flex flex-col  '>
                        <p className='text-[20px] font-medium'>
                            Get Started With Bitcoin
                        </p>
                      
                        <p className='text-[14px] text-blue-600'>
                            Learn More
                        </p>

                    </div>

                    <div className='sm:ml-2 ml-auto '>
                        <svg width="32" height="32" viewBox="0 0 38 38" data-element="Icon" class="BitcoinUpsell__Icon-izjz0u-0 fCDet"><g fill="none" fill-rule="evenodd"><circle fill="#FFAD02" cx="19" cy="19" r="19"></circle><path d="M24.701 19.676a3.63 3.63 0 001.469-2.06c.741-2.767-.46-4.868-3.204-5.604h.001l.888-3.32a.228.228 0 00-.16-.28l-1.317-.353a.227.227 0 00-.275.154l-.892 3.33-1.756-.471.888-3.321a.228.228 0 00-.16-.28l-1.317-.353a.227.227 0 00-.275.154l-.892 3.33-3.735-1a.228.228 0 00-.278.16l-.356 1.33a.236.236 0 00.16.28l.22.058a1.826 1.826 0 011.282 2.242l-1.896 7.084a1.828 1.828 0 01-2.075 1.335.228.228 0 00-.238.114l-.69 1.247a.231.231 0 00-.012.2.227.227 0 00.15.132l3.672.984-.892 3.33c-.027.119.043.239.16.27l1.318.353a.228.228 0 00.279-.162l.891-3.32 1.756.47-.892 3.33c-.027.119.043.239.161.27l1.317.353a.228.228 0 00.279-.162l.891-3.32.877.235c2.744.735 4.835-.484 5.576-3.251a3.633 3.633 0 00-.923-3.488zm-5.96-5.948l2.635.705a1.826 1.826 0 011.281 2.242 1.826 1.826 0 01-2.23 1.3l-2.634-.706.949-3.541zm1.14 9.795l-3.512-.941.95-3.542 3.511.941a1.826 1.826 0 011.282 2.242 1.826 1.826 0 01-2.23 1.3z" fill="#FFF"></path></g></svg>
                    </div>


                </div>

                <div className='flex flex-col  lg:flex-col 2xl:flex-row border rounded-xl '>
                    

                    <AssetText/>


                    

                    <BitcoinCount/>
                        


                   
                </div>


            </div>

        </div>


    
  )
}

export default AssetComponent