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

const Header = () => {
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
    <div className="header-intro" data-aos="fade-down">
      <h5 className="greeting">Hello, I'm</h5>
      <h1>Franklin Wagbara</h1>
      <h2 className="profession">Senior Software Engineer</h2>
      <CTA action1={CV} download={true} />
    </div>
  );
};

export const SocialMedia = () => {
  return (
    <div className="social-media" data-aos="fade-right" data-aos-delay="300">
      <a
        href="https://www.linkedin.com/in/franklin-wagbara-047a1a45/"
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
        href="https://x.com/wagbaraf"
        target="_blank"
        rel="noreferrer"
        aria-label="Twitter"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="avatar" data-aos="fade-up" data-aos-delay="200">
      <img src={Avatar} alt="Franklin Wagbara - Senior Software Engineer" />
    </div>
  );
};
