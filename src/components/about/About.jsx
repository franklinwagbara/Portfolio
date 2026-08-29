import "./About.scss";
import Profile from "../../assets/images/avatar.png";
import { GiMedal } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

const About = (props) => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header">
          <h5>More</h5>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={Profile} alt="Franklin Wagbara" />
          </div>
          <div className="main-content">
            <Cards />
            <p>
              I'm a Senior Software Engineer and Technical Lead with 9+ years of
              experience — including 6+ in senior leadership — delivering
              high-performance, enterprise-grade systems across banking, fintech
              and SaaS. I specialize in Node.js, TypeScript and PostgreSQL
              alongside deep C#/.NET Core expertise, designing event-driven
              microservices built for high transaction volumes and concurrency
              under load.
            </p>
            <p>
              On the AI side, I've contributed to the training and refinement of
              large language models — including Gemini 2.5 Pro — and I build
              LLM-powered features into production systems. I'm currently
              building{" "}
              <a
                href="https://www.elevareapp.net"
                target="_blank"
                rel="noreferrer"
              >
                Elevare
              </a>
              , an AI career companion launching shortly.
            </p>
            <p>
              Across my last three roles I've delivered 80%+ latency reductions,
              30%+ throughput gains and led cross-functional teams through
              full-platform modernizations — always with measurable baselines to
              prove the impact.
            </p>
            <a className="btn btn-primary about-cta" href="#contact">
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

export const Card = ({ icon, header, subtitle }) => {
  return (
    <div className="card">
      {icon}
      <p>{header}</p>
      <p>{subtitle}</p>
    </div>
  );
};

export const Cards = (props) => {
  return (
    <div className="cards">
      <Card
        icon={<GiMedal />}
        header={"Experience"}
        subtitle="9+ Years, 6+ Senior/Lead"
      />
      <Card
        icon={<BsPeopleFill />}
        header={"Leadership"}
        subtitle="Teams of 8+ Engineers Led"
      />
      <Card
        icon={<AiFillProject />}
        header={"Impact"}
        subtitle="80%+ Latency Reduction"
      />
    </div>
  );
};
