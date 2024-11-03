import { styled } from "styled-components";
import { breakpoints, colors } from "../../utils/theme";

export const ProjectsWrapper = styled.div``;

export const ProjectsInner = styled.div`
  margin: 32px 0;

  @media screen and (${breakpoints.tablet}) {
    margin: 64px 0;
  }
`;

export const TextWrapper = styled.div`
  max-width: 600px;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  margin-bottom: 32px;
  font-size: 24px;

  @media screen and (${breakpoints.tablet}) {
    font-size: 32px;
  }
`;

export const AccentText = styled.span`
  background: linear-gradient(
    90deg,
    ${colors.accentColor},
    ${colors.accentColorSecodary}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  font-size: 16px;
  line-height: 22px;
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
`;
