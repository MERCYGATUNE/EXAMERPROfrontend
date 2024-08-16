import PropTypes from "prop-types";
import "./Header1.css";

const Header1 = ({ className = "" }) => {
  return (
    <header className={`header1 ${className}`}>
      <div className="header-content1">
        <a className="examerpro1">ExamerPro™</a>
        <div className="nav-links1">
          <a className="home1">Home</a>
          <a className="stays1">Stays</a>
          <a className="become-a-host1">Become a host</a>
        </div>
        <div className="login-section1">
          <img
            className="notifications-icon1"
            alt=""
            src="/notifications1@2x.png"
          />
          <img className="avatar-icon1" alt="" src="/avatar1@2x.png" />
        </div>
      </div>
    </header>
  );
};

Header1.propTypes = {
  className: PropTypes.string,
};

export default Header1;
