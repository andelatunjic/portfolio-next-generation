import { styled } from "styled-components";
import { breakpoints } from "../../utils/theme";

export const IntroWrapper = styled.div``;

export const IntroInner = styled.div``;

export const TextWrapper = styled.div`
  max-width: 500px;
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

  @media screen and (${breakpoints.desktopSmall}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;
