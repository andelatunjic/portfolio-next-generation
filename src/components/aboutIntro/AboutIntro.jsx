import React from "react";
import {
  IntroWrapper,
  IntroInner,
  TextWrapper,
  Title,
  AccentText,
  Description,
  ImageWrapper,
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
        <ImageWrapper>
          <Image
            src="https://media.tenor.com/IF2JdxzmyN4AAAAi/coding-girl.gif"
            alt="workstation.2022-09-17 16_44_25.gif"
            fetchpriority="low"
            loading="lazy"
            decoding="async"
          />
        </ImageWrapper>
      </IntroInner>
    </IntroWrapper>
  );
};

export default AboutIntro;
