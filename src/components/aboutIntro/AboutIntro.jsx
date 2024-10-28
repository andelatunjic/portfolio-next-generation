import React from "react";
import {
  IntroWrapper,
  IntroInner,
  TextWrapper,
  Title,
  AccentText,
  Description,
  Image,
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
            scalable and highly performant digital products. <br />
            <br />
            I'm a senior software engineer who excels at building digital
            experiences. Currently, I'm an engineer at focusing on building
            scalable and highly performant digital products. <br />
            <br />
          </Description>
        </TextWrapper>
        <Image src="https://miro.medium.com/v2/resize:fit:1400/1*qdAW1TjCN57h1lbuuzvchg.gif"></Image>
      </IntroInner>
    </IntroWrapper>
  );
};

export default AboutIntro;
