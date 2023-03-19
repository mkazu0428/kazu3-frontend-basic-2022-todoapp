import React, { useState } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = (index) => {
    const newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const onTaskNameChange = (value, index) => {
    const newTaskList = [...taskList];
    newTaskList[index].name = value;
    if (value === "") {
      newTaskList.splice(index, 1);
    }
    setTaskList(newTaskList);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {taskList.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => onTaskNameChange(value, index)}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  & > div {
    margin-top: 10px;
  }
`;
