import React from "react";
import ProjectCard from "../projectCard/ProjectCard";
import {
  ProjectsWrapper,
  ProjectsInner,
  TextWrapper,
  Title,
  AccentText,
  Description,
  Grid,
} from "./ProjectsIntroStyle";
import projectsData from "../../data/projects";

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
          {projectsData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              role={project.role}
              description={project.description}
              img={project.img}
              gallery={project.gallery}
              tags={project.tags}
            />
          ))}
        </Grid>
      </ProjectsInner>
    </ProjectsWrapper>
  );
};

export default ProjectsIntro;
