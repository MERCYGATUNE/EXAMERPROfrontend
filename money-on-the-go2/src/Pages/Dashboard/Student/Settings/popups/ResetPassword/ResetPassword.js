import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import "./ResetPassword.css";

const ResetPasswordPopup = ({ className = "", onClose }) => {
  return (
    <div className={`reset-password-popup ${className}`}>
      <section className="password-reset-popup">
        <div className="email-input-container">
          <div className="password-reset-title">
            <h1 className="reset-password">Reset Password</h1>
          </div>
          <div className="type-the-recovery">
            Type the recovery email you want to send the link to.
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
      <div className="submit-button-container">
        <Button
          className="submit-button-wrapper"
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

ResetPasswordPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ResetPasswordPopup;
