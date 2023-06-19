import { useEffect, useState } from "react";
import axios from "axios";
export const useDataFetching = (nameUrl, minCandle, dayCandle, weekCandle, monthCandle) => {
  const [coinName, setCoinName] = useState([]);
  const [minCandleData, setMinCandleData] = useState([]);
  const [dayCandleData, setDayCandleData] = useState([]);
  const [weekCandleData, setWeekCandleData] = useState([]);
  const [monthCandleData, setMonthCandleData] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    };

    axios
      .all([
        axios.get(nameUrl, options),
        axios.get(minCandle, options),
        axios.get(dayCandle, options),
        axios.get(weekCandle, options),
        axios.get(monthCandle, options),
      ])
      .then(
        axios.spread((nameResponse, minResponse, dayResponse, weekResponse, monthResponse) => {
          setCoinName(nameResponse.data);
          setMinCandleData(minResponse.data);
          setDayCandleData(dayResponse.data);
          setWeekCandleData(weekResponse.data);
          setMonthCandleData(monthResponse.data);
        })
      )
      .catch((err) => console.error(err));
  }, [nameUrl, minCandle, dayCandle, weekCandle, monthCandle]);

  return { coinName, minCandleData, dayCandleData, weekCandleData, monthCandleData };
};
