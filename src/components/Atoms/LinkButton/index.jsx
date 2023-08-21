import React from "react";
import styled from "styled-component";
import COLOR from "../../../variables/color";

const LinkButton = ({ text, href }) => {
  return <StyledWrapper href={href}>{text}</StyledWrapper>;
};

const StyledWrapper = styled.a`
  display: block;
  width: 200px;
  height: 50px;
  color: ${COLOR.RED};
`;

export default LinkButton;
