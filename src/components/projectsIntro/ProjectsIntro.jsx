import React from "react";
import {
  ProjectsWrapper,
  ProjectsInner,
  TextWrapper,
  Title,
  AccentText,
  Description,
  Grid,
  Image,
  Figure,
} from "./ProjectsIntroStyle";
import Slideshow from "../slideshow/Slideshow";

import Culturio from "../../assets/cover-culturio.png";
import Inventory from "../../assets/cover-inventory.png";
import Portfolio from "../../assets/cover-portfolio.png";
import Speck from "../../assets/cover-speck.png";

const ProjectsIntro = () => {
  return (
    <ProjectsWrapper>
      <ProjectsInner>
        <TextWrapper>
          <Title>
            My passion, <AccentText>visual explorations</AccentText>
          </Title>
          <Description>
            As a multi-disciplinary designer, I enjoy exploring various ways to
            visualize my creativity. Hover over to play my daily UI work, 3D
            motion graphics, and graphic designs.
          </Description>
        </TextWrapper>
        <Grid>
          <Figure>
            <Image src={Portfolio} />
          </Figure>
          <Figure>
            <Image src={Speck} />
          </Figure>
          <Figure>
            <Image src={Culturio} />
          </Figure>
          <Figure>
            <Image src={Inventory} />
          </Figure>
        </Grid>
        <TextWrapper>
          <Title>
            My passion, <AccentText>visual explorations</AccentText>
          </Title>
          <Description>
            As a multi-disciplinary designer, I enjoy exploring various ways to
            visualize my creativity. Hover over to play my daily UI work, 3D
            motion graphics, and graphic designs.
          </Description>
        </TextWrapper>
        <Slideshow />
      </ProjectsInner>
    </ProjectsWrapper>
  );
};

export default ProjectsIntro;
