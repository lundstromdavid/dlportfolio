import React from "react";
import styled from "styled-components";
import { AppFooter } from "../../components/layout/AppFooter";
import { AppHeader } from "../../components/layout/AppHeader";
import { AppMain } from "../../components/layout/AppMain";
import { AppTemplate } from "../../components/layout/AppTemplate";
import { useScreenSize } from "../../hooks/MediaHooks";
import { EducationSection } from "./EducationSection";
import { ExperienceSection } from "./ExperienceSection";
import { SkillSection } from "./SkillSection";

export enum EPortfolioRoute {
  projects = "Projects",
  skills = "Skills",
  experience = "Experience",
  education = "Education",
}

export namespace PortfolioRoute {
  export function colorFor(route: EPortfolioRoute): string {
    switch (route) {
      case EPortfolioRoute.projects:
        return "var(--portfolio-projects)";
      case EPortfolioRoute.skills:
        return "var(--portfolio-skills)";
      case EPortfolioRoute.experience:
        return "var(--portfolio-experience)";
      case EPortfolioRoute.education:
        return "var(--portfolio-education)";
    }
  }
}

interface Props {
  className?: string;
}

const Template = styled(AppTemplate)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vw;
  padding: 2vw;

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: flex-start;
  }
`;

export const Portfolio = (props: Props) => {
  return (
    <Template>
      <ExperienceSection />
      <SkillSection />
      <EducationSection />
    </Template>
  );
};

export default Portfolio;
