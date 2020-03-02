import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Search from "./Search.js";
import LocationAndDate from "./LocationAndDate.js";
import Temperature from "./Temperature.js";
import Conditions from "./Conditions.js";
import initialState from "./initialState.js";
import Menu from "./Menu.js";
import Bg from "./images/asoggetti-LFjxCbhs0QM-unsplash.jpg";

//prettier-ignore
const Container = styled.div`
height: 100vh;
  min-height: ${window.innerWidth <= 640
      ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      : 100}${window.innerWidth <= 640 ? "px" : "vh"};
  background: url(${Bg}) center center/cover no-repeat;
`;

const App = () => {
  const [weatherData, setWeatherData] = useState(initialState);
  const [location, setLocation] = useState("");
  const [isMetric, setIsMetric] = useState(true);
  const [favorites, setFavorites] = useState([]);

  const fetchWeather = async (location, metric = isMetric) => {
    const req = await fetch(
      `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.REACT_APP_API_KEY}&product=observation&name=${location}&oneobservation=true&metric=${metric}`,
      {
        method: "GET"
      }
    );

    if (req.status === 401) return;

    const res = await req.json();

    if (res.Type === "Invalid Request") return setWeatherData(initialState);

    setWeatherData(res);
  };

  useEffect(() => {
    const loadFavorites = JSON.parse(localStorage.getItem("favorites"));
    if (loadFavorites) {
      setFavorites(loadFavorites);
      fetchWeather(loadFavorites[0], isMetric);
    } else {
      fetchWeather("Santa Cruz CA", isMetric);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <Container className="w-screen overflow-x-hidden">
      <Menu
        favorites={favorites}
        setFavorites={setFavorites}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
        fetchWeather={fetchWeather}
        city={weatherData.observations.location[0].observation[0].city}
        state={weatherData.observations.location[0].observation[0].state}
        country={weatherData.observations.location[0].observation[0].country}
      />

      <div className="flex flex-col items-center">
        <Search
          setLocation={setLocation}
          location={location}
          fetchWeather={fetchWeather}
        />
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
