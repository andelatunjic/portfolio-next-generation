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

// assets
import Alex from "../../assets/alex.jpg";
import Amazona from "../../assets/amazona.jpg";
import Roz from "../../assets/roz.jpg";
import Kakadu from "../../assets/kakadu.jpg";
import Nimfa from "../../assets/nimfa.jpg";
import Nez from "../../assets/nez.jpg";
import Lory from "../../assets/lory.jpg";
import Rozen from "../../assets/rozen.jpg";

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
            <Image src={Alex} />
          </Figure>
          <Figure>
            <Image src={Amazona} />
          </Figure>
          <Figure>
            <Image src={Rozen} />
          </Figure>
          <Figure>
            <Image src={Roz} />
          </Figure>
          <Figure>
            <Image src={Kakadu} />
          </Figure>
          <Figure>
            <Image src={Nimfa} />
          </Figure>
          <Figure>
            <Image src={Nez} />
          </Figure>
          <Figure>
            <Image src={Lory} />
          </Figure>
        </Grid>
      </ProjectsInner>
    </ProjectsWrapper>
  );
};

export default ProjectsIntro;
