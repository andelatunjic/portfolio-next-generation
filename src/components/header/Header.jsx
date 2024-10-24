import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderInner,
  Logo,
  Navigation,
  NavigationList,
  NaviagationItem,
  NaviagationLink,
  ResumeLink,
} from "./HeaderStyle";

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    if (window.location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } else {
      navigate("/", { replace: true });
    }
  };

  const handleResumeClick = () => {
    window.open("../../assets/placeholder.pdf", "_blank");
  };

  return (
    <HeaderWrapper>
      <HeaderInner>
        <Logo onClick={handleLogoClick}>Anđela Tunjić</Logo>
        <Navigation>
          <NavigationList>
            <NaviagationItem>
              <NaviagationLink to="/">Work</NaviagationLink>
            </NaviagationItem>
            <NaviagationItem>
              <NaviagationLink to="/projects">Projects</NaviagationLink>
            </NaviagationItem>
            <NaviagationItem>
              <NaviagationLink to="/about">About</NaviagationLink>
            </NaviagationItem>
            <ResumeLink href="/src/assets/placeholder.pdf" target="_blank">
              Resume
            </ResumeLink>
          </NavigationList>
        </Navigation>
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
