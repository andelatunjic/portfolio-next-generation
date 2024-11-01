// HamburgerButton.jsx
import React from "react";
import { Wrapper, Bar } from "./HamburgerButtonStyle";

const HamburgerButton = ({ onClick, open }) => (
  <Wrapper onClick={onClick}>
    <Bar open={open} />
    <Bar open={open} />
    <Bar open={open} />
  </Wrapper>
);

export default HamburgerButton;
