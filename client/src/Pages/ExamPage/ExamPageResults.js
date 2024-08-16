import { useNavigate } from "react-router-dom";
import "./ExamPageResults.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ExamPageResults = () => {
  const navigate = useNavigate();
  const navigateToDashboard = () => {
    navigate("/student-dashboard");
  }
  const { result_id } = useParams();
  const [grade, setGrade] = useState(null);
  const [exam, setExam] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username

  useEffect(() => {
    const fetchGrade = async () => {
      try {
        console.log(`Fetching result with ID: ${result_id}`);
        const response = await axios.get(`http://0.0.0.0:5555/get_submission/${result_id}`);

        const { result, exam } = response.data;
        setGrade(result.grade);
        setExam(exam);

        console.log('Fetched data:', response.data); // Logs the full data retrieved from the server
      } catch (err) {
        console.error('Error fetching exam:', err);
      }
    };
    fetchGrade();
  }, [result_id]);

  useEffect(() => {
    console.log('Grade updated:', grade); // Logs the updated grade after it has been set
  }, [grade]);

  useEffect(() => {
    console.log('Exam data updated:', exam); // Logs the exam data after it has been set
  }, [exam]);


  const gradeRounded = Math.ceil(grade)
  return (
    <div className="exam-page-results">
      <section className="school-info1">
        <header className="branding551">
          <div className="examiner761">
            <b className="examerpro761">ExamerPro™</b>
          </div>
          {/* <img
            className="branding551-child"
            loading="lazy"
            alt=""
            src="/vector-6.svg"
          /> */}
        </header>
        <div className="school-info-inner">
          <div className="frame-group441">
            <div className="frame-grade-wrapper511">
              <div className="jamias-high-school-parent">
                <b className="jamias-high-school1">{exam?.exam_name}</b>
                <div className="examiner567">
                  <b className="form-901">{exam?.category}</b>
                </div>
                <div className="school-name">
                  <b className="biology1">{exam?.subcategory}</b>
                </div>
              </div>
            </div>
            <b className="auto-grader-has-given">
              Auto-Grader has given you a grade of:
            </b>
            <div className="grade-wrapper">
              <b className="b1">🎊 {gradeRounded}% 🎊</b>
            </div>
          </div>
        </div>
      </section>
      <section className="frame-container331">
        <div className="examiner-message-parent">
          <div className="examiner-message">
            <b className="the-examiner-will">{`The examiner will grade your work to give you a final grade. `}</b>
          </div>
          <div className="examiner-message1">
            <b className="click-here-to-container672">
              <span>{`Click `}</span>
              <span className="here334" onClick={navigateToDashboard}>here</span>
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
        <div className="alex-gathecha-grade-wrapper">
          <b className="alex-gathecha1">{username}</b>
        </div>
      </section>
    </div>
  );
};

export default ExamPageResults;