import styled from "styled-components";
import React from "react";
import COLOR from "../../../variables/color.js";
import FONTFAMILY from "../../../variables/font_family.js";
import TEXT from "../../../variables/texts.js";
import BREAKPOINT from "../../../variables/breakpoint.js";

const Title = () => {
  return <StyledText>SIMPLE TODO APP</StyledText>;
};
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  font-family: ${FONTFAMILY.NOTO_SANS};
  ${TEXT.M}
  @media screen and (min-width:${BREAKPOINT.MEDIUM}) {
    font-family: ${FONTFAMILY.ROBOTO};
    ${TEXT.L};
  }
`;
