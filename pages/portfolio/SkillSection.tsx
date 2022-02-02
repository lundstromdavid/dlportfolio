import React from "react";
import styled from "styled-components";
import { PortfolioSection } from "./PortfolioSection";
import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
} from "react-icons/fa";
import { SiTypescript, SiPhp } from "react-icons/si";

const Skills = styled.ol`
  display: flex;
  flex-direction: column;
  gap: min(1vw, 20px);
`;

const Skill = styled.li`
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
      <Skills>
        <Skill>
          <FaReact size={iconSize} />
          <SkillName>React.js</SkillName>
          <SkillRating>9/10</SkillRating>
        </Skill>
        <Skill>
          <SiTypescript size={iconSize} />
          <SkillName>Typescript</SkillName>
          <SkillRating>9/10</SkillRating>
        </Skill>
        <Skill>
          <FaJs size={iconSize} />
          <SkillName>Javascript</SkillName>
          <SkillRating>9/10</SkillRating>
        </Skill>

        <Skill>
          <FaHtml5 size={iconSize} />
          <SkillName>HTML5</SkillName>
          <SkillRating>9/10</SkillRating>
        </Skill>
        <Skill>
          <FaCss3 size={iconSize} />
          <SkillName>CSS3</SkillName>
          <SkillRating>9/10</SkillRating>
        </Skill>
        <Skill>
          <FaNode size={iconSize} />
          <SkillName>NodeJs</SkillName>
          <SkillRating>8/10</SkillRating>
        </Skill>
        <Skill>
          <FaWordpress size={iconSize} />
          <SkillName>Wordpress</SkillName>
          <SkillRating>8/10</SkillRating>
        </Skill>
        <Skill>
          <SiPhp size={iconSize} />
          <SkillName>PHP</SkillName>
          <SkillRating>8/10</SkillRating>
        </Skill>
      </Skills>
    </PortfolioSection>
  );
};
