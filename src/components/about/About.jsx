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
            <img src={Profile} alt="Profile" />
          </div>
          <div className="main-content">
            <Cards />
            <p>
              Detail-oriented, organized and meticulous employee. Works at fast
              pace to meet tight deadlines. Enthusiastic team player ready to
              contribute to company success.
            </p>
            <button className="btn btn-primary">Let's Talk</button>
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
        subtitle="4+ Years Working Exp."
      />
      <Card
        icon={<BsPeopleFill />}
        header={"Clients"}
        subtitle="100+ Worldwide"
      />
      <Card
        icon={<AiFillProject />}
        header={"Projects"}
        subtitle="50+ Completed"
      />
    </div>
  );
};
