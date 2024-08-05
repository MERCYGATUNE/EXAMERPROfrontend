import { useCallback, useState } from "react";
import axios from "axios";
import Email_icon from '../../assets/icons8-email-50.png';
import Password_icon from '../../assets/icons8-password-50.png';
import { TextField, Button } from "@mui/material";
import Header1 from "../components/Header1";
import { useNavigate } from "react-router-dom";
import "./SignInPage.css";

const SignInPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5555/login", {
        email,
        password,
      });
      if (response.data.message === "Login successful") {
        // Redirect to subscription page after successful login
        navigate("/subscription");
      }
    } catch (error) {
      setError("Invalid email or password");
    }
  };

  const onDontHaveAnClick = useCallback(() => {
    navigate("/signup");
  }, [navigate]);

  return (
    <div className="sign-in-page">
      <Header1 />
      <main className="login-sections1">
        <div className="login-form-container1">
          <div className="form2">
            <div className="form-text1">
              <h2 className="sign-in">Sign in</h2>
            </div>
            <div className="credentials-form-container">
              <div className="form3">
                <form className="form4" onSubmit={handleSignIn}>
                  <div className="form-fields1">
                    <TextField
                      className="email1"
                      placeholder="Email address"
                      variant="outlined"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      InputProps={{
                        endAdornment: (
                          <img
                            width="20px"
                            height="20px"
                            src={Email_icon}
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
                    Sign in
                  </Button>
                  {error && <div style={{ color: "red" }}>{error}</div>}
                </form>
              </div>
              <div className="credentials-form-container-child" />
              <div
                className="dont-have-an-container"
                onClick={onDontHaveAnClick}
              >
                <span>{`Don’t have an account yet? `}</span>
                <span className="sign-up">Sign up</span>
              </div>
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

export default SignInPage;
