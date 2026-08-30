import CTA from "../CTA/CTA";
import Avatar from "../../assets/images/avatar.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import CV from "../../assets/cv.pdf";

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
      <p className="availability">
        Available for remote senior roles &middot; Lagos (GMT+1)
      </p>
      <h1>Franklin Wagbara</h1>
      <h2 className="profession">
        I make legacy .NET banking platforms faster
        <br />
        and help LLMs ship production-grade code.
      </h2>
      <p className="hero-summary">
        9 years building enterprise backends &middot; Gemini 2.5 Pro training
        contributor &middot; Shipped for FCMB, EPS Vilnius, and multi-tenant
        SaaS
      </p>
      <CTA
        action1={CV}
        download={true}
        label1="Download CV"
        label2="Book a 20-min Call"
        action2="#contact"
      />
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
      <img
        src={Avatar}
        alt="Franklin Wagbara - Senior Software Engineer & Technical Lead"
      />
    </div>
  );
};
