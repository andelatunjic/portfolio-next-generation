import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const IntroductionWrapper = styled.div`
  background-color: ${colors.dark};
  color: ${colors.text};
  position: relative;
  overflow: hidden;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const IntroductionInner = styled.div`
  position: relative;
  z-index: 1;
  padding: 0 24px;

  @media screen and (${breakpoints.tablet}) {
    padding: 0 70px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    padding: 0 40px;
    max-width: 1024px;
    margin: 0 auto;
  }

  @media screen and (${breakpoints.desktop}) {
    max-width: 1024px;
  }
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: black;
  opacity: 0.4;
  z-index: 0; /* Places it behind IntroductionInner */
`;

export const StarCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const IntroductionTitle = styled.h2`
  font-size: 38px;

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 58px;
  }
`;

export const AccentText = styled.span`
  background: linear-gradient(90deg, #66cbef, #e8658f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const IntroductionSubtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: ${colors.text};
`;

export const LinkWrapper = styled.span`
  color: ${colors.lightSecondary};
  font-weight: 500;
`;
