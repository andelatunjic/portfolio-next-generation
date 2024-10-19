import { breakpoints, colors, fonts } from "./theme";

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

export const Title = styled.h1`
  font-size: 24px;
  letter-spacing: 1px;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    font-size: 32px;
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 40px;
    margin-bottom: 8px;
    text-align: left;
  }

  @media screen and (${breakpoints.desktop}) {
    font-size: 48px;
  }
`;

export const Subtitle = styled.div`
  color: ${colors.text};
  font-size: 16px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 20px;
    margin-bottom: 12px;
    text-align: left;
  }
`;

export const Text = styled.p`
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 1.5;
  margin-bottom: 16px;
  text-align: center;

  @media screen and (${breakpoints.tabletSmall}) {
    margin-bottom: 14px;
  }

  @media screen and (${breakpoints.desktopSmall}) {
    font-size: 16px;
    margin-bottom: 12px;
    text-align: left;
  }
`;
