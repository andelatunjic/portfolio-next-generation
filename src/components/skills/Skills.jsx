import React from "react";
import styled from "styled-components";
import { breakpoints } from "../../utils/theme";

const SkillsWrapper = styled.div`
  padding: 64px 0;
`;

const SkillsInner = styled.div``;

// Individual card
const Card = styled.div`
  text-align: center;
  padding: 20px;
  border-radius: 10px;
  color: white;
  border: 3px solid #ced3e1;
  box-shadow: 4px 4px 0 #ced3e1;
`;

// Title for each section
const CardTitle = styled.p`
  font-weight: 500;
  color: #1e1e1e;
  margin-bottom: 10px;
`;

// Text within the card
const CardText = styled.p`
  color: #1e1e1e;
  line-height: 3;
`;

const Grid = styled.div`
  display: grid;
  gap: 16px;

  @media screen and (${breakpoints.desktopSmall}) {
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }
`;

const Title = styled.h2`
  line-height: 38px;
  margin-bottom: 24px;
`;

const skillData = [
  {
    title: "FRONT END",
    categories: [
      { name: "Languages", skills: ["HTML", "CSS", "TypeScript"] },
      { name: "Frameworks", skills: ["Nextjs", "Angular"] },
      { name: "Libraries", skills: ["Lodash", "Redux", "RxJs"] },
      { name: "Monorepos", skills: ["NX", "Turborepo"] },
      { name: "Visualizations", skills: ["Three.js", "D3"] },
    ],
  },
  {
    title: "BACK END",
    categories: [
      { name: "Languages", skills: ["Node", "Python", "Go"] },
      { name: "Databases", skills: ["PostgreSQL", "MongoDB"] },
      { name: "Frameworks", skills: ["Express", "Nest"] },
      { name: "Scraping", skills: ["Scrapy"] },
      { name: "Other", skills: ["REST APIs", "GraphQL", "WASM"] },
    ],
  },
  {
    title: "OTHER",
    categories: [
      { name: "Cloud", skills: ["GCP", "AWS", "Terraform"] },
      { name: "Containers", skills: ["Docker", "Kubernetes"] },
      { name: "Testing", skills: ["Cypress", "Playwright"] },
      { name: "Monitoring", skills: ["Prometheus", "OpenTelemetry"] },
      { name: "Others", skills: ["Git", "GitHub", "Linux"] },
    ],
  },
];

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsInner>
        <Title>The tools I use to build amazing apps</Title>
        <Grid>
          {skillData.map((section, index) => (
            <Card key={index}>
              <CardTitle>{section.title}</CardTitle>S
              {section.categories.map((category, i) => (
                <div key={i}>
                  <CardText>
                    <strong>{category.name}</strong>
                  </CardText>
                  <CardText>{category.skills.join(", ")}</CardText>
                </div>
              ))}
            </Card>
          ))}
        </Grid>
      </SkillsInner>
    </SkillsWrapper>
  );
};

export default Skills;
