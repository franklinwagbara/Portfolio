import "./Skills.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const skillGroups = [
  {
    id: 1,
    title: "AI / ML Engineering",
    skills: [
      { id: 1, skill: "LLM Integration", level: "Experienced" },
      { id: 2, skill: "LLM Training & Eval", level: "Experienced" },
      { id: 3, skill: "Prompt Engineering", level: "Experienced" },
      { id: 4, skill: "RAG & Vector Search", level: "Experienced" },
      { id: 5, skill: "Azure OpenAI", level: "Experienced" },
      { id: 6, skill: "AI Agents & Tooling", level: "Experienced" },
    ],
  },
  {
    id: 2,
    title: "Backend & Architecture",
    skills: [
      { id: 1, skill: "Node.js / Express", level: "Experienced" },
      { id: 2, skill: "TypeScript", level: "Experienced" },
      { id: 3, skill: "C# / .NET Core", level: "Experienced" },
      { id: 4, skill: "PostgreSQL", level: "Experienced" },
      { id: 5, skill: "Microservices", level: "Experienced" },
      { id: 6, skill: "Event-Driven Design", level: "Experienced" },
      { id: 7, skill: "Redis / MongoDB", level: "Experienced" },
      { id: 8, skill: "Python", level: "Intermediate" },
    ],
  },
  {
    id: 3,
    title: "Frontend & Platform",
    skills: [
      { id: 1, skill: "React / Next.js", level: "Experienced" },
      { id: 2, skill: "Angular", level: "Experienced" },
      { id: 3, skill: "Micro-Frontends", level: "Experienced" },
      { id: 4, skill: "AWS", level: "Experienced" },
      { id: 5, skill: "Docker / Kubernetes", level: "Experienced" },
      { id: 6, skill: "CI/CD & Azure DevOps", level: "Experienced" },
      { id: 7, skill: "Tailwind / Sass", level: "Experienced" },
      { id: 8, skill: "TDD & Automation", level: "Experienced" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h5>Some of my</h5>
      <h2>Skills</h2>
      <div className="skills">
        {skillGroups.map((group) => (
          <SkillGroup key={group.id} group={group} />
        ))}
      </div>
    </div>
  );
};
export default Skills;

const SkillGroup = ({ group }) => {
  return (
    <div className="skill-group">
      <h2>{group.title}</h2>
      {group.skills.map((skill) => (
        <Skill key={skill.id} skill={skill} />
      ))}
    </div>
  );
};

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
