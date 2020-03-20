import React, { useContext, useEffect } from "react";
import { Line, defaults } from "react-chartjs-2";
import WeatherContext from "./context/weather/weatherContext";

const DayForecast = () => {
  const weatherContext = useContext(WeatherContext);

  let chartReference = {};

  defaults.global.animation = false;

  const {
    todaysForecast: {
      hourlyForecasts: {
        forecastLocation: { forecast }
      }
    },
    todaysForecast: {
      hourlyForecasts: {
        forecastLocation: { timezone }
      }
    }
  } = weatherContext;

  const formatTime = (data, offset) => {
    const time = new Date(data.utcTime);
    const utc = time.getTime() + time.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);
    const ls = nd.toLocaleString("en-US", {
      hour: "2-digit",
      minute: "2-digit"
    });
    if (ls === "Invalid Date") return "";
    return ls;
  };

  const data = canvas => {
    const obj = {};

    let labelArr = [];
    forecast.forEach(cast => {
      labelArr.push(formatTime(cast, timezone));
    });
    obj.labels = labelArr;

    obj.datasets = [];
    obj.datasets[0] = {
      borderColor: "white",
      fill: false
    };

    let tempArr = [];
    forecast.forEach(cast => {
      tempArr.push(cast.temperature);
    });
    obj.datasets[0].data = tempArr;

    return obj;
  };

  // useEffect(() => {
  //   chartReference.chartInstance.update();
  // }, [forecast]);

  return (
    <div
      className="bg-blue-gray-900-alpha-70 mt-2 p-4 rounded max-w-2xl"
      style={{ width: "calc(100% - 4rem)" }}
    >
      <div className="text-white text-center text-2xl font-hairline">
        Temperature Forecast
      </div>
      <Line
        ref={reference => (chartReference = reference)}
        redraw={true}
        data={data}
        options={{
          responsive: true,
          aspectRatio: 2,
          maintainAspectRatio: true,
          legend: {
            display: false
          },
          scales: {
            xAxes: [
              {
                ticks: {
                  fontColor: "white"
                },
                gridLines: {
                  zeroLineColor: "black"
                }
              }
            ],
            yAxes: [
              {
                ticks: {
                  fontColor: "white"
                },
                gridLines: {
                  zeroLineColor: "black"
                }
              }
            ]
          }
        }}
      />
    </div>
  );
};

export default DayForecast;
