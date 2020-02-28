import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Location from "./Search.js";
import LocationAndDate from "./LocationAndDate.js";
import Temperature from "./Temperature.js";
import Conditions from "./Conditions.js";
import initialState from "./initialState.js";
import Menu from "./Menu.js";
import Bg from "./images/asoggetti-LFjxCbhs0QM-unsplash.jpg";

//prettier-ignore
const Container = styled.div`
  height: ${window.innerWidth <= 640
      ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      : 100}${window.innerWidth <= 640 ? "px" : "vh"};
  background: url(${Bg}) center center/cover no-repeat;
`;

const App = () => {
  const [weatherData, setWeatherData] = useState(initialState);

  const [isMetric, setIsMetric] = useState(true);

  const fetchWeather = async (location, metric = isMetric) => {
    const req = await fetch(
      `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=FbkF7HBS4x03_o9G-VTicFHdCF1UrskFVGRd_OwZOmw&product=observation&name=${location}&oneobservation=true&metric=${metric}`,
      {
        method: "GET"
      }
    );

    const res = await req.json();

    console.log(res);

    if (res.Type === "Invalid Request") return setWeatherData(initialState);

    setWeatherData(res);
  };

  useEffect(() => {
    fetchWeather("Santa Cruz CA", isMetric);
  }, []);

  return (
    <Container className="w-screen overflow-x-hidden">
      <div className="flex flex-row justify-between">
        <div className="w-1/5" />
        <div className="w-3/5">
          <Location fetchWeather={fetchWeather} />
        </div>
        <div className="w-1/5 flex flex-row justify-end">
          <Menu
            isMetric={isMetric}
            setIsMetric={setIsMetric}
            fetchWeather={fetchWeather}
            city={weatherData.observations.location[0].observation[0].city}
            state={weatherData.observations.location[0].observation[0].state}
            country={
              weatherData.observations.location[0].observation[0].country
            }
          />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <LocationAndDate
          city={weatherData.observations.location[0].observation[0].city}
          state={weatherData.observations.location[0].observation[0].state}
          time={weatherData.observations.location[0].observation[0].utcTime}
          timezone={weatherData.observations.location[0].timezone}
        />
        <Temperature
          isMetric={isMetric}
          temperature={
            weatherData.observations.location[0].observation[0].temperature
          }
        />
        <Conditions
          icon={weatherData.observations.location[0].observation[0].iconLink}
          conditions={
            weatherData.observations.location[0].observation[0].description
          }
        />
      </div>
    </Container>
  );
};

export default App;
