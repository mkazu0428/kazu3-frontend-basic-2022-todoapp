import styled from "styled-components";
import React from "react";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color";

const EditButton = (props) => {
  return (
    <Button onClick={props.onClick}>
      <Circle />
      <Img src={pencil} />
    </Button>
  );
};

export default EditButton;

const Button = styled.button`
  position: relative;
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  cursor: pointer;
  &:hover > div {
    opacity: 0.2;
    background: ${COLOR.LIGHT_GRAY};
  }
`;

const Circle = styled.div`
  width: 20px;
  height:20px;
  border-radius: 50%;
  background: transparent:
`;

const Img = styled.img`
  position: absolute;
  width: 20px;
  top: 0;
  left: 0;
`;
