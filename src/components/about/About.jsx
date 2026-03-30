import "./About.scss";
import Profile from "../../assets/images/avatar.png";
import { GiMedal } from "react-icons/gi";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillProject, AiOutlineRobot } from "react-icons/ai";

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
              Senior Software Engineer and Technical Lead with 9+ years of
              experience, including 6+ years in senior leadership roles,
              delivering high-performance, enterprise-grade systems across
              banking, fintech, and SaaS domains. Specialized for 8+ years in
              C#, ASP.NET, and .NET Core, with strong full-stack expertise in
              React, Angular, Node.js, TypeScript, and JavaScript.
            </p>
            <p>
              Proven leader of cross-functional engineering teams, driving 30%+
              throughput improvements, 40%+ latency reductions, and 80%+
              performance gains on business-critical features through system
              modernization and architectural optimization. Experienced in
              training and fine-tuning large language models
              (LLMs)&mdash;including contributions to Gemini 2.5 Pro&mdash;to
              improve the accuracy and production readiness of AI-generated
              solutions.
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
        subtitle="9+ Years / 6+ Senior"
      />
      <Card
        icon={<BsPeopleFill />}
        header={"Leadership"}
        subtitle="Cross-Functional Teams"
      />
      <Card
        icon={<AiOutlineRobot />}
        header={"AI / LLM"}
        subtitle="Gemini 2.5 Pro Contributor"
      />
      <Card
        icon={<AiFillProject />}
        header={"Domains"}
        subtitle="Banking, Fintech, SaaS"
      />
    </div>
  );
};
