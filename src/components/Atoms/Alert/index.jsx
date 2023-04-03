import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import BREAKPOINT from "../../../variables/breakpoint";

const Alert = ({ isActive, errorText }) => {
  return <StyledWrapper isActive={isActive}>{errorText}</StyledWrapper>;
};

export default Alert;

const StyledWrapper = styled.div`
  position: absolute;
  top: 40px;
  left: 0;
  right: 0;
  z-index: 1;
  width: calc(100% - 56px);
  height: 40px;
  margin: auto;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: ${COLOR.RED};
  transition: all 1s;
  opacity: ${({ isActive }) => (isActive ? "1" : "0")};
  transform: ${({ isActive }) =>
    isActive ? "translateY(10px)" : "translateY(-10px)"};
  ${TEXT.S}
  color: ${COLOR.WHITE};
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    width: 400px;
    top: 80px;
  }
`;
