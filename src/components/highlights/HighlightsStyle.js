import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const HighWrapper = styled.div``;

export const HighInner = styled.div``;

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

export const HighCard = styled.div``;

export const Title = styled.h3``;

export const Item = styled.p``;
