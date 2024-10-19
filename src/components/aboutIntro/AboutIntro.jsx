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
            yada yadaada yada yada yada yaduja yada yada yada yada yada yada
            yaddvrgn ngiern g ada yada yjuyada yada yada yada yada yayada yada
            juz juz yada yada yada y juj da yada yada yada yada yada <br />
            <br />
            yadada yada yada yada yada yada yada yada yada yada yada yada yada
            ya yada yagniuh gnghgi3 gnorhngn da yajuyja yada yada ya jua yada
            yada yada yada yada yadjuj ada yada yada yada yada <br /> <br />
            yada yada yada yada yada yada yada yada yada yada yada yada yada
            yada yada yadgiwbhg bgiwbgi iwgibgi bi igi a yada yada yada yada
            yadaada ju yada yada yja yada yada yada yada yada yada
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
