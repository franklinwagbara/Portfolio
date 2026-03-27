import "./Skills.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { id: 1, skill: "React / Next.js", level: "Expert" },
  { id: 2, skill: "TypeScript", level: "Expert" },
  { id: 3, skill: "JavaScript (ES6+)", level: "Expert" },
  { id: 4, skill: "HTML5 / CSS3 / SCSS", level: "Expert" },
  { id: 5, skill: "Tailwind CSS", level: "Experienced" },
  { id: 6, skill: "Redux / Zustand", level: "Experienced" },
];

const backendSkills = [
  { id: 1, skill: "C# / .NET", level: "Expert" },
  { id: 2, skill: "Node.js / Express", level: "Experienced" },
  { id: 3, skill: "Java / Spring Boot", level: "Experienced" },
  { id: 4, skill: "SQL (MySQL / PostgreSQL)", level: "Expert" },
  { id: 5, skill: "MongoDB", level: "Experienced" },
  { id: 6, skill: "REST API / GraphQL", level: "Experienced" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h5 data-aos="fade-up">What I Work With</h5>
      <h2 data-aos="fade-up">Skills</h2>
      <div className="skills">
        <div className="frontend" data-aos="fade-right">
          <h2>Frontend Development</h2>
          {frontendSkills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="backend" data-aos="fade-left">
          <h2>Backend Development</h2>
          {backendSkills.map((skill) => (
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
