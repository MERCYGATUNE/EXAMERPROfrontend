import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../../assets/icons8-home-30.png"
import SettingsIcon from "../../../../assets/icons8-settings-50.png"
import ExamIcon from "../../../../assets/icons8-exam-50.png"
import SubmissionsIcon from '../../../../assets/iconlylight-outline3-user.svg'
import SignOutIcon from "../../../../assets/icons8-sign-out-30.png"
import PropTypes from "prop-types";
import "./LeftBar4.css";

const LeftBar4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/examiner");
  }, [navigate]);

  const onClassesContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-submissions");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-settings");
  }, [navigate]);

  return (
    <div className={`left-bar4 ${className}`}>
      <div className="sidebar-content-wrapper">
        <div className="sidebar-content">
          <div className="sidebar-items">
            <a className="examerpro3">ExamerPro™</a>
          </div>
          <a className="examiner6">EXAMINER</a>
        </div>
      </div>
      <div className="navigation1">
        <div className="nav-items">
          <div className="home7" onClick={onHomeContainerClick}>
            <img
              className="iconlyboldhome3"
              loading="lazy"
              alt=""
              src={HomeIcon}
            />
            <a className="home8">Home</a>
          </div>
        </div>
        <div className="documents-link">
          <Button
            className="documents4"
            startIcon={
              <img
                width="25px"
                height="27.4px"
                src={ExamIcon}
              />
            }
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#ff0000",
              fontSize: "20",
              background: "#f0f7ff",
              borderRadius: "0px 0px 0px 0px",
              "&:hover": { background: "#f0f7ff" },
            }}
          >
            Exams
          </Button>
          <div className="submissions-link">
            <div className="classes1" onClick={onClassesContainerClick}>
              <div className="submissions-icon">
                <img
                  className="iconlylight-outline3-user1"
                  loading="lazy"
                  alt=""
                  src={SubmissionsIcon}
                />
              </div>
              <b className="submissions1">Submissions</b>
            </div>
          </div>
        </div>
        <div className="settings-link">
          <div className="home7" onClick={onSettingsContainerClick}>
            <div className="settings-icon1">
              <img
                className="iconlylight-outlinesetting2"
                loading="lazy"
                alt=""
                src={SettingsIcon}
              />
            </div>
            <b className="settings7">Settings</b>
          </div>
        </div>
      </div>
      <div className="logout-link1">
        <div className="sign-out-icon-parent">
          <div className="sign-out-icon">
            <img
              className="iconlylight-outlinelogout4"
              loading="lazy"
              alt=""
              src={SignOutIcon}
            />
          </div>
          <b className="sign-out4">Sign Out</b>
        </div>
      </div>
    </div>
  );
};

LeftBar4.propTypes = {
  className: PropTypes.string,
};

export default LeftBar4;
