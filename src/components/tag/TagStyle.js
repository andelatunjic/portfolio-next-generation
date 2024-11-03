import styled from "styled-components";
import { breakpoints, colors } from "../../utils/theme";

export const TagWrapper = styled.div`
  background-color: ${colors.text};
  padding: 6px 12px;
  border-radius: 24px;
`;

export const TagText = styled.div`
  color: rgb(0, 0, 0, 0.8);
  font-size: 12px;
  font-weight: 500;
`;
