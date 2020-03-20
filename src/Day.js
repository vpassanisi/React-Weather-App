import React from "react";

const Day = props => {
  const data = props.cast;
  return (
    <div
      className="bg-blue-gray-900-alpha-70 text-white font-hairline rounded p-2 mx-2 w-32 flex flex-col items-center"
      style={{ minWidth: "8rem" }}
    >
      <div className="text-center">{data.weekday}</div>
      <img
        className="h-16 w-16"
        src={`${data.iconLink}?apiKey=${process.env.REACT_APP_API_KEY}`}
        alt=":("
      />
      <div>High: {data.highTemperature}</div>
      <div className="w-full my-2 bg-white rounded" style={{ height: "2px" }} />
      <div className="">{data.description}</div>
    </div>
  );
};

export default Day;
