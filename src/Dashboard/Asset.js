import React from 'react'
import Dropdown from '../Components/Dropdown'
import { useState, useEffect } from 'react'
import { CryptoState } from '../CryptoContext'
import axios from "axios";
import { CoinList } from "../config/api";

const Settings = ({data}) => {
    const [coins, setCoins] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
  
    const { currency, symbol } = CryptoState();

    const fetchCoins = async () => {
        setLoading(true);
        const { data } = await axios.get(CoinList(currency));
        console.log(data);
    
        setCoins(data);
        setLoading(false);
      };
    
      useEffect(() => {
        fetchCoins();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currency]);
    
      const handleSearch = () => {
        return coins.filter(
          (coin) =>
            coin.name.toLowerCase().includes(search) ||
            coin.symbol.toLowerCase().includes(search)
        );
      };
  
  return (
    <div className='flex flex-col w-full h-screen overflow-scroll  bg-white text-black  '>
      
        
        <div className='flex w-full h-[100px] border-[#dce2f0] border p-5 '>

            <div className='flex my-auto'>

            <p className='text-[28px] font-semibold '>
                Balances
            </p>

            </div>


            <div className='  flex my-auto ml-auto '>
                <Dropdown/>




            </div>
            
        </div>

        <div className='w-full flex flex-col md:flex-row  p-5'>
            <div class=" md:w-3/5 w-full shadow-md sm:rounded-lg flex flex-col">
                <div className='w-full h-28 p-3 flex'>
                    <div className='flex flex-col '>
                        <p className=' text-[28px] '>$0.00</p>
                        <p className='text-[14px]'>Available Balance</p>
                    </div>

                    <div className='flex  ml-auto'>
                        <button className='w-fit bg-blue-800 p-2 rounded h-10 text-white  '>
                            Deposit
                        </button>
                    </div>

                </div>

                <div>

<div>
    <p>
        Top Movers
    </p>

</div>

<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    
    <tbody>
    
        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div>
                    <p>Bitcoin</p>
                </div>
            </th>

            <td class="px-6 py-4">
                <div className='flex flex-col ml-auto'>
                    <p className='font-semibold'>0.0 BTC</p>
                    <p>$ 0.0 </p>

                </div>
                
                
            </td>
            
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
            </td>
        </tr>

        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div>
                    <p>Bitcoin-Cash</p>
                </div>
            </th>

            <td class="px-6 py-4">
                <div className='flex flex-col'>
                    <p className='font-bold text-[16px]'>0.0 BTC</p>
                    <p>$ 0.0 </p>

                </div>
                
                
            </td>
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
            </td>
        </tr>

        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div>
                    <p>Ethereum</p>
                </div>
            </th>

            <td class="px-6 py-4">
                <div className='flex flex-col'>
                    <p className='font-bold text-[16px]'>0.0 BTC</p>
                    <p>$ 0.0 </p>

                </div>
                
                
            </td>
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
            </td>
        </tr>

        <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                <div>
                    <p>Ethereum</p>
                </div>
            </th>

            <td class="px-6 py-4">
                <div className='flex flex-col'>
                    <p className='font-bold text-[16px]'>0.0 BTC</p>
                    <p>$ 0.0 </p>

                </div>
                
                
            </td>
            <td class="px-6 py-4 text-right">
                <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Withdraw</a>
            </td>
        </tr>


    </tbody>

</table>

</div>




                <div className='border border-black my-3 p-5 h-28 rounded-xl text-[16px]'>

                    <p> You Haven't Confirmed Any Withdrawal Yet</p>
                    <p> You Data Will Be Shown Here Once Available</p>

                </div>

                <div className='border border-black my-3 p-5 h-28 rounded-xl text-[16px]'>

                    <p> You Haven't Converted Any Coin Yet</p>
                    <p> You Data Will Be Shown Here Once Available</p>

                </div>

            </div>
            <div className='md:w-2/5 w-full flex flex-col p-3  '>

                <div className='flex w-full max-w-sm p-5 h-40  rounded border-black border my-3'>
                    <div className='' >
                        <p>Integrate Coinbase</p>
                        <p>Move Bitcoin Securely Between Your Coinbase Account And Your Perfy Account</p>
                        <p>Learn More </p>
                    </div>
                </div>

                <div className='w-full h-40 bg-black rounded border-black border my-3'>
                        <p className='text-white'>TBD</p>
                </div>

                <div className='w-full h-40 bg-black rounded border-black border my-3'>
                        <p className='text-white'>TBD</p>
                </div>

            </div>
        </div>





    </div>
  )
}

export default Settings