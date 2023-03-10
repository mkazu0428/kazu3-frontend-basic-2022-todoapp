import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";

const TodoCard = () => {
  const [] = useState;

  return (
    <StyledWrapper>
      <AddTaskButton onClick={() => {}}>
        <StyledTaskList></StyledTaskList>
      </AddTaskButton>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div``;
const StyledTaskList = styled.div``;
