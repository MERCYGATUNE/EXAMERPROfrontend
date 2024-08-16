import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
  } from "@mui/material";
  import PropTypes from "prop-types";
  import "./DeleteHistoryPopup.css";
  
  const DeleteHistoryPopup = ({ className = "", onClose }) => {
    return (
      <div className={`delete-history-popup ${className}`}>
        <section className="popup-container">
          <div className="history-confirmation">
            <div className="confirmation-message">
              <h1 className="delete-history">Delete History</h1>
            </div>
            <div className="type-i-want">
              Type “I WANT TO DELETE MY HISTORY” to continue.
            </div>
          </div>
          <div className="input-container">
            <TextField
              className="input-type"
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
        <div className="delete-button-container">
          <Button
            className="delete-button-container-child"
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
  
  DeleteHistoryPopup.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
  };
  
  export default DeleteHistoryPopup;
  