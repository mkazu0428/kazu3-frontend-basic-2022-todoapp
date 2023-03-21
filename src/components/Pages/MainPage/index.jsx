import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  background-color: ${COLOR.DEEP_BLUE_GRAY};
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;
