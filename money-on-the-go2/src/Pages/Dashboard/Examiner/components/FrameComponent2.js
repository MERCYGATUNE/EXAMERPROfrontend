import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";

const FrameComponent2 = ({
  className = "",
  alluraAvatarBackgroundColor,
  alluraAvatar,
}) => {
  const alluraAvatarStyle = useMemo(() => {
    return {
      backgroundColor: alluraAvatarBackgroundColor,
    };
  }, [alluraAvatarBackgroundColor]);

  return (
    <header className={`frame-header ${className}`}>
      <div className="examerpro-wrapper">
        <a className="examerpro2">ExamerPro™</a>
      </div>
      <div className="profile2">
        <div className="allura-avatar-parent">
          <div className="allura-avatar2" style={alluraAvatarStyle} />
          <img
            className="allura-avatar-icon4"
            loading="lazy"
            alt=""
            src={alluraAvatar}
          />
        </div>
        <div className="user-name-container">
          <a className="ayo4">Ayo</a>
        </div>
      </div>
    </header>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  alluraAvatar: PropTypes.string,

  /** Style props */
  alluraAvatarBackgroundColor: PropTypes.any,
};

export default FrameComponent2;
