import React from "react";
import styled, { css } from "astroturf";
import clsx from "clsx";

const size = 200;

const Wrapper = styled.div`
  perspective: 700px;
  border: 1px solid;
  width: ${size}px;
  height: ${size}px;
  margin: 50px;
  animation: railing 20s linear infinite;
  @keyframes railing {
    0% {
      transform: translateX(0);
    }
    50% {
      transform: translateX(1000px);
    }
    100% {
      transform: translateX(0);
    }
  }
`;

const Cube = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation-name: spinner;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;

  @keyframes spinner {
    0% {
      transform: rotateY(0);
    }
    50% {
      transform: rotateY(180deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
`;

const styles = css`
  .side {
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;
    color: white;
    backface-visibility: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .front {
    background-color: maroon;
  }
  .back {
    background-color: darkcyan;
    transform: rotateY(180deg);
  }
`;

export default () => {
  return (
    <Wrapper>
      <Cube>
        <div className={clsx(styles.side, styles.front)}>
          <span>front side</span>
        </div>
        <div className={clsx(styles.side, styles.back)}>
          <span>back side</span>
        </div>
      </Cube>
    </Wrapper>
  );
};
