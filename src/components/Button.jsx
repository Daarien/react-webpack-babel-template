import React from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  border-color: transparent;
  color: white;
  background-color: darkkhaki;
  transition: 300ms;
  &:hover {
    cursor: pointer;
    background-color: darkmagenta;
  }
`;

export default function Button({ children }) {
  return (
    <div
      css={`
        display: flex;
        justify-content: center;
      `}
    >
      <StyledButton type="button">{children}</StyledButton>
    </div>
  );
}
