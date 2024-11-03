import { styled } from "styled-components";
import { breakpoints, colors } from "../../utils/theme";

export const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  gap: 12px;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 8px 8px;
  font-size: 12px;
  color: ${colors.text};
  background-color: rgb(0, 0, 0, 0.5);
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;
`;

export const Icon = styled.img`
  width: 18px;
`;

export const ProjectCardFigure = styled.figure`
  width: 100%;
  height: 280px;
  display: block;
  overflow: hidden;
  margin-bottom: 12px;
`;

export const ProjectCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ProjectCardTitle = styled.h3`
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 4px;
  color: ${colors.lightSecondary};
  transition: 0.3s ease-in-out;
`;

export const ProjectCardDescription = styled.p`
  line-height: 22px;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

export const ProjectCardWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ${Button} {
      background-color: rgba(0, 0, 0, 0.9);
    }

    ${ProjectCardTitle} {
      color: ${colors.accentColorSecodary};
    }
  }
`;
