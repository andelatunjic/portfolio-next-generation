import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const ExperienceWrapper = styled.div``;

export const ExperienceInner = styled.div``;

export const TextWrapper = styled.div``;

export const Title = styled.h1`
  font-size: 22px;
  font-weight: 600;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  opacity: 0.5;
`;

export const Grid = styled.div`
  display: grid;
  gap: 16px;

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

export const ExperienceCardWrapper = styled.div``;

export const ExperienceCardFigure = styled.figure`
  width: 100%;
  height: 180px;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ExperienceCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ExperienceCardTitle = styled.h2``;

export const ExperienceCardSubtitle = styled.p``;

export const ExperienceCardDescription = styled.p``;
