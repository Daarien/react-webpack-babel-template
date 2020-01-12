import { keyframes } from "styled-components";

export const spin = keyframes`
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(359deg);
  }
`;

export const configureClockwise = keyframes`
  0% {
    transform: rotate(0);
  }
  25% {
    transform: rotate(90deg);
  }
  50% {
    transform: rotate(180deg);
  }
  75% {
    transform: rotate(270deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const configureXclockwise = keyframes`
  0% {
    transform: rotate(45deg);
  }
  25% {
    transform: rotate(-45deg);
  }
  50% {
    transform: rotate(-135deg);
  }
  75% {
    transform: rotate(-225deg);
  }
  100% {
    transform: rotate(-315deg);
  }
`;

export const pulse = keyframes`
  from {
    opacity: 1;
    transform: scale(1);
  }
  to {
    opacity: .25;
    transform: scale(.75);
  }
`;
