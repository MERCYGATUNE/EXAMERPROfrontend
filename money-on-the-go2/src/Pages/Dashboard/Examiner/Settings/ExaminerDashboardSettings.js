import { useState, useCallback } from "react";
import { Button } from "@mui/material";
import DeleteHistoryPopup from "./popups/DeleteHistory/DeleteHistoryPopup";
import DeleteAccountPopup from "./popups/DeleteAccount/DeleteAccount";
import ChangeUsernamePopup from "./popups/ChangeUsername/ChangeUsername";
import ChangeEmailPopup from "./popups/ChangeEmail/ChangeEmail";
import ResetPasswordPopup from "./popups/ResetPassword/ResetPassword";
import PortalPopup from "../../Student/components/PortalPopup";
import AlluraAvatar1 from '../../../../assets/allura-avatar-1@2x.png'
import AlluraAvatar11 from '../../../../assets/allura-avatar-11@2x.png'
import FrameComponent2 from "../components/FrameComponent2";
import LeftBar6 from "../components/LeftBar6";
import "./ExaminerDashboardSettings.css";

const ExaminerDashboardSettings = () => {
  const [isDeleteHistoryPopupExaminerOpen, setDeleteHistoryPopupExaminerOpen] =
    useState(false);
  const [isDeleteAccountPopupOpen, setDeleteAccountPopupOpen] = useState(false);
  const [
    isChangeUsernamePopupExaminerOpen,
    setChangeUsernamePopupExaminerOpen,
  ] = useState(false);
  const [isChangeEmailPopupExaminerOpen, setChangeEmailPopupExaminerOpen] =
    useState(false);
  const [isResetPasswordPopupExaminerOpen, setResetPasswordPopupExaminerOpen] =
    useState(false);

  const openDeleteHistoryPopupExaminer = useCallback(() => {
    setDeleteHistoryPopupExaminerOpen(true);
  }, []);

  const closeDeleteHistoryPopupExaminer = useCallback(() => {
    setDeleteHistoryPopupExaminerOpen(false);
  }, []);

  const openDeleteAccountPopup = useCallback(() => {
    setDeleteAccountPopupOpen(true);
  }, []);

  const closeDeleteAccountPopup = useCallback(() => {
    setDeleteAccountPopupOpen(false);
  }, []);

  const openChangeUsernamePopupExaminer = useCallback(() => {
    setChangeUsernamePopupExaminerOpen(true);
  }, []);

  const closeChangeUsernamePopupExaminer = useCallback(() => {
    setChangeUsernamePopupExaminerOpen(false);
  }, []);

  const openChangeEmailPopupExaminer = useCallback(() => {
    setChangeEmailPopupExaminerOpen(true);
  }, []);

  const closeChangeEmailPopupExaminer = useCallback(() => {
    setChangeEmailPopupExaminerOpen(false);
  }, []);

  const openResetPasswordPopupExaminer = useCallback(() => {
    setResetPasswordPopupExaminerOpen(true);
  }, []);

  const closeResetPasswordPopupExaminer = useCallback(() => {
    setResetPasswordPopupExaminerOpen(false);
  }, []);

  return (
    <>
      <div className="examiner-dashboard-settings">
        <FrameComponent2
          alluraAvatarBackgroundColor="#ff0000"
          alluraAvatar={AlluraAvatar1}
        />
        <LeftBar6 />
        <div className="avatar-wrapper-wrapper">
          <div className="avatar-wrapper">
            <div className="avatar-placeholder" />
            <img
              className="allura-avatar-icon1"
              loading="lazy"
              alt=""
              src={AlluraAvatar11}
            />
          </div>
        </div>
        <h1 className="ayo1">Ayo</h1>
        <div className="ayogmailcom1">ayo@gmail.com</div>
        <div className="danger-zone1">DANGER ZONE</div>
        <footer className="group-footer">
          <div
            className="delete-all-history-wrapper"
            onClick={openDeleteHistoryPopupExaminer}
          >
            <div className="delete-all-history">DELETE ALL HISTORY</div>
          </div>
          <div
            className="delete-all-history-wrapper"
            onClick={openDeleteAccountPopup}
          >
            <div className="delete-all-history">DELETE THIS ACCOUNT</div>
          </div>
          <div className="warning-container">
            <div className="once-you-do">
              Once you do any of the above, there is no coming back.
            </div>
          </div>
        </footer>
        <Button
          className="examiner-dashboard-settings-child"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff5f5",
            fontSize: "20",
            background: "#f75555",
            borderRadius: "20px",
            "&:hover": { background: "#f75555" },
            width: 596,
            height: 67,
          }}
          onClick={openChangeUsernamePopupExaminer}
        >
          CHANGE YOUR USERNAME
        </Button>
        <Button
          className="examiner-dashboard-settings-item"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff5f5",
            fontSize: "20",
            background: "#f75555",
            borderRadius: "20px",
            "&:hover": { background: "#f75555" },
            width: 596,
            height: 67,
          }}
          onClick={openChangeEmailPopupExaminer}
        >
          CHANGE YOUR EMAIL
        </Button>
        <Button
          className="examiner-dashboard-settings-inner"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff5f5",
            fontSize: "20",
            background: "#f75555",
            borderRadius: "20px",
            "&:hover": { background: "#f75555" },
            width: 596,
            height: 67,
          }}
          onClick={openResetPasswordPopupExaminer}
        >
          RESET YOUR PASSWORD
        </Button>
      </div>
      {isDeleteHistoryPopupExaminerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeleteHistoryPopupExaminer}
        >
          <DeleteHistoryPopup onClose={closeDeleteHistoryPopupExaminer} />
        </PortalPopup>
      )}
      {isDeleteAccountPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeleteAccountPopup}
        >
          <DeleteAccountPopup onClose={closeDeleteAccountPopup} />
        </PortalPopup>
      )}
      {isChangeUsernamePopupExaminerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeUsernamePopupExaminer}
        >
          <ChangeUsernamePopup onClose={closeChangeUsernamePopupExaminer} />
        </PortalPopup>
      )}
      {isChangeEmailPopupExaminerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeChangeEmailPopupExaminer}
        >
          <ChangeEmailPopup onClose={closeChangeEmailPopupExaminer} />
        </PortalPopup>
      )}
      {isResetPasswordPopupExaminerOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeResetPasswordPopupExaminer}
        >
          <ResetPasswordPopup onClose={closeResetPasswordPopupExaminer} />
        </PortalPopup>
      )}
    </>
  );
};

export default ExaminerDashboardSettings;
