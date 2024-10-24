import { styled } from "styled-components";

export const ProjectCardWrapper = styled.div``;

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
  color: #cdd4df;
  background-color: rgb(0, 0, 0, 0.6);
  border: none;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: rgb(0, 0, 0, 0.9);
  }
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
  font-weight: 400;
`;

export const ProjectCardSubtitle = styled.p`
  opacity: 0.5;
  line-height: 32px;
`;

export const ProjectCardDescription = styled.p`
  line-height: 22px;
  margin-bottom: 4px;
`;

export const Tags = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;
