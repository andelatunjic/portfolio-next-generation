import React, { useEffect } from "react";
import AboutIntro from "../../components/aboutIntro/AboutIntro";
import Highlights from "../../components/highlights/Highlights";
import Section from "../../components/section/Section";

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
        <Highlights />
      </Section>
    </>
  );
};

export default About;
