import React from "react";
import styled from "styled-components";
import { AppHeader } from "../../components/layout/AppHeader";
import { AppMain } from "../../components/layout/AppMain";
import { EducationSection } from "./EducationSection";
import { PortfolioTabs } from "./PortfolioTabs";

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

const StyledMain = styled(AppMain)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 1200px) {
    padding-top: 10%;
  }
`;

const PortfolioSection = styled.section`
  width: 100%;
`;

export const Portfolio = (props: Props) => {
  return (
    <>
      <AppHeader></AppHeader>
      <StyledMain>
        <PortfolioTabs></PortfolioTabs>
        <EducationSection></EducationSection>
      </StyledMain>
    </>
  );
};

export default Portfolio;
