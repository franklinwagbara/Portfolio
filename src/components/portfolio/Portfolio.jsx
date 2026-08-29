import "./Portfolio.scss";
import Elevare from "../../assets/images/projects/elevare.jpg";
import CryptoFinder from "../../assets/images/projects/crypto_finder.PNG";
import Project1 from "../../assets/images/projects/project1.jpg";
import CTA from "../CTA/CTA";

const projects = [
  {
    id: 1,
    image: Elevare,
    badge: "Launching Soon",
    heading: "Elevare — AI-Powered Career Companion",
    description:
      "A full-stack SaaS platform that generates and optimizes resumes with AI, coaches users through skill-gap roadmaps, and tracks every application from applied to offer — with a Chrome extension that auto-detects jobs on LinkedIn, Indeed, Greenhouse and Lever.",
    stack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      ".NET 9",
      "PostgreSQL",
      "Azure OpenAI",
      "Docker",
    ],
    gitHub: "https://github.com/franklinwagbara/Elevare",
    projectURL: "https://www.elevareapp.net",
    label2: "Visit Site",
  },
  {
    id: 2,
    image: Project1,
    heading: "Fintech Payment Gateway",
    description:
      "End-to-end payment processing gateway designed and built for clients at BrandoneTech — covering transaction orchestration, idempotency, provider integrations and reconciliation on an API-centric modular architecture.",
    stack: ["Node.js", "TypeScript", "C#/.NET Core", "PostgreSQL", "REST APIs"],
    proprietary: true,
  },
  {
    id: 3,
    image: CryptoFinder,
    heading: "Crypto Finder",
    description:
      "A market data explorer that surfaces live prices, historical charts and news for any cryptocurrency, backed by a public market-data API.",
    stack: ["React", "JavaScript", "REST APIs", "Sass"],
    gitHub: "https://github.com/franklinwagbara/Crypto-finder",
    projectURL: "https://franklin-crypto-finder.netlify.app/",
  },
];

const Portfolio = (props) => {
  return (
    <section id="portfolio">
      <h5>My</h5>
      <h2>Projects</h2>
      <Projects projects={projects} />
    </section>
  );
};
export default Portfolio;

const Projects = ({ projects }) => {
  return (
    <div className="projects__container">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

const Project = ({ project }) => {
  return (
    <article className="project__container">
      <div className="project__image">
        <img src={project.image} alt={project.heading} />
        {project.badge && <span className="project__badge">{project.badge}</span>}
      </div>
      <div className="info__wrapper">
        <h3>{project.heading}</h3>
        <p className="project__description">{project.description}</p>
        <ul className="project__stack">
          {project.stack.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        {project.proprietary ? (
          <p className="project__note">Proprietary — source not public</p>
        ) : (
          <CTA
            download={false}
            label1="GitHub"
            label2={project.label2 || "Live Demo"}
            action1={project.gitHub}
            action2={project.projectURL}
          />
        )}
      </div>
    </article>
  );
};
