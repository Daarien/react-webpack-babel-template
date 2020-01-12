import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { configureClockwise, configureXclockwise } from "./animations";

const SpinnerBox = styled.div`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

const FrontBox = styled.div`
  width: 115px;
  height: 115px;
  padding: 3px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ffab91;
  animation: ${configureClockwise} 3s ease-in-out 0s infinite alternate;
`;
const BackBox = styled.div`
  width: 115px;
  height: 115px;
  padding: 3px;
  left: -115px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(63, 249, 220);
  transform: rotate(45deg);
  animation: ${configureXclockwise} 3s ease-in-out 0s infinite alternate;
`;
const Core = styled.div`
  width: 100%;
  height: 100%;
  background-color: #37474f;
`;

export default ({
  colors = { front: "#00e5e5", back: "#ffab91" },
  size = 50
}) => {
  return (
    <SpinnerBox>
      <FrontBox color={colors.front}>
        <Core />
      </FrontBox>
      <BackBox color={colors.back}>
        <Core />
      </BackBox>
    </SpinnerBox>
  );
};
