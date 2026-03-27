import "./About.scss";
import Profile from "../../assets/images/avatar.png";
import { GiMedal } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";

const About = () => {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-header" data-aos="fade-up">
          <h5>Get To Know</h5>
          <h2>About Me</h2>
        </div>

        <div className="about-content">
          <div className="about-image" data-aos="fade-right">
            <img src={Profile} alt="Franklin Wagbara" />
          </div>
          <div className="main-content" data-aos="fade-left">
            <Cards />
            <p>
              Senior Software Engineer with 9+ years of experience designing and
              building high-performance, scalable web applications. I specialize
              in React, TypeScript, Node.js, and C#/.NET — from architecting
              real-time dashboards processing 10K+ concurrent data streams to
              building ledger-first payment platforms with double-entry
              bookkeeping. Passionate about clean architecture, performance
              optimization, and mentoring engineering teams.
            </p>
            <a href="#contact" className="btn btn-primary">
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

export const Cards = () => {
  return (
    <div className="cards">
      <Card
        icon={<GiMedal />}
        header={"Experience"}
        subtitle="9+ Years in Software Engineering"
      />
      <Card
        icon={<BsPeopleFill />}
        header={"Collaboration"}
        subtitle="Cross-Functional Teams"
      />
      <Card
        icon={<AiFillProject />}
        header={"Projects"}
        subtitle="Production-Grade Systems"
      />
    </div>
  );
};
