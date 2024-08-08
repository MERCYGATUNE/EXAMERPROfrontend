import "./Unauthorized.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Unauthorized = () => {
  const navigate = useNavigate();
  const onBacktoLoginClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);
  return (
    <div className="unauthorized">
      <div className="exam-pro">
        <h2 className="examerpro">ExamerPro™</h2>
      </div>
      <section className="unauthorised-access">
        <h1 className="h1">🤷🏾‍♂️</h1>
        <div className="div">401</div>
      </section>
      <div className="error-message">
        <div className="looks-like-youre">
          Looks like you’re unauthorised to enter this page.
        </div>
        <div className="login-link-container">
          <div className="click-here-to-container">
            <span>{`Click `}</span>
            <span className="here" onClick={onBacktoLoginClick}>here</span>
            <span> to go back to login.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
