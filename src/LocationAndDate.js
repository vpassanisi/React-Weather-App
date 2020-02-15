import React from "react";
import styled from "styled-components";

const H3 = styled.h3`
  margin-top: 0;
  text-shadow: 2px 2px 0px rgb(75, 75, 75);
  font-weight: 300;
`;

const H5 = styled.h5`
  text-shadow: 4px 2px 3px #727272;
  font-weight: 300;
`;

const DIV = styled.div`
  margin-top: 2rem;
`;

const LocationAndDate = props => {
  return (
    <DIV className="col s10 offset-s1 center white-text">
      <H3>
        {props.city}, {props.state}
      </H3>
      <H5>
        {new Date().toLocaleString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        })}
      </H5>
    </DIV>
  );
};

export default LocationAndDate;
