import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";
import { NavLink } from "react-router-dom";

export const MenuWrapper = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background-color: ${colors.darkSecondary};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.4s ease;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const MenuInner = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const NaviagationItem = styled.li`
  list-style: none;
  padding: 15px 0;
  font-size: 24px;
  cursor: pointer;

  &:hover {
    color: #ddd;
  }
`;

export const NaviagationLink = styled(NavLink)`
  transition: opacity 0.3s ease-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }

  &.active {
    opacity: 1;
  }
`;

export const ResumeLink = styled.a`
  list-style: none;
  font-size: 24px;
  padding: 15px 0;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
