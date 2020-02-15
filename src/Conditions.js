import React from "react";
import styled from "styled-components";

const DIV = styled.div``;

const H4 = styled.h4`
  font-weight: 300;
`;

const Conditions = props => {
  return (
    <DIV className="col s4 offset-s4 center white-text">
      <H4>{props.conditions}</H4>
    </DIV>
  );
};

export default Conditions;
