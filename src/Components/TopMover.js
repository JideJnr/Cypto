import React,  { useEffect, useState } from 'react'
import { CryptoState } from '../Context/CryptoContext';
import axios from "axios";
import { TrendingCoins } from "../config/api";
import MoverList from './MoverList';

const Mover = () => {

  const [data, setData] = useState("");
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const { currency, symbol } = CryptoState();


  const fetchCoins = async () => {
      setLoading(true);
      const { data } = await axios.get(TrendingCoins(currency));
      console.log(data);
  
      setCoins(data);
      setLoading(false);
    };
  
    useEffect(() => {
      fetchCoins();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency]);
  

  return (
    
    <div className='bg-white p-5'>

      <div className='mb-3'>
        <p className='font-medium text-[20px] '>
          Trending Coins
        </p>
      </div>

      <div className= ''>
            
        {coins.map((coins) => (
                <MoverList
                key={coins.uid}
                coins={coins}

                
                />
        ))}
            
      </div>
           
        
    </div>
  )
}

export default Mover