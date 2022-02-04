import { SkillName, TSkill } from "../Types";
import {
  FaReact,
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaJs,
  FaNode,
} from "react-icons/fa";
import { SiTypescript, SiPhp } from "react-icons/si";

const iconSize = 40;

const Skills: TSkill[] = [
  { icon: <FaReact size={iconSize} />, name: SkillName.react, proficiency: 9 },
  {
    icon: <SiTypescript size={iconSize} />,
    name: SkillName.typescript,
    proficiency: 9,
  },
  {
    icon: <FaJs size={iconSize} />,
    name: SkillName.javascript,
    proficiency: 9,
  },
  { icon: <FaHtml5 size={iconSize} />, name: SkillName.html5, proficiency: 9 },
  { icon: <FaCss3 size={iconSize} />, name: SkillName.css3, proficiency: 9 },
  { icon: <FaNode size={iconSize} />, name: SkillName.node, proficiency: 8 },
  {
    icon: <FaWordpress size={iconSize} />,
    name: SkillName.wordpress,
    proficiency: 8,
  },
  {
    icon: <SiPhp size={iconSize} />,
    name: SkillName.php,
    proficiency: 8,
  },
];

export default Skills;
