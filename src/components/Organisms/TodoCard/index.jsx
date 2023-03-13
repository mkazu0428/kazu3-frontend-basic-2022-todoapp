import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
//import Task from "../../Molecules/Task"

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  const onAddTaskButtonClick = () => {
    setTaskList([...taskList, { name: "", initializing: true }]);
  };

  const onTaskComplete = () => {
    let newTaskList = [...taskList];
    newTaskList.splice(index, 1);
    setTaskList(newTaskList);
  };

  const onTaskNameChange = () => {
    let newTaskList = [...taskList];
    if ((value.length = 0)) {
      newTaskList.splice(index, 1);
    } else {
      newTaskList[index].name = value;
    }
    setTaskList(newTaskList);
  };

  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick}>
        <StyledTaskList>
          {taskList.map((task, index) => {
            <Task
              key={index}
              onTaskComplete={onTaskComplete(index)}
              onTaskChange={onTaskNameChange(value, index)}
              taskName={task.name}
              defaultsEditing={task.initializing}
            />;
          })}
        </StyledTaskList>
      </AddTaskButton>
    </StyledWrapper>
  );
};

export default TodoCard;

const StyledWrapper = styled.div`
  padding: 20px;
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
