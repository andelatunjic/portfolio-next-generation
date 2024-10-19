import { styled } from "styled-components";
import { breakpoints } from "../utils/theme";

export const FooterWrapper = styled.div`
  background-color: #1e1e1e;
`;

export const FooterInner = styled.div`
  color: #9f9d9c;
  padding: 58px 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 58px 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 58px 40px;
    max-width: 1024px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1024px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 52px;
`;

export const Title = styled.span`
  font-size: 1.5em;
  font-weight: 600;
  background: linear-gradient(90deg, #66cbef, #e8658f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Email = styled.a`
  transition: color 0.3s ease-out;

  &:hover {
    color: white;
  }
`;

export const Copyright = styled.p`
  line-height: 28px;
  font-size: 12px;
`;

export const LinksWrapper = styled.div`
  display: flex;
  gap: 48px;
`;

export const Link = styled.a`
  font-size: 14px;
  transition: color 0.3s ease-out;

  &:hover {
    color: white;
  }
`;
