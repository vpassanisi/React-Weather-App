import React, { useEffect } from "react";
import Weather from "./Weather.js";

import WeatherState from "./context/weather/WeatherState.js";

const App = () => {
  useEffect(() => {
    if (!localStorage.favorites) {
      localStorage.setItem("favorites", JSON.stringify([]));
    }

    if (!localStorage.isMetric) {
      localStorage.setItem("isMetric", JSON.stringify(false));
    }
  });
  return (
    <WeatherState>
      <Weather />
    </WeatherState>
  );
};

export default App;
