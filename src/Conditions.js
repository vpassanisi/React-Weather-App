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
    <div
      className="flex flex-row items-center justify-center text-black mt-2 text-2xl"
      style={{ width: "calc(100% - 4rem)" }}
    >
      {description}
      <img
        className="bg-blue-gray-900-alpha-70 rounded-md inline ml-2 p-2"
        src={`${iconLink}?apiKey=${process.env.REACT_APP_API_KEY}`}
        alt=":("
      />
    </div>
  );
};

export default Conditions;
