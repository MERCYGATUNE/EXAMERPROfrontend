import PropTypes from "prop-types";
import "./Content.css";
import StudentProfilePicture from '../../../../assets/icons8-graduate-48.png'

const Content = ({ className = "" }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  return (
    <header className={`content1 ${className}`}>
      <div className="warning-message">
        <div className="brand">
          <a className="examerpro">ExamerPro™</a>
          <div className="examiner33">
            <a className="examiner3">STUDENT</a>
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
            src={StudentProfilePicture}
          />
        </div>
        <div className="profile-name">
          <a className="ayo2">{username}</a>
        </div>
      </div>
    </header>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
