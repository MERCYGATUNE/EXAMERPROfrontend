import { useState, useCallback } from "react";
import ChangeEmailPopup from "./popups/ChangeEmail/ChangeEmail";
import ChangeUsernamePopup from "./popups/ChangeUsername/ChangeUsername";
import ResetPasswordPopup from "./popups/ResetPassword/ResetPassword";
import PortalPopup from "../components/PortalPopup";
import Content from "../components/Content";
import LeftBar2 from "../components/LeftBar2";
import GroupComponent from "./GroupComponent";
import "./StudentDashboardSettings.css";

const StudentDashboardSettings = () => {
  const [isChangeUsernamePopupOpen, setChangeUsernamePopupOpen] = useState(false);
  const [isChangeEmailPopupOpen, setChangeEmailPopupOpen] = useState(false);
  const [isResetPasswordPopupOpen, setResetPasswordPopupOpen] = useState(false);

  const openChangeUsernamePopup = useCallback(() => {
    setChangeUsernamePopupOpen(true);
  }, []);

  const closeChangeUsernamePopup = useCallback(() => {
    setChangeUsernamePopupOpen(false);
  }, []);

  const openChangeEmailPopup = useCallback(() => {
    setChangeEmailPopupOpen(true);
  }, []);

  const closeChangeEmailPopup = useCallback(() => {
    setChangeEmailPopupOpen(false);
  }, []);

  const openResetPasswordPopup = useCallback(() => {
    setResetPasswordPopupOpen(true);
  }, []);

  const closeResetPasswordPopup = useCallback(() => {
    setResetPasswordPopupOpen(false);
  }, []);



  return (
    <>
      <div className="student-dashboard-settings">
        <div className="student-dashboard-settings-child" />
        <Content />
        <LeftBar2 />
        <div className="user-image-wrapper">
          <div className="user-image">
            <div className="avatar-background" />
            <img
              className="allura-avatar-icon"
              loading="lazy"
              alt=""
              src="/allura-avatar-1@2x.png"
            />
          </div>
        </div>
        <h1 className="ayo">Ayo</h1>
        <div className="ayogmailcom">ayo@gmail.com</div>
        <div className="danger-zone">DANGER ZONE</div>
        <GroupComponent />
        <div className="rectangle-parent" onClick={openChangeUsernamePopup}>
          <div className="frame-child" />
          <div className="change-your-username">CHANGE YOUR USERNAME</div>
        </div>
        <div className="rectangle-group" onClick={openChangeEmailPopup}>
          <div className="frame-child" />
          <div className="change-your-username">CHANGE YOUR EMAIL</div>
        </div>
        <div className="rectangle-container" onClick={openResetPasswordPopup}>
          <div className="frame-child" />
          <div className="change-your-username">RESET YOUR PASSWORD</div>
        </div>
      </div>
      {isChangeUsernamePopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeUsernamePopup}
        >
          <ChangeUsernamePopup onClose={closeChangeUsernamePopup} />
        </PortalPopup>
      )}
      {isChangeEmailPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeEmailPopup}
        >
          <ChangeEmailPopup onClose={closeChangeEmailPopup} />
        </PortalPopup>
      )}
      {isResetPasswordPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeResetPasswordPopup}
        >
          <ResetPasswordPopup onClose={closeResetPasswordPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default StudentDashboardSettings;
