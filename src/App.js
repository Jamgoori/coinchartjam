import "./App.css";
import TopNav from "./components/TopNav";
import { useDataFetching } from "./axios/useDataFetching";
import axios from "axios";
import CoinList from "./components/CoinList";

function App() {

  return (
    <div>
      <TopNav />
      <CoinList/>
      <footer>푸터</footer>
    </div>
  );
}

export default App;
