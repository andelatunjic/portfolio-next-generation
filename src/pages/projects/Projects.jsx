import React, { useEffect } from "react";
import Section from "../../components/section/Section";
import ProjectsIntro from "../../components/projectsIntro/ProjectsIntro";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Anđela Tunjić";
  }, []);

  return (
    <Section>
      <ProjectsIntro />
    </Section>
  );
};

export default Projects;
