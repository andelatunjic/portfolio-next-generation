import React from "react";
import Section from "../section/Section";
import {
  ExperienceWrapper,
  ExperienceInner,
  TextWrapper,
  Title,
  Subtitle,
  Grid,
  ExperienceCardWrapper,
  ExperienceCardFigure,
  ExperienceCardImage,
  ExperienceCardTitle,
  ExperienceCardSubtitle,
  ExperienceCardDescription,
} from "./ExperienceStyle";
import ProjectImage from "../../assets/project.png";

const Experience = () => {
  return (
    <Section background="secondary">
      <ExperienceWrapper>
        <ExperienceInner>
          <TextWrapper>
            <Title>Professional Experience</Title>
            <Subtitle>Password available upon request</Subtitle>
          </TextWrapper>
          <Grid>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 2</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 3</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 3</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 3</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 3</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 3</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
            <ExperienceCardWrapper>
              <ExperienceCardFigure>
                <ExperienceCardImage src={ProjectImage} />
              </ExperienceCardFigure>
              <ExperienceCardTitle>Duolingo 3</ExperienceCardTitle>
              <ExperienceCardSubtitle>Product Designer</ExperienceCardSubtitle>
              <ExperienceCardDescription>
                Launched multiple designs that enhanced Super Duolingo's
                subscription metrics.
              </ExperienceCardDescription>
            </ExperienceCardWrapper>
          </Grid>
        </ExperienceInner>
      </ExperienceWrapper>
    </Section>
  );
};

export default Experience;
