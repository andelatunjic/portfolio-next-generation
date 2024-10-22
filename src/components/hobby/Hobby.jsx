import React from "react";
import {
  HobbyWrapper,
  HobbyInner,
  Title,
  Text,
  ImageGridColumn,
  ImageGridRow,
  Image,
} from "./HobbyStyle";

// Components
import Badges from "../../assets/images/badges.jpg";
import Contact from "../../assets/images/contact.jpg";
import Experience from "../../assets/images/experience.jpg";
import Leading from "../../assets/images/leading.jpg";
import Skill from "../../assets/images/skill-card.jpg";
import Project from "../../assets/images/project-portfolio.jpg";
import Graphs from "../../assets/images/graphs.jpg";
import Sushi from "../../assets/images/sushi.jpg";

const Hobby = () => {
  return (
    <HobbyWrapper>
      <HobbyInner>
        <Title>📷 Aside from programming...</Title>
        <ImageGridRow>
          <ImageGridColumn>
            <Image src={Sushi} />
            <Image src={Experience} />
            <Image src={Contact} />
          </ImageGridColumn>
          <ImageGridColumn>
            <Image src={Leading} />
            <Image src={Badges} />
            <Image src={Graphs} />
          </ImageGridColumn>
          <ImageGridColumn>
            <Image src={Project} />
            <Image src={Skill} />
          </ImageGridColumn>
        </ImageGridRow>
      </HobbyInner>
    </HobbyWrapper>
  );
};

export default Hobby;
