import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = (props) => {
  return (
    <StyledWrapper isActive={props.isActive}>{props.errorText}</StyledWrapper>
  );
};

export default Alert;

const StyledWrapper = styled.div`
  width: min(100%, 400px);
  height: 40px;
  padding: 10px 20px;
  border-radius: 4px;
  background-color: ${COLOR.RED};
  opacity: ${(props) => (props.isActive ? "1" : "0")};
  ${TEXT.S}
  color: ${COLOR.WHITE};
`;
