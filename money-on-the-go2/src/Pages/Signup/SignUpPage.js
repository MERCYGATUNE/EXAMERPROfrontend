import { useCallback, useState } from "react";
import axios from "axios";
import Email_icon from '../../assets/icons8-email-50.png';
import Password_icon from '../../assets/icons8-password-50.png';
import Username_icon from '../../assets/icons8-username-50.png';
import { TextField, Button } from "@mui/material";
import Header1 from "../components/Header1";
import { useNavigate } from "react-router-dom";
import "./SignUpPage.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5555/register", {
        email,
        password,
        username,
      });
      if (response.data.message === "User registered successfully") {
        // Handle successful registration, e.g., redirect to sign-in page
        navigate("/signin");
      }
    } catch (error) {
      setError(error.response?.data?.message || error.message);
    }
  };

  const onIAlreadyHaveClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);

  return (
    <div className="sign-up-page">
      <Header1 />
      <main className="login-sections">
        <div className="login-form-container">
          <div className="form">
            <div className="form-text">
              <h2 className="create-account">Create Account</h2>
            </div>
            <div className="form-fields-container">
              <form className="form1" onSubmit={handleSignUp}>
                <div className="form-fields">
                <TextField
                    className="password"
                    placeholder="Username"
                    variant="outlined"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src={Username_icon}
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
                    className="password"
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
                    className="password"
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
                  <TextField
                    type="password"
                    className="confirm-password"
                    placeholder="Confirm password"
                    variant="outlined"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    InputProps={{
                      endAdornment: (
                        <img
                          width="20px"
                          height="20px"
                          src={Password_icon}
                          alt="confirm-password-icon"
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
                  type="submit"
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
                {error && <div style={{ color: "red" }}>{error}</div>}
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
