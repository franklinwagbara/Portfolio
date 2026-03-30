import "./Skills.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const frontendSkills = [
  { id: 1, skill: "React / Next.js", level: "Expert" },
  { id: 2, skill: "Angular", level: "Expert" },
  { id: 3, skill: "TypeScript", level: "Expert" },
  { id: 4, skill: "JavaScript (ES6+)", level: "Expert" },
  { id: 5, skill: "HTML5 / CSS3 / SCSS", level: "Expert" },
  { id: 6, skill: "Tailwind CSS", level: "Experienced" },
  { id: 7, skill: "Redux / Zustand", level: "Experienced" },
  { id: 8, skill: "Angular Material / MUI", level: "Experienced" },
];

const backendSkills = [
  { id: 1, skill: "C# / ASP.NET / .NET Core", level: "Expert" },
  { id: 2, skill: "Node.js / Express", level: "Expert" },
  { id: 3, skill: "Java / Spring Boot", level: "Experienced" },
  { id: 4, skill: "Python / Django", level: "Experienced" },
  { id: 5, skill: "REST API / GraphQL", level: "Expert" },
  { id: 6, skill: "C / C++", level: "Experienced" },
];

const databaseSkills = [
  { id: 1, skill: "MSSQL / MySQL", level: "Expert" },
  { id: 2, skill: "PostgreSQL", level: "Expert" },
  { id: 3, skill: "MongoDB", level: "Experienced" },
  { id: 4, skill: "Redis", level: "Experienced" },
  { id: 5, skill: "Firebase", level: "Experienced" },
];

const devopsSkills = [
  { id: 1, skill: "Docker / Kubernetes", level: "Experienced" },
  { id: 2, skill: "AWS / Azure / GCP", level: "Experienced" },
  { id: 3, skill: "Azure DevOps / CI-CD", level: "Experienced" },
  { id: 4, skill: "Git / GitHub / GitLab", level: "Expert" },
  { id: 5, skill: "TDD / Unit & Integration Testing", level: "Expert" },
  { id: 6, skill: "Scrum / Kanban / Jira", level: "Expert" },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h5 data-aos="fade-up">What I Work With</h5>
      <h2 data-aos="fade-up">Skills & Technologies</h2>
      <div className="skills">
        <div className="skill-group" data-aos="fade-up" data-aos-delay="0">
          <h3>Frontend</h3>
          {frontendSkills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="skill-group" data-aos="fade-up" data-aos-delay="100">
          <h3>Backend</h3>
          {backendSkills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="skill-group" data-aos="fade-up" data-aos-delay="200">
          <h3>Databases</h3>
          {databaseSkills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
        <div className="skill-group" data-aos="fade-up" data-aos-delay="300">
          <h3>DevOps & Practices</h3>
          {devopsSkills.map((skill) => (
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
        <h4>{skill.skill}</h4>
        <span className="skill__level">{skill.level}</span>
      </div>
    </div>
  );
};
