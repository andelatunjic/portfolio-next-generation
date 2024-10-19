import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 100; 
  background-color: white;
`;

export const HeaderInner = styled.div`
  height: 120px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 0 40px;
    max-width: 1030px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1380px;
  }
`;

export const Logo = styled.h1`
  font-size: 22px;
  font-weight: 600;
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;

export const Navigation = styled.nav``;

export const NavigationList = styled.ul`
  display: flex;
  gap: 4em;
`;

export const NaviagationItem = styled.li`
  list-style: none;
  font-size: 16px;
  padding: 32px 0;
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
