import "./CTA.scss";
import { PropTypes } from "prop-types";

const CTA = ({
  download = false,
  label1 = "Download CV",
  label2 = "Let's Talk",
  action1 = "",
  action2 = "#contact",
}) => {
  return (
    <div className="cta">
      <a
        href={action1}
        className="btn"
        download={download}
        target="_blank"
        rel="noreferrer"
      >
        {label1}
      </a>
      {action2 && (
        <a
          href={action2}
          className="btn btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          {label2}
        </a>
      )}
    </div>
  );
};

CTA.propTypes = {
  download: PropTypes.bool,
  action1: PropTypes.string.isRequired,
  action2: PropTypes.string,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string,
};

export default CTA;
