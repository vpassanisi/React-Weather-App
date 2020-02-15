import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Location from "./Location.js";
import LocationAndDate from "./LocationAndDate.js";
import Temperature from "./Temperature.js";
import Conditions from "./Conditions.js";
import initialState from "./initialState.js";
import "materialize-css/dist/css/materialize.min.css";
import Cold from "./images/cold2.jpg";
import "./App.css";

const Container = styled.div`
  height: ${Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  )}px;
  background: url(${Cold}) center center/cover no-repeat;
  margin-bottom: 0;
  margin: 0 auto;
`;

const App = () => {
  const [weatherData, setWeatherData] = useState(initialState);

  const fetchWeather = async location => {
    const req = await fetch(
      `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=FbkF7HBS4x03_o9G-VTicFHdCF1UrskFVGRd_OwZOmw&product=observation&name=${location}&oneobservation=true`,
      {
        method: "GET"
      }
    );

    const res = await req.json();

    if (res.Type === "Invalid Request") return setWeatherData(initialState);

    console.log(res);

    setWeatherData(res);
  };

  useEffect(() => {
    // fetchWeather("boulder");
  }, []);

  return (
    <Container>
      <div className="row">
        <Location fetchWeather={fetchWeather} />
        <LocationAndDate
          city={weatherData.observations.location[0].observation[0].city}
          state={weatherData.observations.location[0].observation[0].state}
        />
        <Temperature
          temperature={
            weatherData.observations.location[0].observation[0].temperature
          }
        />
        <Conditions
          conditions={
            weatherData.observations.location[0].observation[0].description
          }
        />
      </div>
    </Container>
  );
};

export default App;
