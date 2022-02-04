import React from "react";

export enum SkillName {
  react = "React.js",
  reactNative = "React Native",
  typescript = "Typescript",
  javascript = "Javascript",
  html5 = "HTML5",
  css3 = "CSS3",
  node = "Node.js",
  wordpress = "Wordpress",
  php = "PHP",
  framerMotion = "Framer Motion",
  styledComponents = "Styled-Components",
  dotNet = ".NET",
  cSharp = "C#",
  garp = "Garp affärsystem (ERP)",
  netsEasy = "Nets Easy",
  joomla = "Joomla!",
  sql = "SQL",
  rest = "Rest",
}

export type TSkill = {
  icon: React.ReactChild;
  name: SkillName;
  proficiency: number;
};

export type TProject = {
  name: string;
  description: string;
  skillsUsed: SkillName[];
};
