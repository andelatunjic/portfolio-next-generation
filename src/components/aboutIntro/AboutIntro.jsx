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
            I recently graduated from the Carnegie Mellon University Master of
            Entertainment Technology program and joined Duolingo as a product
            designer. <br />
            <br />
            I am a highly motivated and enthusiastic Product Designer with a
            strong passion for 3D and AR/VR design. I enjoy combining my
            artistic background with my technical skills to create innovative
            and creative solutions. <br /> <br />I have experience developing
            visionary concepts, conducting user research, and establishing
            product frameworks through the use of animated and interactive
            prototypes. Possessing a positive attitude and a growth-oriented
            mindset, I am constantly seeking opportunities to expand my
            knowledge and skills as a designer.
          </Description>
        </TextWrapper>
        <ImageWrapper>
          <Image
            src="https://static.wixstatic.com/media/b0335f_9bea8a0e71b34da2910946d81ab0f3ca~mv2.png/v1/fill/w_471,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/leah%20character%20transparent%20copy.png"
            alt="leah character transparent copy.png"
            srcset="https://static.wixstatic.com/media/b0335f_9bea8a0e71b34da2910946d81ab0f3ca~mv2.png/v1/fill/w_471,h_471,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/leah%20character%20transparent%20copy.png 1x, https://static.wixstatic.com/media/b0335f_9bea8a0e71b34da2910946d81ab0f3ca~mv2.png/v1/fill/w_942,h_942,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/leah%20character%20transparent%20copy.png 2x"
            fetchpriority="high"
          />
        </ImageWrapper>
      </IntroInner>
    </IntroWrapper>
  );
};

export default AboutIntro;
