import React from "react";

const LocationAndDate = props => {
  const calcTime = offset => {
    const d = new Date();
    const utc = d.getTime() + d.getTimezoneOffset() * 60000;
    const nd = new Date(utc + 3600000 * offset);
    return nd.toLocaleString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  };
  return (
    <div className="flex flex-col items-center text-black mt-8 mb-4">
      <div className="text-2xl">
        {props.city + ","} {props.state}
      </div>
      <div>{props.time === undefined ? "" : calcTime(props.timezone)}</div>
    </div>
  );
};

export default LocationAndDate;
