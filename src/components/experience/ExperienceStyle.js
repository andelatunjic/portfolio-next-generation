import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const ExperienceWrapper = styled.div``;

export const ExperienceInner = styled.div`
  padding: 64px 0;
`;

export const TextWrapper = styled.div``;

export const Title = styled.h2`
  line-height: 38px;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  opacity: 0.5;
  font-size: 18px;
  line-height: 32px;
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;
  padding-top: 32px;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }
`;
