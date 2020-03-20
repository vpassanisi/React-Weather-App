import React, { useContext } from "react";
import WeatherContext from "./context/weather/weatherContext";
import Day from "./Day.js";

const WeeklyForecast = () => {
  const weatherContext = useContext(WeatherContext);

  const {
    weeklyForecast: {
      dailyForecasts: {
        forecastLocation: { forecast }
      }
    }
  } = weatherContext;

  const Days = forecast.map((cast, index) => <Day key={index} cast={cast} />);

  return (
    <div
      className="flex flex-row overflow-x-auto"
      style={{ width: "calc(100% - 4rem)" }}
    >
      {Days}
    </div>
  );
};

export default WeeklyForecast;
