import { GET_WEATHER, GET_TODAY_FORECAST, GET_WEEK_FORECAST } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        currentWeather: action.payload,
        loading: false
      };
    case GET_TODAY_FORECAST:
      return {
        ...state,
        todaysForecast: action.payload,
        loading: false
      };
    default:
      return state;
  }
};
