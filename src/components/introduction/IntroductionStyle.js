import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const IntroductionWrapper = styled.div``;

export const IntroductionInner = styled.div`
  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const IntroductionTitle = styled.h2`
  line-height: 38px;
`;

export const AccentText = styled.span`
  background: linear-gradient(90deg, #66cbef, #e8658f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;

export const IntroductionSubtitle = styled.p`
  font-size: 18px;
  line-height: 32px;
  color: #949494;
`;

export const LinkWrapper = styled.span`
  color: #000;
  font-weight: 400;
`;

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 420px;
  height: 364px;
  object-fit: cover;
`;
