import {
    TextField,
    InputAdornment,
    Icon,
    IconButton,
    Button,
  } from "@mui/material";
  import PropTypes from "prop-types";
  import "./DeleteAccount.css";
  import { useState } from "react";
import { useNavigate } from "react-router-dom";
  
  const DeleteAccountPopup = ({ className = "", onClose }) => {
  const user = JSON.parse(localStorage.getItem('user'));
  const user_id = user.user_id;
  const navigate = useNavigate()

  const [message, setMessage] = useState('')
  const [text, setText] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(text !== 'I WANT TO DELETE MY ACCOUNT'){
      setMessage('Text does not match');
      return;
    }else{
      const response = await fetch('http://127.0.0.1:5555/delete_account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({user_id}),
      });
      const data = await response.json();
      console.log(data.message);
      localStorage.removeItem('user')
      navigate('/signup')
      setMessage(data.message);
    }
  };
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
              value={text}
              onChange={(e) => setText(e.target.value)}
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
            onClick={handleSubmit}
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
        {message && <p>{message}</p>}
      </div>
    );
  };
  
  DeleteAccountPopup.propTypes = {
    className: PropTypes.string,
    onClose: PropTypes.func,
  };
  
  export default DeleteAccountPopup;
  