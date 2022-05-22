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
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
              id asperiores voluptate omnis maiores amet commodi quasi
              accusantium fuga ut animi itaque corporis, eos est ex recusandae!
              Aut modi, aspernatur quo, quae aperiam quis id cum soluta
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
      {" "}
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
        subtitle="40+ Completed"
      />
    </div>
  );
};
