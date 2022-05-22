import "./Navbar.scss";
import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";

const activeContext = createContext();

const Navbar = ({ defaultActive, children }) => {
  const [active, setActive] = useState(defaultActive);
  return (
    <div className="navbar">
      <activeContext.Provider value={[active, setActive]}>
        {children}
      </activeContext.Provider>
    </div>
  );
};

export default Navbar;

export const NavItem = ({ defaultActive, name, url, children }) => {
  const [active, setActive] = useContext(activeContext);
  const classes = active === name ? "active" : "";

  return (
    <a className={classes} onClick={() => setActive(name)} href={url}>
      {children}
    </a>
  );
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  defaultActive: PropTypes.bool
};
