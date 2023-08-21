import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import COLOR from "../../../variables/color";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Box>
        <Title title="deloitt" />
        <TodoCard />
      </Box>
      <Box>
        <Title title="pwc" />
        <TodoCard />
      </Box>
    </StyledWrapper>
  );
};

export default MainPage;

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100vh;
  padding: 20px;
  gap: 20px;
  background-color: ${COLOR.DEEP_BLUE_GRAY};
  @media screen and (min-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 60px;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;

  height: 80%;
`;
