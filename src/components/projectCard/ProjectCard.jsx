import React from "react";
import {
  ProjectCardWrapper,
  ProjectCardFigure,
  ImageWrapper,
  Button,
  Icon,
  ImageOverlay,
  ProjectCardImage,
  ProjectCardTitle,
  ProjectCardSubtitle,
  ProjectCardDescription,
} from "./ProjectCardStyle";

import GalleryIcon from "../../assets/photo.png";

const ProjectCard = ({ title, role, description, img, gallery }) => {
  return (
    <ProjectCardWrapper>
      <ImageWrapper>
        <ProjectCardFigure>
          <ProjectCardImage alt={title} src={img} />
        </ProjectCardFigure>
        <ImageOverlay>
          <Button>
            <Icon src={GalleryIcon} />
            GALLERY
          </Button>
        </ImageOverlay>
      </ImageWrapper>
      <ProjectCardTitle>{title}</ProjectCardTitle>
      <ProjectCardSubtitle>{role}</ProjectCardSubtitle>
      <ProjectCardDescription>{description}</ProjectCardDescription>
    </ProjectCardWrapper>
  );
};

export default ProjectCard;
