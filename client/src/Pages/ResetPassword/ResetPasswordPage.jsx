import { useState } from "react";
import { useParams } from "react-router-dom";
import Password_icon from '../../assets/icons8-password-50.png';
import { TextField, Button } from "@mui/material";
import Header1 from "../components/Header1";
import { useNavigate } from "react-router-dom";
import "./ResetPasswordPage.css";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password!== newPassword) {
      setMessage('Passwords do not match');
      return;
    }
    const response = await fetch(`http://http://0.0.0.0:10000/reset_password/${token}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ new_password: newPassword }),
    });
    if (response.ok){
      navigate('/signin');
      setMessage();
    }
    const data = await response.json();
    setMessage(data.message + 'Navigating to login...');
  };

  return (
    <div className="sign-in-page">
      <Header1 />
      <main className="login-sections1">
        <div className="login-form-container1">
          <div className="form2">
            <div className="form-text1">
              <h2 className="sign-in">Reset Password</h2>
            </div>
            <div className="credentials-form-container">
              <div className="form3">
                <form className="form4" onSubmit={handleSubmit}>
                  <div className="form-fields1">
                    <TextField
                      type="password"
                      className="password1"
                      placeholder="Password"
                      variant="outlined"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src={Password_icon}
                            alt="email-icon"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.8px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                    <TextField
                      type="password"
                      className="password1"
                      placeholder=" Confirm Password"
                      variant="outlined"
                      value={newPassword}
                      onChange={(e) => setNewPassword(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src={Password_icon}
                            alt="password-icon"
                          />
                        ),
                      }}
                      sx={{
                        "& fieldset": { borderColor: "#d9d9d9" },
                        "& .MuiInputBase-root": {
                          height: "51px",
                          backgroundColor: "#fff",
                          paddingRight: "18.8px",
                        },
                        "& .MuiInputBase-input": { color: "#787878" },
                      }}
                    />
                  </div>
                  <Button
                    className="search-flights-button1"
                    type="submit"
                    disableElevation
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#fff",
                      fontSize: "16",
                      background: "#0400c2",
                      borderRadius: "6px",
                      "&:hover": { background: "#0400c2" },
                      width: 160,
                      height: 52,
                    }}
                  >
                    Reset Password
                  </Button>
                    {message && <p>{message}</p>}
                </form>
              </div>
              <div className="credentials-form-container-child" />
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-container1">
        <div className="footer-wrapper">
          <div className="footer-content1">
            <div className="examerpro-inc-all">
              © 2023 ExamerPro™, Inc. All Rights Reserved
            </div>
            <div className="legal-links">
              <div className="privacy-policy1">Privacy Policy</div>
              <div className="terms-conditions1">{`Terms & Conditions`}</div>
              <div className="contact-us1">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ResetPasswordPage;
