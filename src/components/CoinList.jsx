import React, {useState} from "react";
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
  const [selectedCoin, setSelectedCoin] = useState(null);
  const handleCoinClick = (coin) => {
    setSelectedCoin(coin);
  };
  return (
    <div>
      {coinName
        .filter((coin) => coin.market.includes("KRW"))
        .map((coin, index) => (
          <div key={index}  onClick={() => handleCoinClick(coin)} className="click">
            {coin.korean_name} - {coin.english_name}
            {selectedCoin === coin && (
              <CoinChart
              coinName={coinName}
              minCandleData={minCandleData}
              dayCandleData={dayCandleData}
              weekCandleData={weekCandleData}
              monthCandleData={monthCandleData}
              />
            )}      
          </div>
        ))}
    </div>
  );
};

export default CoinList;
