import React, { useEffect } from "react";
import AboutIntro from "../../components/aboutIntro/AboutIntro";
import Section from "../../components/section/Section";
import Skills from "../../components/skills/Skills";

const About = () => {
  useEffect(() => {
    document.title = "About | Anđela Tunjić";
  }, []);

  return (
    <>
      <Section>
        <AboutIntro />
      </Section>
      <Section>
        <Skills />
      </Section>
    </>
  );
};

export default About;
