import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <header className={`content1 ${className}`}>
      <div className="warning-message">
        <div className="brand">
          <a className="examerpro">ExamerPro™</a>
          <div className="examiner">
            <a className="examiner1">STUDENT</a>
          </div>
        </div>
      </div>
      <div className="profile1">
        <div className="profile-item" />
        <div className="avatar">
          <div className="allura-avatar1" />
          <img
            className="allura-avatar-icon2"
            loading="lazy"
            alt=""
            src="/allura-avatar@2x.png"
          />
        </div>
        <div className="profile-name">
          <a className="ayo2">Ayo</a>
        </div>
      </div>
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
