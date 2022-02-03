import React from "react";
import styled from "styled-components";
import Skills from "../../data/Skill";
import { PortfolioSection } from "./PortfolioSection";

const SkillList = styled.ol`
  display: flex;
  flex-direction: column;
  gap: min(1vw, 20px);
`;

const SkillItem = styled.li`
  display: flex;
  gap: min(3vw, 30px);
  align-items: center;
`;

const SkillName = styled.h3``;
const SkillRating = styled.span`
  font-style: italic;
  letter-spacing: 2px;
  font-size: min(6vw, 1.5rem);
  margin-left: auto;
`;

interface Props {
  className?: string;
}

export const SkillSection = (props: Props) => {
  const iconSize = 40;

  return (
    <PortfolioSection
      title="Skills"
      titleColor="#c01450"
      background="#c0145060"
      index={1}
    >
      <SkillList>
        {Skills.map((skill) => (
          <SkillItem>
            {skill.icon}
            <SkillName>{skill.name}</SkillName>
            <SkillRating>{skill.proficiency}/10</SkillRating>
          </SkillItem>
        ))}
      </SkillList>
    </PortfolioSection>
  );
};
