import { useState, useCallback } from "react";
import DeleteAccountPopup from "./popups/DeleteAccount/DeleteAccount";
import DeleteHistoryPopup from "./popups/DeleteHistory/DeleteHistoryPopup";
import PortalPopup from "../components/PortalPopup";
import PropTypes from "prop-types";
import "./GroupComponent.css";

const GroupComponent = ({ className = "" }) => {
  const [isDeleteHistoryPopupOpen, setDeleteHistoryPopupOpen] = useState(false);
  const [isDeleteAccountPopupOpen, setDeleteAccountPopupOpen] = useState(false);

  const openDeleteHistoryPopup = useCallback(() => {
    setDeleteHistoryPopupOpen(true);
  }, []);

  const closeDeleteHistoryPopup = useCallback(() => {
    setDeleteHistoryPopupOpen(false);
  }, []);

  const openDeleteAccountPopup = useCallback(() => {
    setDeleteAccountPopupOpen(true);
  }, []);

  const closeDeleteAccountPopup = useCallback(() => {
    setDeleteAccountPopupOpen(false);
  }, []);

  return (
    <>
      <footer className={`group-footer ${className}`}>
        <div className="frame-child7" />
        <div className="rectangle-parent6" onClick={openDeleteHistoryPopup}>
          <div className="frame-child8" />
          <div className="delete-all-history">DELETE ALL HISTORY</div>
        </div>
        <div className="rectangle-parent7">
          <div className="frame-child9" onClick={openDeleteAccountPopup} />
          <div className="delete-this-account">DELETE THIS ACCOUNT</div>
        </div>
        <div className="deletion-warning">
          <div className="once-you-do">
            Once you do any of the above, there is no coming back.
          </div>
        </div>
      </footer>
      {isDeleteHistoryPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeDeleteHistoryPopup}
        >
          <DeleteHistoryPopup onClose={closeDeleteHistoryPopup} />
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
    </>
  );
};

GroupComponent.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent;
