import { SectionWrapper, SectionInner } from "./SectionStyle";

const Section = ({ children, background }) => {
  return (
    <SectionWrapper background={background}>
      <SectionInner>{children}</SectionInner>
    </SectionWrapper>
  );
};

export default Section;
