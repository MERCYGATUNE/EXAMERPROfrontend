import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ChangeUsername.css";

const ChangeUsernamePopup = ({ className = "", onClose }) => {
  return (
    <div className={`change-username-popup ${className}`}>
      <section className="change-username">
        <div className="confirmation">
          <div className="confirmation-message2">
            <h1 className="are-you-sure1">Are you sure?</h1>
          </div>
          <div className="type-your-new1">
            Type your new username below if you are certain.
          </div>
        </div>
        <div className="input">
          <div className="username-input">
            <div className="username-input-child" />
            <div className="username">Username</div>
          </div>
        </div>
      </section>
      <div className="submit-action">
        <Button
          className="submit-button1"
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

ChangeUsernamePopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ChangeUsernamePopup;
