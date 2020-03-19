import React, { useContext } from "react";

import WeatherContext from "./context/weather/weatherContext";

const LocationAndDate = props => {
  const weatherContext = useContext(WeatherContext);

  const {
    currentWeather: {
      observations: {
        location: [
          {
            timezone,
            observation: [{ city, state }]
          }
        ]
      }
    }
  } = weatherContext;

  const calcTime = offset => {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return (
    <div className="flex flex-col items-center text-black mt-8 mb-4">
      <div className="text-2xl">{city + " ," + state}</div>
      <div>{calcTime(timezone)}</div>
    </div>
  );
};

export default LocationAndDate;
