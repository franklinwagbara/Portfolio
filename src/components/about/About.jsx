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
              I'm Franklin. For nine years I've built the systems you don't
              usually see&mdash;the .NET backends moving money through Nigerian
              banks, the microservices keeping SaaS platforms upright at scale,
              and the microfrontend integrations nobody wants to touch twice.
            </p>
            <p>
              Most recently at EPS (Vilnius), I led a team of 8 engineers
              re-architecting a legacy banking infrastructure that supported
              critical financial operations. We cut transaction latency by
              {/* TODO: replace with actual % */} 40%+ and improved throughput
              by 30%+, unblocking key product milestones.
            </p>
            <p>
              Before that, I spent five months contributing to the training of
              Gemini 2.5 Pro through Turing&mdash;specifically catching
              hallucinations and anti-patterns in .NET and React output. That
              work is now in a model millions of developers use daily.
            </p>
            <p>
              I care most about three things: performance work that shows up in
              real P&amp;L numbers, codebases future engineers can actually
              maintain, and using AI as a force multiplier instead of a crutch.
            </p>
            <p className="about-location">
              Based in Lagos, working GMT+1, open to remote senior IC roles
              globally.
            </p>
            <a href="#contact" className="btn btn-primary">
              Book a 20-min Call
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
        subtitle="Led teams of 8+ engineers"
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
