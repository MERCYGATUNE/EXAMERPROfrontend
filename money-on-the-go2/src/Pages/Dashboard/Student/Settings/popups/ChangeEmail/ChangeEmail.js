import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ChangeEmail.css";

const ChangeEmailPopup = ({ className = "", onClose }) => {
  return (
    <div className={`change-email-popup ${className}`}>
      <section className="confirmation-message-parent">
        <div className="confirmation-message1">
          <div className="confirmation-title">
            <h1 className="are-you-sure">Are you sure?</h1>
          </div>
          <div className="type-your-new">
            Type your new email below if you are certain.
          </div>
        </div>
        <div className="email-input-wrapper">
          <div className="email-input">
            <div className="email-input-child" />
            <div className="email1">Email</div>
          </div>
        </div>
      </section>
      <div className="submit-button-frame">
        <Button
          className="submit-button"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#0077ff",
            fontSize: "24",
            background: "#fffbfb",
            borderRadius: "37px",
            "&:hover": { background: "#fffbfb" },
            width: 389,
            height: 73,
          }}
        >
          SUBMIT
        </Button>
      </div>
    </div>
  );
};

ChangeEmailPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ChangeEmailPopup;
