import { SkillName, TProject } from "../Types";

const Projects: TProject[] = [
  {
    name: "Resource Bank",
    description:
      "Resource Bank for an organisation that supports login with different permission-levels, uploading and browsing of files, etc...",
    skillsUsed: [SkillName.wordpress, SkillName.sql],
  },
  {
    name: "React Native app for above Resource Bank",
    description:
      "React Native app communicating with a custom-built Wordpress REST-api for the Wordpress resource bank earlier mentioned.",
    skillsUsed: [SkillName.reactNative, SkillName.rest],
  },
  {
    name: "Sales tracking website",
    description:
      "Animation-heavy website for client with an internal sales-contest within the company.",
    skillsUsed: [
      SkillName.react,
      SkillName.styledComponents,
      SkillName.framerMotion,
    ],
  },
  {
    name: ".NET 6 project communicating with Garp ERP system",
    description:
      "A migration from a .NET project written in Visual Basic into a .NET 6-project written in C#.",
    skillsUsed: [SkillName.dotNet, SkillName.cSharp, SkillName.garp],
  },
  {
    name: "Nets Easy integration for two different clients",
    description:
      "Integrated Nets Easy payment process for two different webshops",
    skillsUsed: [SkillName.wordpress, SkillName.joomla, SkillName.netsEasy],
  },
];

export default Projects;
