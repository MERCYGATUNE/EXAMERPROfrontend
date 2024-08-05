import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../../assets/icons8-home-30.png"
import SettingsIcon from "../../../../assets/icons8-settings-50.png"
import SignOutIcon from "../../../../assets/icons8-sign-out-30.png"
import ExamIcon from "../../../../assets/icons8-exam-50.png"
import PropTypes from "prop-types";
import "./LeftBar2.css";

const LeftBar2 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/student-dashboard");
  }, [navigate]);

  const onDocumentsContainerClick = useCallback(() => {
    navigate("/student-dashboard-exams");
  }, [navigate]);

  return (
    <div className={`left-bar ${className}`}>
      <div className="side-bar-top">
        <div className="exam-pro-container">
          <a className="examerpro1">ExamerPro™</a>
          <div className="examiner-container">
            <a className="examiner2">STUDENT</a>
          </div>
        </div>
      </div>
      <div className="left-bar-child" />
      <div className="logout-entry">
        <div className="home" onClick={onHomeContainerClick}>
          <img
            className="iconlyboldhome"
            loading="lazy"
            alt=""
            src={HomeIcon}
          />
          <a className="home1">Home</a>
        </div>
      </div>
      <div className="logout-button-parent">
        <div className="logout-button">
          <div className="documents" onClick={onDocumentsContainerClick}>
            <img
              className="iconlylight-outlinedocument"
              loading="lazy"
              alt=""
              src={ExamIcon}
            />
            <b className="exams">Exams</b>
          </div>
        </div>
        <Button
          className="settings"
          startIcon={
            <img
              width="24px"
              height="25.8px"
              src={SettingsIcon}
            />
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
          Settings
        </Button>
      </div>
      <div className="logout-button-wrapper">
        <div className="logout-button1">
          <div className="navigation">
            <img
              className="iconlylight-outlinelogout"
              loading="lazy"
              alt=""
              src={SignOutIcon}
            />
          </div>
          <b className="sign-out">Sign Out</b>
        </div>
      </div>
    </div>
  );
};

LeftBar2.propTypes = {
  className: PropTypes.string,
};

export default LeftBar2;
