import React from "react";

const Temperature = props => {
  return (
    <div className="bg-blue-gray-900-alpha-70 p-8 rounded-md">
      <p className="text-6xl text-white font-hairline">
        {props.temperature}
        {props.isMetric ? "°C" : "°F"}
      </p>
    </div>
  );
};

export default Temperature;
