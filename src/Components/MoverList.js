import React from 'react'
import numberWithCommas from './numberWithCommas'

const MoverList = ({coins}) => {
  return (
    <div className='flex border-y content-center p-2'>
        <div className='flex my-auto ' >
            <img src={coins?.image} alt={coins.name} className='h-8 w-8 '/>

        </div>
        <div className='flex flex-col ml-2'>
            <p>
                {coins.name}
            </p>
            <p>
                {coins.symbol}
            </p>
        </div>

    <div className='ml-auto mr-2 text-right'>
        <div>
        {numberWithCommas(coins.current_price.toFixed(2))}

        </div>
        <div>
            {coins.price_change_percentage_24h.toFixed(2)}%
        </div>

    </div>


    </div>
  )
}

export default MoverList