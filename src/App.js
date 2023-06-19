import "./App.css";
import TopNav from "./components/TopNav";
import { useDataFetching } from "./axios/useDataFetching";
import axios from "axios";

function App() {
  const { coinName, minCandleData, dayCandleData, weekCandleData, monthCandleData } = useDataFetching(
    "https://api.upbit.com/v1/market/all?isDetails=false",
    "https://api.upbit.com/v1/candles/minutes/1?market=KRW-BTC&count=1",
    "https://api.upbit.com/v1/candles/days?market=KRW-BTC&count=1",
    "https://api.upbit.com/v1/candles/weeks?market=KRW-BTC&count=1",
    "https://api.upbit.com/v1/candles/months?market=KRW-BTC&count=1"
  );

  return (
    <div>
      <TopNav />
      <div>
      {coinName.map((coin, index) => (
        <div key={index}>
          {coin.market}: {coin.korean_name} - {coin.english_name}
        </div>
      ))}
    </div>
      <div>푸터</div>
    </div>
  );
}

export default App;
