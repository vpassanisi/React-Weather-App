import React, { useState } from "react";

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const handleEscape = e => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
    }
  };

  document.addEventListener("keydown", handleEscape);
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative block focus:outline-none text-white bg-blue-gray-900-alpha-70 rounded-bl-md p-2 z-10"
      >
        <svg className="h-10 w-10 fill-current" viewBox="0 0 20 20">
          {isOpen ? (
            <path d="M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z"></path>
          ) : (
            <path
              d="M3.314,4.8h13.372c0.41,0,0.743-0.333,0.743-0.743c0-0.41-0.333-0.743-0.743-0.743H3.314
								c-0.41,0-0.743,0.333-0.743,0.743C2.571,4.467,2.904,4.8,3.314,4.8z M16.686,15.2H3.314c-0.41,0-0.743,0.333-0.743,0.743
								s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,15.2,16.686,15.2z M16.686,9.257H3.314
								c-0.41,0-0.743,0.333-0.743,0.743s0.333,0.743,0.743,0.743h13.372c0.41,0,0.743-0.333,0.743-0.743S17.096,9.257,16.686,9.257z"
            />
          )}
        </svg>
      </button>
      {isOpen && (
        <button
          tabIndex="-1"
          className="fixed top-0 bottom-0 right-0 left-0 h-full w-full bg-transparent cursor-default"
          onClick={() => setIsOpen(false)}
        ></button>
      )}

      <div
        className={`absolute right-0 mt-4 bg-black rounded-l-md transition duration-500 ease-in-out transform${
          isOpen ? "" : " translate-x-64"
        }`}
      >
        {props.isMetric ? (
          <button
            className="text-white font-hairline text-2xl w-32 py-4 px-2 focus:outline-none transition duration-75 active:bg-white-alpha-20 ease-in-out"
            onClick={() => {
              props.setIsMetric(false);
              props.fetchWeather(
                props.city + " " + props.state + " " + props.country,
                false
              );
              setIsOpen(false);
            }}
          >
            Farenheit
          </button>
        ) : (
          <button
            className="text-white font-hairline text-2xl w-32 py-4 px-2 focus:outline-none transition duration-75 active:bg-white-alpha-20 ease-in-out"
            onClick={() => {
              props.setIsMetric(true);
              props.fetchWeather(
                props.city + " " + props.state + " " + props.country,
                true
              );
              setIsOpen(false);
            }}
          >
            Celcius
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
