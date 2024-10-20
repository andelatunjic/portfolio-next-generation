import { styled } from "styled-components";
import { colors, breakpoints } from "../../utils/theme";

export const HobbyWrapper = styled.div``;

export const HobbyInner = styled.div``;

export const Title = styled.h3`
  font-weight: 500;
  margin-bottom: 14px;
`;

export const Text = styled.p`
  line-height: 22px;
`;

export const ImageGridRow = styled.div`
  margin-bottom: 64px;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 4px;
`;

export const ImageGridColumn = styled.div`
  -ms-flex: 25%;
  flex: 25%;
  padding: 0 4px;
`;

export const Image = styled.img`
  margin-top: 8px;
  vertical-align: middle;
  width: 100%;
`;
