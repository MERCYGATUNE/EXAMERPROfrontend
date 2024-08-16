import { useCallback } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import HomeIcon from "../../../../assets/icons8-home-30.png"
import SettingsIcon from "../../../../assets/icons8-settings-50.png"
import ExamIcon from "../../../../assets/icons8-exam-50.png"
import SubmissionsIcon from '../../../../assets/iconlylight-outline3-user.svg'
import SignOutIcon from "../../../../assets/icons8-sign-out-30.png"
import PropTypes from "prop-types";
import "./LeftBar6.css";

const LeftBar6 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHomeContainerClick = useCallback(() => {
    navigate("/examiner-dashboard");
  }, [navigate]);

  const onDocumentsContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-exams");
  }, [navigate]);

  const onClassesContainerClick = useCallback(() => {
    navigate("/examiner-dashboard-submissions");
  }, [navigate]);

  return (
    <div className={`left-bar3 ${className}`}>
      <div className="examiner-label-container">
        <a className="examiner5">EXAMINER</a>
      </div>
      <div className="logout-button-container">
        <div className="logout-inner-container">
          <div className="logout-icon-container1">
            <img
              className="iconlylight-outlinelogout3"
              loading="lazy"
              alt=""
              src={SignOutIcon}
            />
          </div>
          <b className="sign-out3">Sign Out</b>
        </div>
      </div>
      <div className="navigation-container">
        <div className="exams-button">
          <div className="home5" onClick={onHomeContainerClick}>
            <img
              className="iconlyboldhome2"
              loading="lazy"
              alt=""
              src={HomeIcon}
            />
            <a className="home6">Home</a>
          </div>
        </div>
        <div className="exams-container1">
          <div className="exams-button">
            <div className="documents3" onClick={onDocumentsContainerClick}>
              <img
                className="iconlylight-outlinedocument5"
                loading="lazy"
                alt=""
                src={ExamIcon}
              />
              <b className="exams3">Exams</b>
            </div>
          </div>
          <div className="submissions-container">
            <div className="submissions-button">
              <div className="classes" onClick={onClassesContainerClick}>
                <div className="submissions-icon-container">
                  <img
                    className="iconlylight-outline3-user"
                    loading="lazy"
                    alt=""
                    src={SubmissionsIcon}
                  />
                </div>
                <b className="submissions">Submissions</b>
              </div>
            </div>
            <Button
              className="settings5"
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
                color: "#ff0000",
                fontSize: "20",
                background: "#f0f7ff",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#f0f7ff" },
              }}
            >
              Settings
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

LeftBar6.propTypes = {
  className: PropTypes.string,
};

export default LeftBar6;
