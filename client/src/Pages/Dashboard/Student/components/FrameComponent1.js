import PropTypes from "prop-types";
import "./FrameComponent1.css";
import StudentProfilePicture from '../../../../assets/icons8-graduate-48.png'

const FrameComponent1 = ({ className = "" }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  return (
    <header className={`frame-container ${className}`}>
      <div className="examerpro-wrapper">
        <a className="examerpro2">ExamerPro™</a>
      </div>
      <div className="profile2">
        <div className="profile-inner" />
        <div className="allura-avatar-parent">
          <div className="allura-avatar2" />
          <img
            className="allura-avatar-icon3"
            loading="lazy"
            alt=""
            src={StudentProfilePicture}
          />
        </div>
        <div className="user-name-container1">
          <a className="ayo3">{username}</a>
        </div>
      </div>
    </header>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
