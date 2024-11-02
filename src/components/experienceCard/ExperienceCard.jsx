import React from "react";
import {
  ExperienceCardWrapper,
  ImageWrapper,
  ExperienceCardFigure,
  ExperienceCardImage,
  TextWrapper,
  ExperienceCardTitle,
  ExperienceCardSubtitle,
  ExperienceCardDescription,
} from "./ExperienceCardStyle";

const ExperienceCard = ({ title, role, description, img }) => {
  return (
    <ExperienceCardWrapper>
      <ImageWrapper>
        <ExperienceCardFigure>
          <ExperienceCardImage alt={title} src={img} />
        </ExperienceCardFigure>
      </ImageWrapper>
      <TextWrapper>
        <ExperienceCardTitle>{title}</ExperienceCardTitle>
        <ExperienceCardSubtitle>{role}</ExperienceCardSubtitle>
        <ExperienceCardDescription>{description}</ExperienceCardDescription>
      </TextWrapper>
    </ExperienceCardWrapper>
  );
};

export default ExperienceCard;
