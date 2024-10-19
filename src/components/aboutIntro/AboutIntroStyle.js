import { styled } from "styled-components";

export const IntroWrapper = styled.div``;

export const IntroInner = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
`;

export const TextWrapper = styled.div``;

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

export const ImageWrapper = styled.div``;

export const Image = styled.img`
  width: 431px;
  height: 431px;
  object-fit: cover;
`;
