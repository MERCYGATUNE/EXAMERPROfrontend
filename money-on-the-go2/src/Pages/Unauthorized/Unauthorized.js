import "./Unauthorized.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Unauthorized = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user.role
  const onBacktoLoginClick = useCallback(() => {
    navigate("/signin");
  }, [navigate]);
  const onBacktoSpecifiedDashboard = useCallback(() => {
    if (role === 'examiner') {
      navigate("/examiner-dashboard");
    } else if (role === 'student') {
      navigate("/student-dashboard");
    } else if (role === 'admin') {
      navigate("/admin-dashboard");
    } else if (role === 'user') {
      navigate("/subscription");
    }
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
        <div className="login-link-container">
          <div className="click-here-to-container">
            <span>{`Click `}</span>
            <span className="here" onClick={onBacktoSpecifiedDashboard}>here</span>
            <span> to go back to your specified page.</span>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
