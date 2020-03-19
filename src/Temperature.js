import React, { useContext } from "react";

import WeatherContext from "./context/weather/weatherContext";

const Temperature = props => {
  const weatherContext = useContext(WeatherContext);

  const {
    currentWeather: {
      observations: {
        location: [
          {
            observation: [{ temperature }]
          }
        ]
      }
    }
  } = weatherContext;

  return (
    <div className="bg-blue-gray-900-alpha-70 p-8 rounded-md">
      <p className="text-6xl text-white font-hairline">
        {temperature}
        {props.isMetric ? "°C" : "°F"}
      </p>
    </div>
  );
};

export default Temperature;
