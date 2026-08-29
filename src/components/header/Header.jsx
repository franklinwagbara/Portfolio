import CTA from "../CTA/CTA";
import Avatar from "../../assets/images/avatar.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/cv.PDF";

const Header = (props) => {
  return (
    <header id="home" className="header">
      <HeaderIntro />
      <div className="header-body">
        <SocialMedia />
        <Profile />
        <div className="scrollbar">
          <span>Scroll Down</span>
        </div>
      </div>
    </header>
  );
};
export default Header;

export const HeaderIntro = () => {
  return (
    <div className="header-intro">
      <h2>Hello, I'm</h2>
      <h1>Franklin Wagbara</h1>
      <h2 className="profession">
        Senior Software Engineer &amp; Technical Lead
      </h2>
      <p className="tagline">
        9+ years building high-performance backend systems and AI-powered
        products across banking, fintech and SaaS.
      </p>
      <CTA action1={CV} />
    </div>
  );
};

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://www.linkedin.com/in/franklin-wagbara"
        target="_blank"
        rel="noreferrer"
        aria-label="LinkedIn"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/franklinwagbara"
        target="_blank"
        rel="noreferrer"
        aria-label="GitHub"
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        href="https://x.com/franklinwagbara"
        target="_blank"
        rel="noreferrer"
        aria-label="X"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="avatar">
      <img src={Avatar} alt="Franklin Wagbara" />
    </div>
  );
};
