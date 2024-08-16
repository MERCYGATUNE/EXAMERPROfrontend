import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../../assets/icons8-home-30.png"
import SettingsIcon from "../../../../assets/icons8-settings-50.png"
import ExamIcon from "../../../../assets/icons8-exam-50.png"
import SubmissionsIcon from '../../../../assets/iconlylight-outline3-user.svg'
import SignOutIcon from "../../../../assets/icons8-sign-out-30.png"
import PropTypes from "prop-types";
import "./LeftBar3.css";

const LeftBar3 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onDocumentsContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-exams");
  }, [navigate]);

  const onClassesContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-submissions");
  }, [navigate]);

  const onSettingsContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-settings");
  }, [navigate]);

  return (
    <div className={`left-bar5 ${className}`}>
      <div className="left-bar-inner">
        <div className="frame-parent15">
          <div className="iconlylight-outlinelogout-frame">
            <img
              className="iconlylight-outlinelogout5"
              loading="lazy"
              alt=""
              src={SignOutIcon}
            />
          </div>
          <b className="sign-out5">Sign Out</b>
        </div>
      </div>
      <div className="navigation2">
        <div className="examiner-wrapper">
          <a className="examiner7">EXAMINER</a>
        </div>
        <div className="navigation-items">
          <Button
            className="home9"
            startIcon={
              <img width="25px" height="26.3px" src={HomeIcon} />
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
              height: 61,
            }}
          >
            Home
          </Button>
          <div className="exams-submissions">
            <div className="exams-button1">
              <div className="documents5" onClick={onDocumentsContainerClick}>
                <img
                  className="iconlylight-outlinedocument8"
                  loading="lazy"
                  alt=""
                  src={ExamIcon}
                />
                <b className="exams4">Exams</b>
              </div>
              <div className="classes2" onClick={onClassesContainerClick}>
                <div className="iconlylight-outline3-user-wrapper">
                  <img
                    className="iconlylight-outline3-user2"
                    loading="lazy"
                    alt=""
                    src={SubmissionsIcon}
                  />
                </div>
                <b className="submissions2">Submissions</b>
              </div>
            </div>
          </div>
          <div className="settings-button1">
            <div className="settings8" onClick={onSettingsContainerClick}>
              <div className="settings-icon-container2">
                <img
                  className="iconlylight-outlinesetting3"
                  loading="lazy"
                  alt=""
                  src={SettingsIcon}
                />
              </div>
              <b className="settings9">Settings</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftBar3.propTypes = {
  className: PropTypes.string,
};

export default LeftBar3;
