import React from "react";
import styled from "styled-components";

const DIV = styled.div`
  margin-top: 2rem;
  justify-content: center;
`;

const Temp = styled.div`
  font-size: 5rem;
  color: white;
  height: 200px;
  width: 325px !important;
  min-width: 325px !important;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(256, 256, 256, 0.5);
  /* box-shadow: 2px 2px 0px rgb(75, 75, 75); */
  text-shadow: 4px 2px 0px rgb(75, 75, 75);
  border-radius: 20px;
  text-align: center;
`;

const Temperature = props => {
  return (
    <DIV className="col s4 offset-s4 valign-wrapper">
      <Temp>{props.temperature}°C</Temp>
    </DIV>
  );
};

export default Temperature;
