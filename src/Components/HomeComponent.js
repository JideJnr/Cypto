import React from 'react'

import { useState, useEffect } from 'react'
import { CryptoState } from '../CryptoContext'
import axios from "axios";
import { CoinList } from "../config/api";

import Navbar from './Navbar'
import IntegrateCoin from './IntegrateCoin'
import TopMover from './TopMover'
import Balance from './Balance';
import WatchList from './WatchList';
import News from './News';

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
    

  
  return (
    <div className='flex flex-col grow bg-[#eeeeee] text-black'>

        <div className='w-full flex flex-col md:flex-row '>
            
            <div class=" md:w-3/5 w-full shadow-md sm:rounded-lg flex flex-col ">
                <Balance/>
                <WatchList/>
                <News/>
                

            </div>

            <div className='md:w-2/5 w-full flex flex-col  '>

                <IntegrateCoin/>
                <TopMover/>

            </div>
        </div>





    </div>
  )
}

export default Settings