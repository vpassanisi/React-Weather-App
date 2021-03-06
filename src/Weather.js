import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import Bg from "./images/asoggetti-LFjxCbhs0QM-unsplash.jpg";
import Search from "./Search.js";
import LocationAndDate from "./LocationAndDate.js";
import Temperature from "./Temperature.js";
import Conditions from "./Conditions.js";
import Menu from "./Menu.js";
import WeatherContext from "./context/weather/weatherContext";
import DayForecast from "./DayForecast.js";
import WeeklyForecast from "./WeeklyForecast.js";

//prettier-ignore
const Container = styled.div`
height: 100vh;
  min-height: ${window.innerWidth <= 640
      ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
      : 100}${window.innerWidth <= 640 ? "px" : "vh"};
  background: url(${Bg}) center center/cover no-repeat;
`;

const Weather = () => {
  const [location, setLocation] = useState("");
  const [isMetric, setIsMetric] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const weatherContext = useContext(WeatherContext);

  const { getWeather, getTodaysForecast, getWeeksForecast } = weatherContext;

  useEffect(() => {
    const loadedFavorites = JSON.parse(localStorage.getItem("favorites"));
    const loadedIsMetric = JSON.parse(localStorage.getItem("isMetric"));
    if (!localStorage.isMetric) {
      localStorage.setItem("isMetric", JSON.stringify(false));
    } else {
      setIsMetric(loadedIsMetric);
    }

    if (!localStorage.favorites) {
      localStorage.setItem("favorites", JSON.stringify([]));
      getWeather("scotts valley", false);
      getTodaysForecast("scotts valley", false);
      getWeeksForecast("scotts valley", false);
    } else if (loadedFavorites.length > 0) {
      setFavorites(loadedFavorites);
      getWeather(
        loadedFavorites[0],
        JSON.parse(localStorage.getItem("isMetric"))
      );
      getTodaysForecast(
        loadedFavorites[0],
        JSON.parse(localStorage.getItem("isMetric"))
      );
      getWeeksForecast(
        loadedFavorites[0],
        JSON.parse(localStorage.getItem("isMetric"))
      );
    } else {
      getWeather("scotts valley", JSON.parse(localStorage.getItem("isMetric")));
      getTodaysForecast(
        "scotts valley",
        JSON.parse(localStorage.getItem("isMetric"))
      );
      getWeeksForecast(
        "scotts valley",
        JSON.parse(localStorage.getItem("isMetric"))
      );
    }

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem("isMetric", JSON.stringify(isMetric));
  }, [isMetric]);
  return (
    <Container className="w-screen overflow-x-hidden">
      <Menu
        favorites={favorites}
        setFavorites={setFavorites}
        isMetric={isMetric}
        setIsMetric={setIsMetric}
      />
      <div className="flex flex-col items-center">
        <Search setLocation={setLocation} location={location} />
        <LocationAndDate />
        <Temperature isMetric={isMetric} />
        <Conditions />
        <DayForecast />
        <div className="font-hairline text-4xl underline">Weekly Forecast</div>
        <WeeklyForecast />
      </div>
    </Container>
  );
};

export default Weather;
