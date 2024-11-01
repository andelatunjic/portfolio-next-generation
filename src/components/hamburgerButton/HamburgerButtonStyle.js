import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const Wrapper = styled.div`
  display: inline-block;
  cursor: pointer;
  z-index: 100;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const Bar = styled.div`
  width: 36px;
  height: 3px;
  background-color: ${colors.text};
  margin: 8px 0;
  transition: 0.4s;
  border-radius: 4px;

  &:nth-child(1) {
    transform: ${({ open }) =>
      open ? "translate(0, 11px) rotate(-45deg)" : "none"};
  }
  &:nth-child(2) {
    opacity: ${({ open }) => (open ? "0" : "1")};
  }
  &:nth-child(3) {
    transform: ${({ open }) =>
      open ? "translate(0, -11px) rotate(45deg)" : "none"};
  }
`;
