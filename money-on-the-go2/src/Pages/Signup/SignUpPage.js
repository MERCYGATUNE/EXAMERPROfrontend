import { useCallback } from "react";
import Email_icon from '../../assets/icons8-email-50.png'
import Password_icon from '../../assets/icons8-password-50.png'
import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";
import Header1 from "../components/Header1";

const SignUpPage = () => {
  const navigate = useNavigate();

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <Header1/>
      <main className="login-sections">
        <div className="login-form-container">
          <div className="form">
            <div className="form-text">
              <h2 className="create-account">Create Account</h2>
            </div>
            <div className="form-fields-container">
              <form className="form1">
                <div className="form-fields">
                  <TextField
                    className="email"
                    placeholder="Email address"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src={Email_icon}
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
                    className="password"
                    placeholder="Password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src={Password_icon}
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
                    className="confirm-password"
                    placeholder="Confirm password"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src={Password_icon}
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
                  className="search-flights-button"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "16",
                    background: "#0400c2",
                    borderRadius: "8px",
                    "&:hover": { background: "#0400c2" },
                    width: 160,
                    height: 52,
                  }}
                >
                  Sign up
                </Button>
              </form>
              <div className="divider" />
              <div
                className="i-already-have-container"
                onClick={onIAlreadyHaveClick}
              >
                <span>{`I already have an account. `}</span>
                <span className="login">Login</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer-container">
        <div className="footer-content">
          <div className="examerproinc-all-rights-res-parent">
            <div className="examerproinc-all-rights">
              © 2023 ExamerPro™,Inc. All Rights Reserved
            </div>
            <div className="footer-links">
              <div className="privacy-policy">Privacy Policy</div>
              <div className="terms-conditions">{`Terms & Conditions`}</div>
              <div className="contact-us">Contact us</div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignUpPage;
