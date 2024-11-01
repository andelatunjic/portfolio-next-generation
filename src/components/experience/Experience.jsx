import React from "react";
import Section from "../section/Section";
import ExperienceCard from "../experienceCard/ExperienceCard";
import {
  ExperienceWrapper,
  ExperienceInner,
  TextWrapper,
  Title,
  Subtitle,
  Grid,
} from "./ExperienceStyle";
import experienceData from "../../data/experience";

const Experience = () => {
  return (
    <Section background="secondary">
      <ExperienceWrapper>
        <ExperienceInner>
          <TextWrapper>
            <Title>Professional Experience</Title>
            <Subtitle>
              Some minigful text or description. Some more text and bla bla
              words
            </Subtitle>
          </TextWrapper>
          <Grid>
            {experienceData.map((experience, index) => (
              <ExperienceCard
                key={index}
                title={experience.title}
                role={experience.role}
                description={experience.description}
                img={experience.img}
              />
            ))}
          </Grid>
        </ExperienceInner>
      </ExperienceWrapper>
    </Section>
  );
};

export default Experience;
