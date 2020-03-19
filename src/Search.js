import React, { useContext } from "react";
import WeatherContext from "./context/weather/weatherContext";

const Search = props => {
  const weatherContext = useContext(WeatherContext);

  const { getWeather } = weatherContext;

  const submitLocation = e => {
    if (e.key === "Enter") {
      getWeather(props.location);
      e.target.value = "";
    }
  };

  return (
    <div className="bg-blue-gray-900-alpha-70 pt-4 pb-2 rounded-b-md flex w-4/5 xl:w-1/2">
      <div className="w-1/6" />
      <input
        type="text"
        placeholder="location"
        className="bg-transparent outline-none text-center text-white text-2xl h-8 w-4/6"
        onChange={e => props.setLocation(e.target.value)}
        onKeyDown={submitLocation}
        onFocus={e => (e.target.value = "")}
      />
      <div className="w-1/6 flex flex-row justify-center">
        <button
          className="inline-block text-white focus:outline-none"
          onClick={() =>
            props.location !== "" ? getWeather(props.location) : null
          }
        >
          <svg
            className="w-8 h-8 inline-block fill-current"
            viewBox="0 0 20 20"
          >
            <path
              d="M19.129,18.164l-4.518-4.52c1.152-1.373,1.852-3.143,1.852-5.077c0-4.361-3.535-7.896-7.896-7.896
								c-4.361,0-7.896,3.535-7.896,7.896s3.535,7.896,7.896,7.896c1.934,0,3.705-0.698,5.078-1.853l4.52,4.519
								c0.266,0.268,0.699,0.268,0.965,0C19.396,18.863,19.396,18.431,19.129,18.164z M8.567,15.028c-3.568,0-6.461-2.893-6.461-6.461
								s2.893-6.461,6.461-6.461c3.568,0,6.46,2.893,6.46,6.461S12.135,15.028,8.567,15.028z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Search;
