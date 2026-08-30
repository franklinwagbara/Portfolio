import "./CTA.scss";
import { PropTypes } from "prop-types";

// Only send off-site links to a new tab. In-page anchors like "#contact" must
// stay in this tab, otherwise clicking them opens a duplicate of the site
// instead of scrolling to the section.
const isExternal = (url) => /^(https?:)?\/\//.test(url || "");
const linkTargetProps = (url) =>
  isExternal(url) ? { target: "_blank", rel: "noreferrer" } : {};

const CTA = ({
  download = false,
  label1 = "Download CV",
  label2 = "Book a 20-min Call",
  action1 = "",
  action2 = "#contact",
}) => {
  return (
    <div className="cta">
      <a
        href={action1}
        className="btn"
        download={download}
        {...(download ? {} : linkTargetProps(action1))}
      >
        {label1}
      </a>
      {action2 && (
        <a href={action2} className="btn btn-primary" {...linkTargetProps(action2)}>
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
