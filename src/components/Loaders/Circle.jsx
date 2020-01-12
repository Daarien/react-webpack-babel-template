import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { spin } from "./animations";

const c1 = "mediumseagreen";

const SpinningCircle = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  padding: ${({ size }) => size * 0.03}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${({ color }) => color};
  background: ${({ color }) =>
    `linear-gradient(0deg, ${rgba(color, 0.2)} 30%, ${rgba(color, 1)} 100%)`};
  animation: ${spin} 1s linear 0s infinite;
  .core {
    width: 100%;
    height: 100%;
    background-color: white;
    border-radius: 50%;
  }
`;

export default ({ color = "#00e5e5", size = 50 }) => {
  return (
    <SpinningCircle color={color} size={size}>
      <div className="core" />
    </SpinningCircle>
  );
};
