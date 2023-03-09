import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../Atoms/Checkbox";
import EditButton from "../Atoms/EditButton";
//import Input from "../Atoms/Input";

const Task = ({
  onTaskChange,
  onTaskComplete,
  taskName = "",
  defaultsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultsEditing);
  setIsEditing = (isEditing) => {
    return !isEditing;
  };
  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete}></Checkbox>
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input
          onEditComplete={() => {
            setIsEditing, onTaskChange(value);
          }}
        />
      ) : null}
      {isEditing ? null : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={setIsEditing}></EditButton>
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
`;
const StyledEditButtonWrapper = styled.div`
  width: fit-content;
`;
