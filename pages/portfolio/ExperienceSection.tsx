import React from "react";
import styled from "styled-components";
import Projects from "../../data/Projects";
import { PortfolioSection } from "./PortfolioSection";

interface Props {
  className?: string;
}

const ProjectList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ProjectItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;

  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const ProjectHeading = styled.h3``;
const ProjectDescription = styled.p``;
const UsedInProjectList = styled.ul`
  display: flex;
  gap: 1rem;
`;
const UsedInProjectItem = styled.li`
  padding: 0.3rem;
  font-weight: bold;
  background: #2f485880;
`;

export const ExperienceSection = (props: Props) => {
  return (
    <PortfolioSection
      title="Professional experience"
      titleColor="#41656c"
      background="#41656c60"
      index={0}
    >
      <ProjectList>
        {Projects.map((proj) => (
          <ProjectItem>
            <ProjectHeading>{proj.name}</ProjectHeading>
            <ProjectDescription>{proj.description}</ProjectDescription>
            <UsedInProjectList>
              {proj.skillsUsed.map((skill) => (
                <UsedInProjectItem>{skill}</UsedInProjectItem>
              ))}
            </UsedInProjectList>
          </ProjectItem>
        ))}
      </ProjectList>
    </PortfolioSection>
  );
};
