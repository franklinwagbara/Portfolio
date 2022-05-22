import "./Skills.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { id: 1, skill: "HTML", level: "Experienced" },
  { id: 2, skill: "CSS", level: "Experienced" },
  { id: 3, skill: "Javascript", level: "Experienced" },
  { id: 4, skill: "React JS", level: "Experienced" },
  { id: 5, skill: "Bootstrap", level: "Experienced" },
  { id: 6, skill: "Material-UI", level: "Experienced" },
];

const backendSkills = [
  { id: 1, skill: "C#", level: "Experienced" },
  { id: 2, skill: "Python", level: "Intermediate" },
  { id: 3, skill: "Node JS", level: "Intermediate" },
  { id: 4, skill: "MySQL", level: "Experienced" },
  { id: 5, skill: "MongoDB", level: "Experienced" },
  { id: 6, skill: "C/C++", level: "Experienced" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h5>Some of my</h5>
      <h2>Skills</h2>
      <div className="skills">
        <div className="frontend">
          <h2>Frontend Development</h2>
          {frontendSkills &&
            frontendSkills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
        </div>
        <div className="backend">
          <h2>Backend Development</h2>
          {backendSkills &&
            backendSkills.map((skill) => (
              <Skill key={skill.id} skill={skill} />
            ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;

const Skill = ({ skill }) => {
  return (
    <div className="skill">
      <BsPatchCheckFill />
      <div>
        <h3>{skill.skill}</h3>
        <h5>{skill.level}</h5>
      </div>
    </div>
  );
};
