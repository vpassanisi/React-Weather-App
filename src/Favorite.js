import React from "react";

const Favorite = props => {
  return (
    <button
      className={`w-full text-white font-hairline text-2xl py-4 px-2 focus:outline-none border-b hover:bg-blue-gray-700 transition duration-500  ease-in-out ${
        props.selected === props.index ? "bg-blue-gray-700" : ""
      }`}
      onClick={() => {
        props.fetchWeather(props.favorite);
        props.setSelected(props.index);
      }}
    >
      {props.favorite}
    </button>
  );
};

export default Favorite;
