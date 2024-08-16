import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
  } from "@mui/material";
  import PropTypes from "prop-types";
  import "./DeleteAccount.css";
  
  const DeleteAccountPopup = ({ className = "", onClose }) => {
    return (
      <div className={`delete-account-popup ${className}`}>
        <section className="frame-parent">
          <div className="frame-group">
            <div className="delete-account-wrapper">
              <h1 className="delete-account">Delete Account</h1>
            </div>
            <div className="type-i-want1">
              Type “I WANT TO DELETE MY ACCOUNT” to continue.
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
        <div className="delete-account-popup-inner">
          <Button
            className="frame-button"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#ff0000",
              fontSize: "24",
              background: "#fffbfb",
              borderRadius: "37px",
              "&:hover": { background: "#fffbfb" },
              width: 389,
              height: 73,
            }}
          >
            DELETE
          </Button>
        </div>
      </div>
    );
  };
  
  DeleteAccountPopup.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
  };
  
  export default DeleteAccountPopup;
  