import { Button, TextField } from "@mui/material";
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
        <div className="frame-wrapper">
            <TextField
              className="frame-textfield"
              placeholder="Type"
              variant="outlined"
              sx={{
                "& fieldset": { border: "none" },
                "& .MuiInputBase-root": {
                  height: "80px",
                  backgroundColor: "#fff",
                  borderRadius: "39px",
                  fontSize: "24px",
                },
                "& .MuiInputBase-input": { color: "#000" },
              }}
            />
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
