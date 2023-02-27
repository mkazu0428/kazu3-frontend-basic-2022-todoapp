import React from "react";
import styled from "styled-components";
import check from "../../../assets/svg/check.svg";

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
`;

const ImgCheck = styled.img`
  width: 16px;
  display: none;
  &:hover {
    display: block;
  }
`;
