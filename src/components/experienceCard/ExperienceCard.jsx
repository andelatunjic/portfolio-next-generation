import React from "react";
import {
  ExperienceCardWrapper,
  ExperienceCardFigure,
  ExperienceCardImage,
  ExperienceCardTitle,
  ExperienceCardSubtitle,
  ExperienceCardDescription,
} from "./ExperienceCardStyle";

const ExperienceCard = ({ title, role, description, img }) => {
  return (
    <ExperienceCardWrapper>
      <ExperienceCardFigure>
        <ExperienceCardImage alt={title} src={img} />
      </ExperienceCardFigure>
      <ExperienceCardTitle>{title}</ExperienceCardTitle>
      <ExperienceCardSubtitle>{role}</ExperienceCardSubtitle>
      <ExperienceCardDescription>{description}</ExperienceCardDescription>
    </ExperienceCardWrapper>
  );
};

export default ExperienceCard;
