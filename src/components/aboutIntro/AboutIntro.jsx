import React from "react";
import TechCard from "../techCard/TechCard";
import {
  IntroWrapper,
  IntroInner,
  TextWrapper,
  Title,
  AccentText,
  Description,
  Grid,
} from "./AboutIntroStyle";

const AboutIntro = () => {
  return (
    <IntroWrapper>
      <IntroInner>
        <TextWrapper>
          <Title>
            Get to know more <AccentText>about Anđela</AccentText>
          </Title>
          <Description>
            I'm a senior software engineer who excels at building digital
            experiences. Currently, I'm an engineer at focusing on building
            scalable and highly performant digital products.
          </Description>
        </TextWrapper>
        <Grid>
          <TechCard />
          <TechCard />
          <TechCard />
        </Grid>
      </IntroInner>
    </IntroWrapper>
  );
};

export default AboutIntro;
