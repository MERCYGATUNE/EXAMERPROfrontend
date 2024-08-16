import { Button, TextField} from "@mui/material";
import PropTypes from "prop-types";
import "./ChangeUsername.css";
import { useState } from "react";

const ChangeUsernamePopup = ({ className = "", onClose }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user.user_id;
  const username = user.username

  const [message, setMessage] = useState('')
  const [new_username, setNewUsername] = useState(username);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('http://127.0.0.1:5555/change_username', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ new_username, user_id}),
    });
    const data = await response.json();
    setMessage(data.message);
  };
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
        <div className="frame-wrapper">
            <TextField
              className="frame-textfield"
              placeholder="Type"
              value={new_username}
              onChange={(e) => {
                setNewUsername(e.target.value);
              }}
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
      <div className="submit-action">
        <Button
          className="submit-button1"
          onClick={handleSubmit}
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
      {message && <p>{message}</p>}
    </div>
  );
};

ChangeUsernamePopup.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
};

export default ChangeUsernamePopup;
