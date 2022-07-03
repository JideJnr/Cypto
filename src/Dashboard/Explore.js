import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { SingleCoin } from "../config/api";
import { CryptoState } from "../CryptoContext";


const Explore = () => {
  
    const [coin, setCoin] = useState();
  
    const { currency, symbol } = CryptoState();
  
    const fetchCoin = async () => {
      const { data } = await axios.get(SingleCoin('bitcoin'));
  
      setCoin(data);
    };
  
    useEffect(() => {
      fetchCoin();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
   
    console.log(coin)


  return (
    <div>
<p>
    Test
</p>
    </div>
  )
}

export default Explore