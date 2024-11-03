import { styled, keyframes } from "styled-components";
import { breakpoints, colors } from "../../utils/theme";

export const IntroWrapper = styled.div`
  padding: 32px 0;

  @media screen and (${breakpoints.tablet}) {
    padding: 64px 0;
  }
`;

export const IntroInner = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const Title = styled.h2`
  line-height: 38px;
  margin-bottom: 24px;
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

export const ImageWrapper = styled.div`
  display: none;

  @media screen and (${breakpoints.tablet}) {
    display: block;
    padding: 64px 0;
  }
`;

export const Image = styled.img`
  width: 420px;
  height: 364px;
  object-fit: cover;
`;
