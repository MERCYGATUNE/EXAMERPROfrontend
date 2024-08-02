import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LeftBar1.css";

const LeftBar1 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/student-dashboard");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/student-dashboard-settings");
  }, [navigate]);

  return (
    <div className={`left-bar1 ${className}`}>
      <div className="left-bar-item" />
      <div className="side-bar-top">
        <div className="exam-pro-container">
          <a className="examerpro1">ExamerPro™</a>
          <div className="examiner-container">
            <a className="examiner2">STUDENT</a>
          </div>
        </div>
      </div>
      <div className="side-bar-bottom">
        <div className="home-container">
          <div className="home2" onClick={onHomeContainerClick}>
            <img
              className="iconlyboldhome1"
              loading="lazy"
              alt=""
              src="/iconlyboldhome.svg"
            />
            <a className="home3">Home</a>
          </div>
        </div>
        <div className="exams-container">
          <div className="documents1">
            <div className="documents-child" />
            <div className="exams-indicator" />
            <div className="documents-icon-label">
              <div className="documents-icon">
                <img
                  className="iconlylight-outlinedocument1"
                  loading="lazy"
                  alt=""
                  src="/iconlylight-outlinedocument1.svg"
                />
                <b className="exams1">Exams</b>
              </div>
            </div>
          </div>
          <div className="settings-container">
            <div className="home2" onClick={onSettingsContainerClick}>
              <div className="settings-icon">
                <img
                  className="iconlylight-outlinesetting"
                  loading="lazy"
                  alt=""
                  src="/iconlylight-outlinesetting.svg"
                />
              </div>
              <b className="settings2">Settings</b>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-out-container">
        <div className="settings-icon-container">
          <div className="iconlylight-outlinelogout-wrapper">
            <img
              className="iconlylight-outlinelogout1"
              loading="lazy"
              alt=""
              src="/iconlylight-outlinelogout@2x.png"
            />
          </div>
          <b className="sign-out1">Sign Out</b>
        </div>
      </div>
    </div>
  );
};

LeftBar1.propTypes = {
  className: PropTypes.string,
};

export default LeftBar1;
