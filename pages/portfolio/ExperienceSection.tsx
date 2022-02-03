import React from "react";
import styled from "styled-components";
import { PortfolioSection } from "./PortfolioSection";

interface Props {
  className?: string;
}

const Projects = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Project = styled.li`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

const ProjectHeading = styled.h3``;
const ProjectSubHeading = styled.h4``;
const ProjectDescription = styled.p``;

export const ExperienceSection = (props: Props) => {
  return (
    <PortfolioSection
      title="Professional experience"
      titleColor="#41656c"
      background="#41656c60"
      index={0}
    >
      <Projects>
        <Project>
          <ProjectHeading>Sales tracking website</ProjectHeading>
          <ProjectSubHeading>Written in React.js</ProjectSubHeading>
          <ProjectDescription>
            Website for client with internal sales-contest that tracks sales for
            each employee, overall and for each quarter in the year. Displayed
            with impressive animations.
          </ProjectDescription>
        </Project>
      </Projects>
    </PortfolioSection>
  );
};
