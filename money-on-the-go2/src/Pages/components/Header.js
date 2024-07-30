import PropTypes from "prop-types";
import "./Header.css";

const Header = ({ className = "" }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-content">
        <a className="examerpro">ExamerPro™</a>
        <div className="nav-links">
          <a className="home">Home</a>
          <a className="stays">Stays</a>
          <a className="become-a-host">Become a host</a>
        </div>
        <div className="login-section">
          <img
            className="notifications-icon"
            alt=""
            src="/notifications@2x.png"
          />
          <img className="avatar-icon" alt="" src="/avatar@2x.png" />
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
