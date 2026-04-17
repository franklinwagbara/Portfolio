import "./Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer id="footer">
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
            <a href="#case-studies">Case Studies</a>
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
      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} Franklin Wagbara. All rights
          reserved.
        </small>
      </div>
    </footer>
  );
};
export default Footer;
