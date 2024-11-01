import styled from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const SectionWrapper = styled.div`
  background-color: ${colors.dark};
  color: ${colors.text};

  ${(props) =>
    props.background == "secondary" &&
    `
    background-color: ${colors.darkSecondary};
  `}
`;

export const SectionInner = styled.div`
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
