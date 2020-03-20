import React, { useContext } from "react";
import WeatherContext from "./context/weather/weatherContext";

const Favorite = props => {
  const weatherContext = useContext(WeatherContext);

  const { getWeather, getTodaysForecast } = weatherContext;

  return (
    <button
      className={`w-full text-white font-hairline text-2xl py-4 px-2 focus:outline-none border-b hover:bg-blue-gray-700 transition duration-500  ease-in-out ${
        props.selected === props.index ? "bg-blue-gray-700" : ""
      }`}
      onClick={() => {
        getWeather(props.favorite);
        getTodaysForecast(props.favorite);
        props.select(props.index);
      }}
    >
      {props.favorite}
    </button>
  );
};

export default Favorite;
