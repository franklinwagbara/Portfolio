import "./Portfolio.scss";
import CryptoFinder from "../../assets/images/projects/crypto_finder.PNG";
import PulseGridImg from "../../assets/images/projects/pulsegrid.png";
import PaymentPlatform from "../../assets/images/projects/payment_platform.svg";
import FastTrack from "../../assets/images/projects/fast_track.svg";
import CTA from "../CTA/CTA";

const projects = [
  {
    id: 1,
    image: PulseGridImg,
    heading: "PulseGrid — Real-Time IoT Monitoring Dashboard",
    description:
      "High-performance Next.js 14 dashboard streaming 10K+ simulated IoT devices in real-time with Web Workers, backpressure buffering, and virtualized rendering.",
    tags: ["Next.js", "TypeScript", "Zustand", "Tailwind CSS"],
    gitHub: "https://github.com/franklinwagbara/PulseGrid",
    projectURL: "https://resilient-crepe-13d95e.netlify.app/",
  },
  {
    id: 2,
    image: PaymentPlatform,
    heading: "Payment Platform — Digital Wallet & Ledger System",
    description:
      "Production-ready wallet system with Spring Boot + React featuring ledger-first architecture, double-entry bookkeeping, and cross-currency transfers.",
    tags: ["Java", "Spring Boot", "React", "REST API"],
    gitHub: "https://github.com/franklinwagbara/Payment-Platform",
    projectURL: "",
  },
  {
    id: 3,
    image: FastTrack,
    heading: "Fast Track — Executive Diagnostic Dashboard",
    description:
      "Modern diagnostic dashboard with React + TypeScript frontend and Node.js backend, featuring glassmorphism UI and real-time analytics.",
    tags: ["React", "TypeScript", "Node.js", "Express"],
    gitHub: "https://github.com/franklinwagbara/Fast-Track",
    projectURL: "",
  },
  {
    id: 4,
    image: CryptoFinder,
    heading: "Crypto Finder — Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency information and tracking app with live price data, market stats, and trending coins.",
    tags: ["React", "JavaScript", "REST API", "CSS"],
    gitHub: "https://github.com/franklinwagbara/Crypto-finder",
    projectURL: "https://franklin-crypto-finder.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 data-aos="fade-up">My Recent Work</h5>
      <h2 data-aos="fade-up">Projects</h2>
      <Projects projects={projects} />
    </section>
  );
};
export default Portfolio;

const Projects = ({ projects }) => {
  return (
    <div className="projects__container">
      {projects.map((project, index) => (
        <Project key={project.id} project={project} index={index} />
      ))}
    </div>
  );
};

const Project = ({ project, index }) => {
  return (
    <article
      className="project__container"
      data-aos="fade-up"
      data-aos-delay={index * 100}
    >
      <div className="project__image">
        <img src={project.image} alt={project.heading} />
      </div>
      <div className="info__wrapper">
        <h3>{project.heading}</h3>
        <p className="project__description">{project.description}</p>
        <div className="project__tags">
          {project.tags.map((tag) => (
            <span key={tag} className="project__tag">
              {tag}
            </span>
          ))}
        </div>
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
