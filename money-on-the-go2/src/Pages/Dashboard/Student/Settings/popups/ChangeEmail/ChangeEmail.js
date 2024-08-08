import { Button, TextField } from "@mui/material";
import PropTypes from "prop-types";
import "./ChangeEmail.css";
import { useState } from "react";

const ChangeEmailPopup = ({ className = "", onClose }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user.user_id;
  const email = user.email

  const [message, setMessage] = useState('')
  const [new_email, setNewEmail] = useState(email);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:5555/change_email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ new_email, user_id}),
    });
    const data = await response.json();
    setMessage(data.message);
  };
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
              onChange={(e) => setNewEmail(e.target.value)}
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
          onClick={handleSubmit}
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
      {message && <p>{message}</p>}
    </div>
  );
};

ChangeEmailPopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ChangeEmailPopup;
