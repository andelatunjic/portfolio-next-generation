import { styled } from "styled-components";
import { breakpoints } from "../../utils/theme";

export const ProjectsWrapper = styled.div``;

export const ProjectsInner = styled.div``;

export const TextWrapper = styled.div`
  max-width: 600px;
  margin-bottom: 24px;
`;

export const Title = styled.h2`
  line-height: 38px;
  margin-bottom: 24px;
`;

export const AccentText = styled.span`
  background: linear-gradient(90deg, #66cbef, #e8658f);
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
  padding: 32px 0;

  @media screen and (${breakpoints.tabletSmall}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (${breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
`;

export const Figure = styled.figure`
  width: 100%;
  height: 280px;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
