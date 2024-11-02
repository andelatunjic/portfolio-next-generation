import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const ExperienceCardWrapper = styled.div``;

export const ImageWrapper = styled.div`
  background-color: ${colors.text};
`;

export const ExperienceCardFigure = styled.figure`
  width: 100%;
  height: 220px;
  overflow: hidden;
`;

export const ExperienceCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TextWrapper = styled.div`
  margin: 12px;
`;

export const ExperienceCardTitle = styled.h3`
  font-weight: 400;
`;

export const ExperienceCardSubtitle = styled.p`
  opacity: 0.5;
  line-height: 32px;
`;

export const ExperienceCardDescription = styled.p`
  line-height: 22px;
`;
