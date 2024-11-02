import { styled } from "styled-components";
import { breakpoints, colors } from "../../utils/theme";

export const FooterWrapper = styled.div`
  background-color: ${colors.darker};
`;

export const FooterInner = styled.div`
  color: #9f9d9c;
  padding: 32px 24px 12px 24px;
  text-align: center;

  @media screen and (${breakpoints.tablet}) {
    padding: 64px 70px 12px 70px;
    text-align: left;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 64px 40px 12px 40px;
    max-width: 1024px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1024px;
  }
`;

export const TitleWrapper = styled.div`
  margin-bottom: 32px;

  @media screen and (${breakpoints.tablet}) {
    margin-bottom: 52px;
  }
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
  justify-content: center;
  align-items: center;

  @media screen and (${breakpoints.tablet}) {
    justify-content: space-between;
  }
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

export const LinksDesktop = styled.div`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: flex;
    gap: 48px;
  }
`;

export const LinksMobile = styled.div`
  display: flex;
  gap: 48px;
  margin-bottom: 24px;
  justify-content: center;

  @media screen and (${breakpoints.tablet}) {
    display: none;
  }
`;

export const Link = styled.a`
  font-size: 14px;
  transition: color 0.3s ease-out;

  &:hover {
    color: white;
  }
`;
