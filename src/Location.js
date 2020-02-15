import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  &:focus {
    border-bottom: none !important;
    box-shadow: none !important;
    background: rgba(256, 256, 256, 1) !important;
  }

  ::placeholder {
    color: grey;
  }

  border-bottom: none !important;
  border-radius: 0 0 20px 20px !important;
  text-align: center;
  background: rgba(256, 256, 256, 0.5) !important;
  transition: background 300ms ease-in-out !important;
  padding-top: 1rem !important;
`;

const Location = props => {
  const [location, setLocation] = useState("");

  const submitLocation = e => {
    if (e.key === "Enter") {
      props.fetchWeather(location);
    }
  };
  return (
    <Input
      type="text"
      placeholder="location"
      className="col s10 offset-s1"
      value={location}
      onChange={e => setLocation(e.target.value)}
      onKeyDown={submitLocation}
    />
  );
};

export default Location;
