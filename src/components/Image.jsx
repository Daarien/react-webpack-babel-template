import React from "react";
import { css, keyframes } from "styled-components";
import Logo from "../assets/img/logo.svg";

const whirling = keyframes`
  from {
    transform: rotate3d(0);
  }
  to {
    transform: rotate3d(1,1,1,360deg);
  }
`;

const styles = css`
  width: 100px;
  height: 100px;
  animation: ${whirling} 3s linear infinite;
`;

export default function AnimatedImage() {
  return (
    <div
      css={`
        perspective: 100px;
      `}
    >
      <img src={Logo} alt="img" css={styles} />
    </div>
  );
}
