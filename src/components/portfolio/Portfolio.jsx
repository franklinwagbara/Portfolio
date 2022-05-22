import "./Portfolio.scss";
import Project1 from "../../assets/images/projects/project1.jpg";
import CTA from "../CTA/CTA";

const projects = [
  {
    id: 1,
    image: Project1,
    heading: "Real Estate website for a reputable real estate company",
    gitHub: "https://github.com/franklinwagbara/Portfolio",
    projectURL: "https://github.com/franklinwagbara/Portfolio",
  },
  {
    id: 2,
    image: Project1,
    heading: "Real Estate website for a reputable real estate company",
    gitHub: "https://github.com/franklinwagbara/Portfolio",
    projectURL: "https://github.com/franklinwagbara/Portfolio",
  },
  {
    id: 3,
    image: Project1,
    heading: "Real Estate website for a reputable real estate company",
    gitHub: "https://github.com/franklinwagbara/Portfolio",
    projectURL: "https://github.com/franklinwagbara/Portfolio",
  },
  {
    id: 4,
    image: Project1,
    heading: "Real Estate website for a reputable real estate company",
    gitHub: "https://github.com/franklinwagbara/Portfolio",
    projectURL: "https://github.com/franklinwagbara/Portfolio",
  },
  {
    id: 5,
    image: Project1,
    heading: "Real Estate website for a reputable real estate company",
    gitHub: "https://github.com/franklinwagbara/Portfolio",
    projectURL: "https://github.com/franklinwagbara/Portfolio",
  },
  {
    id: 6,
    image: Project1,
    heading: "Real Estate website for a reputable real estate company",
    gitHub: "https://github.com/franklinwagbara/Portfolio",
    projectURL: "https://github.com/franklinwagbara/Portfolio",
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
        <img src={project.image} alt="Project" />
      </div>
      <div className="info__wrapper">
        <h3>{project.heading}</h3>
        <CTA
          download={false}
          label1="GitHub"
          label2="Live Demo"
          action1={project.gitHub}
          action2={project.projectURL}
        />
      </div>
    </article>
  );
};
