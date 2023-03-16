import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../Atoms/Checkbox";
import EditButton from "../Atoms/EditButton";
import Input from "../Atoms/Input";
import COLOR from "../../variables/color";

const Task = ({
  onTaskChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);

  const isEditingHandler = () => {
    setIsEditing(!isEditing);
  };

  const onEditComplete = (value) => {
    isEditingHandler();
    onTaskChange(value);
  };

  const onEditButtonComplete = () => {
    isEditingHandler();
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
            <EditButton onClick={onEditButtonComplete}></EditButton>
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
`;
const StyledEditButtonWrapper = styled.div`
  width: fit-content;
`;
