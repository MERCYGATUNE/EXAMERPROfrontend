import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../../assets/icons8-home-30.png"
import SettingsIcon from "../../../../assets/icons8-settings-50.png"
import SignOutIcon from "../../../../assets/icons8-sign-out-30.png"
import ExamIcon from "../../../../assets/icons8-exam-50.png"
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
      <div className="side-bar-top">
        <div className="exam-pro-container">
          <a className="examerpro1">ExamerPro™</a>
          <div className="examiner-container">
            <a className="examiner2">STUDENT</a>
          </div>
        </div>
      </div>
        <div className="navigation-links">
        <div className = "documents1">
        <div className="documents-child" />
        <div className="exams-indicator" />
          <Button
            className="exams1"
            startIcon={
              <img width="25px" height="26.3px" src={HomeIcon} />
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
        </div>
          <div className="settings-icon-container1">
            <div className="documents2" onClick={onDocumentsContainerClick}>
              <img
                className="iconlylight-outlinedocument4"
                loading="lazy"
                alt=""
                src={ExamIcon}
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
                src={SettingsIcon}
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
              src={SignOutIcon}
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
