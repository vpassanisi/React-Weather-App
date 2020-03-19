import React, { useContext } from "react";
import WeatherContext from "./context/weather/weatherContext";

const Conditions = props => {
  const weatherContext = useContext(WeatherContext);

  const {
    currentWeather: {
      observations: {
        location: [
          {
            observation: [{ description, iconLink }]
          }
        ]
      }
    }
  } = weatherContext;

  return (
    <div className="text-black mt-2 text-2xl">
      <div>
        {description}
        <img
          className="bg-blue-gray-900-alpha-70 rounded-md inline ml-2 p-2"
          src={`${iconLink}?apiKey=${process.env.REACT_APP_API_KEY}`}
          alt=":("
        />
      </div>
    </div>
  );
};

export default Conditions;
