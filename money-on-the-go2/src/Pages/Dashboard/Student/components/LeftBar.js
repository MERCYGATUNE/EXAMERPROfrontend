import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import "./LeftBar.css";

const LeftBar = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDocumentsContainerClick = useCallback(() => {
    navigate("/student-dashboard-exams");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/student-dashboard-settings");
  }, [navigate]);

  return (
    <div className={`left-bar2 ${className}`}>
      <div className="left-bar-inner" />
      <div className="side-bar-content">
        <div className="settings-button">
          <a className="examiner3">STUDENT</a>
        </div>
        <div className="navigation-links">
          <Button
            className="home4"
            startIcon={
              <img width="25px" height="26.3px" src="/iconlyboldhome.svg" />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#0077ff",
              fontSize: "20",
              background: "#f0f7ff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#f0f7ff" },
            }}
          >
            Home
          </Button>
          <div className="settings-icon-container1">
            <div className="documents2" onClick={onDocumentsContainerClick}>
              <img
                className="iconlylight-outlinedocument4"
                loading="lazy"
                alt=""
                src="/iconlylight-outlinedocument.svg"
              />
              <b className="exams2">Exams</b>
            </div>
          </div>
        </div>
        <div className="settings-wrapper">
          <div className="settings3" onClick={onSettingsContainerClick}>
            <div className="iconlylight-outlinesetting-wrapper">
              <img
                className="iconlylight-outlinesetting1"
                loading="lazy"
                alt=""
                src="/iconlylight-outlinesetting.svg"
              />
            </div>
            <b className="settings4">Settings</b>
          </div>
        </div>
      </div>
      <div className="logout-link">
        <div className="logout-icon-container">
          <div className="iconlylight-outlinelogout-container">
            <img
              className="iconlylight-outlinelogout2"
              loading="lazy"
              alt=""
              src="/iconlylight-outlinelogout@2x.png"
            />
          </div>
          <b className="sign-out2">Sign Out</b>
        </div>
      </div>
    </div>
  );
};

LeftBar.propTypes = {
  className: PropTypes.string,
};

export default LeftBar;
