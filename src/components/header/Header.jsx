import CTA from "../CTA/CTA";
import Avatar from "../../assets/images/avatar.png";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
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
      <h2 className="profession">Software Engineer</h2>
      <CTA action1={CV} />
    </div>
  );
};

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a href="">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
    </div>
  );
};

export const Profile = () => {
  return (
    <div className="avatar">
      <img src={Avatar} alt="profile" />
    </div>
  );
};
