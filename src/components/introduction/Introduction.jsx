import React from "react";
import Section from "../section/Section";
import {
  IntroductionWrapper,
  IntroductionInner,
  TextWrapper,
  LinkWrapper,
  IntroductionTitle,
  AccentText,
  IntroductionSubtitle,
  ImageWrapper,
  Image,
} from "./IntroductionStyle";

const Introduction = () => {
  return (
    <Section>
      <IntroductionWrapper>
        <IntroductionInner>
          <TextWrapper>
            <IntroductionTitle>
              Hi, I'm Anđela, a <AccentText>Frontend Developer</AccentText> with
              a passion for UI/UX design
            </IntroductionTitle>
            <div>
              <IntroductionSubtitle>
                Frontend developer at <LinkWrapper>SICK Mobilisis↗</LinkWrapper>
              </IntroductionSubtitle>
              <IntroductionSubtitle>
                Academy Student at <LinkWrapper>Speck↗</LinkWrapper> and{" "}
                <LinkWrapper>Span↗</LinkWrapper>
              </IntroductionSubtitle>
              <IntroductionSubtitle>
                Graduated from <LinkWrapper>FOI↗</LinkWrapper>
              </IntroductionSubtitle>
            </div>
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
        </IntroductionInner>
      </IntroductionWrapper>
    </Section>
  );
};

export default Introduction;
