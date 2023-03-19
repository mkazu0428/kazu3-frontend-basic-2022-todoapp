import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import EditButton from "../../Atoms/EditButton";
import Input from "../../Atoms/Input";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const onEditComplete = (value) => {
    setIsEditing(!isEditing);
    onTaskNameChange(value);
  };

  const onEditButtonClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete}></Checkbox>
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick}></EditButton>
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};

export default Task;

const StyledWrapper = styled.div`
  width: 256px;
  height: 24px;
  padding: 2px 6px;
  display: flex;
`;
const StyledCheckboxWrapper = styled.div`
  width: fit-content;
  margin-right: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
const StyledTaskName = styled.div`
  width: 100%;
  color: ${COLOR.LIGHT_GRAY};
  ${TEXT.S}
`;
const StyledEditButtonWrapper = styled.div`
  width: fit-content;
`;
