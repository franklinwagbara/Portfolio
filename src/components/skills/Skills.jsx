import "./Skills.scss";
import { BsPatchCheckFill } from "react-icons/bs";

const coreStack = [
  { id: 1, skill: "C# / ASP.NET / .NET Core", years: "8+ yrs production" },
  { id: 2, skill: "React / Next.js", years: "6+ yrs production" },
  { id: 3, skill: "TypeScript", years: "5+ yrs production" },
  { id: 4, skill: "Node.js / Express", years: "5+ yrs production" },
  { id: 5, skill: "PostgreSQL / MSSQL", years: "7+ yrs production" },
  { id: 6, skill: "Microservices & Event-Driven Architecture", years: "5+ yrs production" },
];

const alsoComfortableWith = [
  "Angular",
  "Java / Spring Boot",
  "Python / Django",
  "REST API / GraphQL",
  "MongoDB / Redis",
  "Docker / Kubernetes",
  "AWS / Azure / GCP",
  "Azure DevOps / CI-CD",
  "Redux / Zustand",
  "Tailwind CSS / SCSS",
  "TDD / Unit & Integration Testing",
  "Git / GitHub / GitLab",
];

const Skills = () => {
  return (
    <div className="skills-container">
      <h5 data-aos="fade-up">What I Work With</h5>
      <h2 data-aos="fade-up">Skills & Technologies</h2>
      <div className="skills">
        <div className="skill-group skill-group--core" data-aos="fade-up">
          <h3>Core Stack</h3>
          {coreStack.map((skill) => (
            <div key={skill.id} className="skill">
              <BsPatchCheckFill />
              <div>
                <h4>{skill.skill}</h4>
                <span className="skill__years">{skill.years}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="skill-group skill-group--also" data-aos="fade-up" data-aos-delay="100">
          <h3>Also Comfortable With</h3>
          <div className="skill-tags">
            {alsoComfortableWith.map((tech) => (
              <span key={tech} className="skill-tag">{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
