import "./CTA.scss";
import { PropTypes } from "prop-types";

const CTA = ({
  download = false,
  label1 = "Download CV",
  label2 = "Let's Talk",
  action1 = "./CTA.scss",
  action2,
}) => {
  return (
    <div className="cta">
      <a href={action1} className="btn" download={download}>
        {label1}
      </a>
      <a href={action2} className="btn btn-primary">
        {label2}
      </a>
    </div>
  );
};

CTA.propTypes = {
  download: PropTypes.bool,
  action1: PropTypes.string.isRequired,
  action2: PropTypes.string.isRequired,
  label1: PropTypes.string.isRequired,
  label2: PropTypes.string.isRequired,
};

export default CTA;
