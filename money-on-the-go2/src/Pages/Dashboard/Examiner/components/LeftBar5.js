import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../../assets/icons8-home-30.png"
import SettingsIcon from "../../../../assets/icons8-settings-50.png"
import ExamIcon from "../../../../assets/icons8-exam-50.png"
import SubmissionsIcon from '../../../../assets/iconlylight-outline3-user.svg'
import SignOutIcon from "../../../../assets/icons8-sign-out-30.png"
import PropTypes from "prop-types";
import "./LeftBar5.css";

const LeftBar5 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/examiner");
  }, [navigate]);

  const onDocumentsContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-exams");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-settings");
  }, [navigate]);

  return (
    <div className={`left-bar6 ${className}`}>
      <div className="sidebar-top">
        <div className="sidebar-top-item-wrapper">
          <div className="sidebar-top-item">
            <div className="examer-pro-logo">
              <a className="examerpro4">ExamerPro™</a>
            </div>
            <a className="examiner8">EXAMINER</a>
          </div>
        </div>
        <div className="sidebar-bottom">
          <div className="home-wrapper">
            <div className="home10" onClick={onHomeContainerClick}>
              <img
                className="iconlyboldhome4"
                loading="lazy"
                alt=""
                src={HomeIcon}
              />
              <a className="home11">Home</a>
            </div>
          </div>
          <div className="exams-button2">
            <div className="home-wrapper">
              <div className="documents6" onClick={onDocumentsContainerClick}>
                <img
                  className="iconlylight-outlinedocument9"
                  loading="lazy"
                  alt=""
                  src={ExamIcon}
                />
                <b className="exams5">Exams</b>
              </div>
            </div>
            <Button
              className="classes3"
              startIcon={
                <img
                  width="29.6px"
                  height="22.8px"
                  src={SubmissionsIcon}
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
              Submissions
            </Button>
            <div className="settings-button2">
              <div className="home10" onClick={onSettingsContainerClick}>
                <div className="settings-icon2">
                  <img
                    className="iconlylight-outlinesetting4"
                    loading="lazy"
                    alt=""
                    src={SettingsIcon}
                  />
                </div>
                <b className="settings11">Settings</b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sign-out-button">
        <div className="sign-out-item">
          <div className="sign-out-icon1">
            <img
              className="iconlylight-outlinelogout6"
              loading="lazy"
              alt=""
              src={SignOutIcon}
            />
          </div>
          <b className="sign-out6">Sign Out</b>
        </div>
      </div>
    </div>
  );
};

LeftBar5.propTypes = {
  className: PropTypes.string,
};

export default LeftBar5;
