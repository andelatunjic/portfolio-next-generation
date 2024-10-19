import React from "react";
import {
  FooterWrapper,
  FooterInner,
  TitleWrapper,
  Title,
  TextWrapper,
  Email,
  Copyright,
  LinksWrapper,
  Link,
} from "./FooterStyle";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterInner>
        <TitleWrapper>
          <Title>Nice to see you here!</Title>
        </TitleWrapper>
        <Email href="mailto:andtunjic@gmail.com">andtunjic@gmail.com</Email>
        <TextWrapper>
          <Copyright>Made with love © 2024 Anđela Tunjić</Copyright>
          <LinksWrapper>
            <Link target="blank" href="mailto:andtunjic@gmail.com">
              Email
            </Link>
            <Link
              target="blank"
              href="http://linkedin.com/in/an%C4%91ela-tunji%C4%87-a72012227"
            >
              LinkedIn
            </Link>
            <Link target="blank" href="https://github.com/andelatunjic">
              GitHub
            </Link>
          </LinksWrapper>
        </TextWrapper>
      </FooterInner>
    </FooterWrapper>
  );
};

export default Footer;
