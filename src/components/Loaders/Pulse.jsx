import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { spin } from "./animations";

const PulseContainer = styled.div``;

export default ({ color }) => {
  return <PulseContainer>{color}</PulseContainer>;
};
