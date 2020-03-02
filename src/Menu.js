import React, { useState, useEffect } from "react";
import Favorite from "./Favorite.js";

const Menu = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  let favorites = props.favorites;
  const buttons = favorites.map((favorite, index) => (
    <Favorite
      key={index}
      favorite={favorite}
      index={index}
      fetchWeather={props.fetchWeather}
      selected={selected}
      setSelected={setSelected}
    />
  ));

  const handleEscape = e => {
    if (e.key === "Esc" || e.key === "Escape") {
      setIsOpen(false);
    }
  };

  const addFavorite = e => {
    favorites = [...favorites, props.city + ", " + props.state];
    props.setFavorites(favorites);
  };

  const removeFavorite = index => {
    let newFavorites = [...favorites];
    newFavorites.splice(index, 1);
    setSelected(null);
    props.setFavorites(newFavorites);
  };

  document.addEventListener("keydown", handleEscape);
  return (
    <div
      className={`fixed h-screen flex items-center transition duration-500 ease-in-out transform${
        isOpen ? "" : " -translate-x-56"
      }`}
    >
      {" "}
      <div
        className={`h-full w-56 left-0 bg-blue-gray-900 border-r-2 border-gray-500 rounded-r-md`}
      >
        <button
          className="text-white font-hairline text-2xl w-full py-4 px-2 focus:outline-none hover:bg-blue-gray-700 transition duration-500  ease-in-out"
          onClick={() => {
            props.setIsMetric(!props.isMetric);
            props.fetchWeather(
              props.city + " " + props.state + " " + props.country,
              !props.isMetric
            );
          }}
        >
          {props.isMetric ? "Farenheit" : "Celcius"}
        </button>
        <div className="text-center bg-blue-gray-800 text-white font-hairline text-2xl w-full py-4 px-2 border-b-2">
          Favorites
        </div>
        {buttons}
        <hr />
        <button
          className="text-white font-hairline text-2xl w-full py-4 px-2 focus:outline-none hover:bg-blue-gray-700 transition duration-500  ease-in-out"
          onClick={() => {
            addFavorite();
          }}
        >
          Add Current +
        </button>
        <button
          className="text-white font-hairline text-2xl w-full py-4 px-2 focus:outline-none hover:bg-blue-gray-700 transition duration-500  ease-in-out"
          onClick={() => {
            removeFavorite(selected);
          }}
        >
          Remove Selected -
        </button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-block focus:outline-none text-white bg-blue-gray-900-alpha-70 rounded-r-md p-2`}
      >
        <svg className="h-10 w-10 fill-current" viewBox="0 0 20 20">
          {isOpen ? (
            <path d="M8.388,10.049l4.76-4.873c0.303-0.31,0.297-0.804-0.012-1.105c-0.309-0.304-0.803-0.293-1.105,0.012L6.726,9.516c-0.303,0.31-0.296,0.805,0.012,1.105l5.433,5.307c0.152,0.148,0.35,0.223,0.547,0.223c0.203,0,0.406-0.08,0.559-0.236c0.303-0.309,0.295-0.803-0.012-1.104L8.388,10.049z"></path>
          ) : (
            <path d="M11.611,10.049l-4.76-4.873c-0.303-0.31-0.297-0.804,0.012-1.105c0.309-0.304,0.803-0.293,1.105,0.012l5.306,5.433c0.304,0.31,0.296,0.805-0.012,1.105L7.83,15.928c-0.152,0.148-0.35,0.223-0.547,0.223c-0.203,0-0.406-0.08-0.559-0.236c-0.303-0.309-0.295-0.803,0.012-1.104L11.611,10.049z" />
          )}
        </svg>
      </button>
      {/* {isOpen && (
        <button
          tabIndex="-1"
          className="absolute top-0 bottom-0 right-0 left-0 h-full w-full bg-transparent cursor-default focus:outline-none"
          onClick={() => setIsOpen(false)}
        ></button>
      )} */}
    </div>
  );
};

export default Menu;
