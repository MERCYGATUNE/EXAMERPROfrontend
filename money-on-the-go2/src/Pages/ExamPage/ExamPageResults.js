import { useNavigate } from "react-router-dom";
import "./ExamPageResults.css";

const ExamPageResults = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/student-dashboard");
  }
  return (
    <div className="exam-page-results">
      <section className="school-info1">
        <header className="branding">
          <div className="examiner">
            <b className="examerpro1">ExamerPro™</b>
          </div>
          {/* <img
            className="branding-child"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          /> */}
        </header>
        <div className="school-info-inner">
          <div className="frame-group">
            <div className="frame-wrapper">
              <div className="jamias-high-school-parent">
                <b className="jamias-high-school1">Jamias High School</b>
                <div className="examiner1">
                  <b className="form-1">FORM 1</b>
                </div>
                <div className="school-name">
                  <b className="biology1">BIOLOGY</b>
                </div>
              </div>
            </div>
            <b className="auto-grader-has-given">
              Auto-Grader has given you a grade of:
            </b>
            <div className="wrapper">
              <b className="b1">🎊 89% 🎊</b>
            </div>
          </div>
        </div>
      </section>
      <section className="frame-container">
        <div className="examiner-message-parent">
          <div className="examiner-message">
            <b className="the-examiner-will">{`The examiner will grade your work to give you a final grade. `}</b>
          </div>
          <div className="examiner-message1">
            <b className="click-here-to-container">
              <span>{`Click `}</span>
              <span className="here" onClick={navigateToDashboard}>here</span>
              <span> to go back to the dashboard.</span>
            </b>
          </div>
          {/* <img
            className="frame-item"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          /> */}
        </div>
        <div className="alex-gathecha-wrapper">
          <b className="alex-gathecha1">Alex Gathecha</b>
        </div>
      </section>
    </div>
  );
};

export default ExamPageResults;