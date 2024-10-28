import React, { useEffect } from "react";
import AboutIntro from "../../components/aboutIntro/AboutIntro";
import Section from "../../components/section/Section";
import Skills from "../../components/skills/Skills";
import Certificates from "../../components/certificates/Certificates";

const About = () => {
  useEffect(() => {
    document.title = "About | Anđela Tunjić";
  }, []);

  return (
    <>
      <Section>
        <AboutIntro />
      </Section>
      <Section background="secondary">
        <Skills />
      </Section>
      <Section>
        <Certificates />
      </Section>
    </>
  );
};

export default About;
