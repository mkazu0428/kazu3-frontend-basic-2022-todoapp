import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";

const Input = ({ defaultValue = "", onEditComplete }) => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = defaultValue;
    inputRef.current.focus();
    inputRef.current.addEventListener("focusout", () => {
      onEditComplete(inputRef.current.value);
    });
    inputRef.current.addEventListener("keydown", (e) => {
      if (e.keyCode === 13) {
        inputRef.current.removeEventListener("focusout", () => {
          onEditComplete(inputRef.current.value);
        });
        onEditComplete(inputRef.current.value);
      }
    });
  }, []);

  return <InputTag ref={inputRef} type="text" />;
};

export default Input;

const InputTag = styled.input`
  width: 100%;
  height: 20px;
  border: none;
  border-radius: 2px;
  background-color: ${COLOR.BLACK};
  ${TEXT.S}
  color:white;
  font-family: ${FONTFAMILY.NOTO_SANS};

  &:focus {
    outline: 0;
    caret-color: ${COLOR.LIGHT_GRAY};
  }
`;
