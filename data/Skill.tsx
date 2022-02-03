import { TSkill } from "../Types";
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
  { icon: <FaReact size={iconSize} />, name: "React.js", proficiency: 9 },
  {
    icon: <SiTypescript size={iconSize} />,
    name: "Typescript",
    proficiency: 9,
  },
  { icon: <FaJs size={iconSize} />, name: "Javascript", proficiency: 9 },
  { icon: <FaHtml5 size={iconSize} />, name: "HTML5", proficiency: 9 },
  { icon: <FaCss3 size={iconSize} />, name: "CSS3", proficiency: 9 },
  { icon: <FaNode size={iconSize} />, name: "Node.js", proficiency: 8 },
  { icon: <FaWordpress size={iconSize} />, name: "Wordpress", proficiency: 8 },
  { icon: <SiPhp size={iconSize} />, name: "PHP", proficiency: 8 },
];

export default Skills;
