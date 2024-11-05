import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";
import { NavLink } from "react-router-dom";

export const HeaderWrapper = styled.header`
  background-color: ${colors.dark};
  color: ${colors.text};
`;

export const HeaderInner = styled.div`
  height: 100px;
  padding: 0 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    height: 120px;
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

export const Logo = styled.img`
  transition: opacity 0.4s ease-in-out;
  cursor: pointer;
  height: 60px;

  &:hover {
    opacity: 0.5;
  }
`;

export const Navigation = styled.nav`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: block;
  }
`;

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

export const ResumeLink = styled.a`
  list-style: none;
  font-size: 16px;
  padding: 32px 0;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  opacity: 0.5;

  &:hover {
    opacity: 1;
  }
`;
