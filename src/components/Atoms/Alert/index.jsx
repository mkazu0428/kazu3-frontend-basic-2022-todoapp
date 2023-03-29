import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = ({ isActive, errorText }) => {
  return <StyledWrapper isActive={isActive}>{errorText}</StyledWrapper>;
};

export default Alert;

const StyledWrapper = styled.div`
  width: min(100%, 400px);
  height: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: ${COLOR.RED};
  transition: all 1s;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transform: ${({ isActive }) =>
    isActive ? "translateY(30px)" : "translateY(-30px)"};
  ${TEXT.S}
  color: ${COLOR.WHITE};
`;
