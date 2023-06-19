import React from "react";
import { useDataFetching } from "../axios/useDataFetching";
import CoinChart from "./CoinChart";

const CoinList = () => {
  const {
    coinName,
    minCandleData,
    dayCandleData,
    weekCandleData,
    monthCandleData,
  } = useDataFetching(
    "https://api.upbit.com/v1/market/all?isDetails=false",
    "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
    "https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=1",
    "https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1",
    "https://api.upbit.com/v1/candles/months?market=KRW-BTC&count=1"
  );

  return (
    <div>
      {coinName.map((coin, index) => (
        <div key={index}>
          {coin.market}: {coin.korean_name} - {coin.english_name}
          <CoinChart/>
        </div>

      ))}

    </div>
  );
};

export default CoinList;
