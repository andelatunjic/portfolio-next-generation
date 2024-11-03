import React, { useState } from "react";
import Gallery from "../gallery/Gallery"; // Import the Gallery component
import Tag from "../tag/Tag";
import {
  ProjectCardWrapper,
  ProjectCardFigure,
  ImageWrapper,
  Button,
  Icon,
  ImageOverlay,
  ProjectCardImage,
  ProjectCardTitle,
  ProjectCardDescription,
  Tags,
} from "./ProjectCardStyle";

import GalleryIcon from "../../assets/photo.png";

const ProjectCard = ({ title, role, description, img, gallery, tags }) => {
  const [isGalleryOpen, setGalleryOpen] = useState(false);

  const openGallery = () => {
    setGalleryOpen(true);
  };

  const closeGallery = () => {
    setGalleryOpen(false);
  };

  return (
    <>
      <ProjectCardWrapper>
        <ImageWrapper>
          <ProjectCardFigure>
            <ProjectCardImage alt={title} src={img} />
          </ProjectCardFigure>
          <ImageOverlay>
            <Button onClick={openGallery}>
              <Icon src={GalleryIcon} />
              GALLERY
            </Button>
          </ImageOverlay>
        </ImageWrapper>
        <ProjectCardTitle>{title}</ProjectCardTitle>
        <ProjectCardDescription>{description}</ProjectCardDescription>
        <Tags>
          {tags.map((tag, index) => (
            <Tag key={index} tag={tag} />
          ))}
        </Tags>
      </ProjectCardWrapper>

      {isGalleryOpen && <Gallery images={gallery} onClose={closeGallery} />}
    </>
  );
};

export default ProjectCard;
