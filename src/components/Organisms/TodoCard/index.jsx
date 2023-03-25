import React, { useState, useEffect } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";

const TodoCard = () => {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    let data = localStorage.getItem("data");
    setTaskList(JSON.parse(data));
  }, []);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(taskList));
  }, [taskList]);

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
  width: 100%;
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  border-radius: 4px;
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    width: 500px;
  }
`;
const StyledTaskList = styled.div`
  display: flex;
  flex-direction: column;
`;
