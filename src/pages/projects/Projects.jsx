import React, { useEffect } from "react";

const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Anđela Tunjić";
  }, []);

  return <div>Projects</div>;
};

export default Projects;
