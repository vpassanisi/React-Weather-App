import React, { useReducer } from "react";
import weatherReducer from "./weatherReducer";
import WeatherContext from "./weatherContext";
import {
  GET_WEATHER,
  GET_TODAY_FORECAST,
  GET_WEEKLY_FORECAST,
  WEATHER_ERROR,
  CLEAR_ERRORS
} from "../types";

const WeatherState = props => {
  const initialState = {
    currentWeather: {
      observations: {
        location: [
          {
            timezone: 0,
            observation: [
              {
                description: "",
                temperature: "",
                iconName: "",
                iconLink: "",
                country: "",
                state: "",
                city: ""
              }
            ]
          }
        ]
      }
    },
    todaysForecast: {
      hourlyForecasts: {
        forecastLocation: {
          forecast: [
            {
              localTime: "",
              temperature: ""
            }
          ]
        }
      }
    },
    weeklyForecast: {
      dailyForecasts: {
        forecastLocation: { forecast: [] }
      }
    },
    loading: true,
    error: null
  };

  const [state, dispatch] = useReducer(weatherReducer, initialState);

  const getWeather = async (location, metric = false) => {
    try {
      const res = await fetch(
        `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.REACT_APP_API_KEY}&product=observation&name=${location}&oneobservation=true&metric=${metric}`,
        {
          method: "GET"
        }
      );

      const data = await res.json();

      dispatch({ type: GET_WEATHER, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const getTodaysForecast = async (location, metric = false) => {
    try {
      const res = await fetch(
        `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${
          process.env.REACT_APP_API_KEY
        }&product=forecast_hourly&hourlydate=${
          new Date(Date.now()).toISOString().split("T")[0]
        }&name=${location}&metric=${metric}`,
        {
          method: "GET"
        }
      );

      const data = await res.json();

      dispatch({ type: GET_TODAY_FORECAST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  const getWeeksForecast = async (location, metric = false) => {
    try {
      const res = await fetch(
        `https://weather.ls.hereapi.com/weather/1.0/report.json?apiKey=${process.env.REACT_APP_API_KEY}&product=forecast_7days_simple&name=${location}&metric=${metric}`,
        {
          method: "GET"
        }
      );

      const data = await res.json();

      console.log(data);

      dispatch({ type: GET_WEEKLY_FORECAST, payload: data });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather: state.currentWeather,
        todaysForecast: state.todaysForecast,
        weeklyForecast: state.weeklyForecast,
        loading: state.loading,
        error: state.error,
        getWeather,
        getTodaysForecast,
        getWeeksForecast
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
