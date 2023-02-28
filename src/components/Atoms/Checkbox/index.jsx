import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";
import COLOR from "../../../variables/color";

const Checkbox = (props) => {
  return (
    <CheckBoxTag onClick={props.onClick}>
      <ImgCheck src={check} />
    </CheckBoxTag>
  );
};

export default Checkbox;

const CheckBoxTag = styled.button`
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  padding: 0;
  background-color: transparent;
  &:hover > img {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImgCheck = styled.img`
  width: 16px;
  display: none;
`;
