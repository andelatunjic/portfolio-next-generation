import React from "react";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Navigation,
  NavigationList,
  NaviagationItem,
  NaviagationLink,
} from "./HeaderStyle";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo>Anđela Tunjić</Logo>
        <Navigation>
          <NavigationList>
            <NaviagationItem>
              <NaviagationLink to="/">Work</NaviagationLink>
            </NaviagationItem>
            <NaviagationItem>
              <NaviagationLink to="/play">Play</NaviagationLink>
            </NaviagationItem>
            <NaviagationItem>
              <NaviagationLink to="/about">About</NaviagationLink>
            </NaviagationItem>
            <NaviagationItem>
              <NaviagationLink to="/resume">Resume</NaviagationLink>
            </NaviagationItem>
          </NavigationList>
        </Navigation>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
