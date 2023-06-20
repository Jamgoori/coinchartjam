import React from 'react';
import { useDataFetching } from "../axios/useDataFetching";

const CoinChart = ({ coinName }) => {

  console.log(coinName[1].market);

  return (
    <div>CoinChart</div>
  );
};

export default CoinChart;
