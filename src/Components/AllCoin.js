
import CoinsList from './CoinsList'
import React,  { useEffect, useState } from 'react'


import { CryptoState } from '../Context/CryptoContext';
import axios from "axios";
import { CoinList } from "../config/api";
import numberWithCommas from './numberWithCommas';




const AllCoin = () => {


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
          (coins) =>
            coins.name.toLowerCase().includes(search) ||
            coins.symbol.toLowerCase().includes(search)
        );
      };


  return (
    <div className='bg-white w-full h-fit p-5'>

      <div className='flex border  bg-white max-w-sm'>
            <input className='grow rounded-xl border px-5 py-2' 
            aria-label='search for cryptocurrency'
            onChange={(e) => setSearch(e.target.value)}/>

      </div>

      <div className='p-2 grow overflow-y-auto'>
            
      {handleSearch()
        .slice((page - 1) * 10, (page - 1) * 10 + 10)
        .map((coins) => {

                    <CoinsList
                    key={coins.uid}
                    coins={coins}/>
    
                  
                  })}
                  
      </div>

      <div className='p-2 h-[200px] overflow-y-auto'>
            
                {coins.map((coins) => (
                    <CoinsList
                    key={coins.uid}
                    coins={coins}

                    
                    />
                ))}


      </div>

    </div>
  )
}

export default AllCoin