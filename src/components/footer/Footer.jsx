import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = (props) => {
  return (
    <section id="footer">
      <h1>Franklin Wagbara</h1>
      <nav className="footer__nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <div className="footer__social">
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
        </a>{" "}
      </div>
      <div className="footer__copyright">
        <small>&copy; Franklin Wagbara. All rights reserved.</small>
      </div>
    </section>
  );
};
export default Footer;
