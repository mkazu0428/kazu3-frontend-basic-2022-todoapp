import React from "react";
import styled from "styled-components";
import plus from "../../../assets/svg/plus.svg";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

const AddTaskButton = (props) => {
  return (
    <AddTaskButtonTag onClick={props.onClick}>
      <ImgPlus src={plus} />
      <AddTaskButtonText>タスクを追加</AddTaskButtonText>
    </AddTaskButtonTag>
  );
};

export default AddTaskButton;

const AddTaskButtonTag = styled.button`
  width: 126px;
  height: 24px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: none;
  padding: 2px 6px;
  background-color: transparent;
  cursor: pointer;
  &:hover {
    background-color: rgba(79, 163, 129, 0.2);
  }
`;
const ImgPlus = styled.img`
  width: 20px;
`;
const AddTaskButtonText = styled.p`
  width: 84px;
  height: 20px;
  color: ${COLOR.GREEN};
  ${TEXT.S}
  font-family:${FONTFAMILY.NOTO_SANS}
`;
