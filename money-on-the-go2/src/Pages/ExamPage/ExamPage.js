import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ExamTimer from "./components/ExamTimer";
import "./ExamPage.css";
import { useNavigate, useParams } from "react-router-dom";

const ExamPage = () => {
  const { exam_id } = useParams();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [questions, setQuestions] = useState([''])
  const [duration, setDuration] = useState(1)
  const [resultId, setResultId] = useState(null)

  useEffect(() => {
    const fetchExam = async () => {
      try {
        console.log(`Fetching exam with ID: ${exam_id}`);
        const response = await axios.get(`http://127.0.0.1:5555/get_exam/${exam_id}`);
        console.log('Fetched exam data:', response.data);
        setExam(response.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching exam:', err);
        setError(err.response ? err.response.data : 'Something went wrong');
        setLoading(false);
      }
    };
    fetchExam();
  }, [exam_id]);

  useEffect(() => {
    if (exam) {
      setQuestions(exam.questions || []);
    }
  }, [exam]);

  useEffect(() => {
    if (exam) {
      setDuration(exam.exam_duration || []);
    }
  }, [exam]);

  useEffect(() => {
    const storedHasStarted = localStorage.getItem('hasStarted');
    if (storedHasStarted === 'true') {
      setHasStarted(true);
    }
  }, []);
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // Store user's answers

  const [hasStarted, setHasStarted] = useState(false);
  const examDuration = duration * 60;
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  // Handle text input for open-ended questions
  const handleTextInputChange = (event) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: event.target.value,
    }));
    console.log(answers)
  };

  // Handle choice selection for multiple-choice questions
  const handleChoiceClick = (choice) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: choice,
    }));
    console.log(answers)
  };

  const submitExam = async () =>{
    try{
      return axios.post(`http://127.0.0.1:5555/submit_exam`, {
        exam_id,
        user_answers: answers,
        user_id: user.user_id,
      });
    }
    catch(err){
      console.error(err);
    }
  } 

  const handleTimerEnd = async () => {
    try {
        // Clear any exam-related data from localStorage
        localStorage.removeItem("hasStarted");
        localStorage.removeItem("examStartTime");

        // Submit the exam and get the resultId
        const response = await submitExam();
        const resultId = response.data.result_id;

        // Store the resultId in localStorage (if necessary)
        localStorage.setItem('resultId', resultId);

        // Navigate to the results page using the new resultId
        navigate(`/exam-page-results/${resultId}`);
    } catch (err) {
        console.error("Error during exam submission:", err);
        // Handle the error appropriately (e.g., show an error message to the user)
    }
};

  // Retrieve the selected answer for the current question
  const selectedChoice = answers[currentQuestion.id] || null;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div className="exam-page">
      {!hasStarted ? (
        <div className="start-exam-button">
          <h1 className="examerpro22">ExamerPro™</h1>
          <h2>{exam.exam_name} - {exam.category}</h2>
          <h2>{exam.subcategory}</h2>
          <h3>Made by: {exam.createdBy}</h3>
          <Button
            variant="contained"
            onClick={() => {
              setHasStarted(true);
              localStorage.setItem("hasStarted", true);
            }}
          >
            Start Exam
          </Button>
          <h3>Student Username: {username}</h3>
        </div>
      ) : (<>
        <header className="frame-parent">
          <div className="content-parent">
            <div className="content">
              <h2 className="examerpro221">ExamerPro™</h2>
            </div>
            <div className="content33">
              <a className="a">
                <ExamTimer initialTime={examDuration} onEnd={handleTimerEnd} />
              </a>
            </div>
            <div className="school-info">
              <b className="jamias-high-school">{exam.exam_name} - {exam.category}</b>
              <div className="subject">
                <a className="biology">{exam.subcategory}</a>
              </div>
            </div>
          </div>
        </header>
        <main className="question-content-wrapper">
          <section className="question-content">
            <div className="which-of-the-following-is-the-wrapper">
              <b className="which-of-the">
                {currentQuestion.question_text}
              </b>
            </div>
            <div className="choices">
              {currentQuestion.isChoice ? (
                <div className="choice-a-parent">
                  {currentQuestion.choice1 && (
                    <div
                      className={`choice-a ${selectedChoice === currentQuestion.choice1 ? 'selected' : ''}`}
                      onClick={() => handleChoiceClick(currentQuestion.choice1)}
                    >
                      <div className="choice-a-content">
                        <div className="choice-a-wrapper">
                          <div className="choice-a1">
                            <div className="choice-a-child" />
                            <div className="choice-a-radio-button-parent">
                              <div className="choice-a-radio-button" />
                              <h2 className="a1">A</h2>
                            </div>
                            <b className="mjini-district">{currentQuestion.choice1}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentQuestion.choice2 && (
                    <div
                      className={`choice-b ${selectedChoice === currentQuestion.choice2 ? 'selected' : ''}`}
                      onClick={() => handleChoiceClick(currentQuestion.choice2)}
                    >
                      <div className="choice-b-content">
                        <div className="choice-b-wrapper">
                          <div className="choice-b1">
                            <div className="choice-b-child" />
                            <div className="choice-b-radio">
                              <div className="choice-b-radio-button-parent">
                                <div className="choice-b-radio-button" />
                                <h2 className="b">B</h2>
                              </div>
                            </div>
                            <b className="kigali">{currentQuestion.choice2}</b>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentQuestion.choice3 && (
                    <div
                      className={`choice-c ${selectedChoice === currentQuestion.choice3 ? 'selected' : ''}`}
                      onClick={() => handleChoiceClick(currentQuestion.choice3)}
                    >
                      <div className="choice-c-content">
                        <div className="choice-c-wrapper">
                          <div className="choice-c1">
                            <div className="choice-c-child" />
                            <div className="choice-c-radio">
                              <div className="choice-c-radio-button-parent">
                                <div className="choice-c-radio-button" />
                                <h2 className="c">C</h2>
                              </div>
                            </div>
                            <div className="choice-c-description">
                              <b className="ougadougou">{currentQuestion.choice3}</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {currentQuestion.choice4 && (
                    <div
                      className={`choice-d ${selectedChoice === currentQuestion.choice4 ? 'selected' : ''}`}
                      onClick={() => handleChoiceClick(currentQuestion.choice4)}
                    >
                      <div className="choice-d-content">
                        <div className="choice-d-wrapper">
                          <div className="choice-d1">
                            <div className="choice-d-child" />
                            <div className="choice-d-radio">
                              <div className="choice-d-radio-button-parent">
                                <div className="choice-d-radio-button" />
                                <h2 className="d">D</h2>
                              </div>
                            </div>
                            <div className="choice-d-description">
                              <b className="lisbon">{currentQuestion.choice4}</b>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <TextField
                  className='answer-text-field'
                  label="Your Answer"
                  variant="outlined"
                  fullWidth
                  value={selectedChoice || ''}
                  onChange={handleTextInputChange}
                />
              )}
            </div>
          </section>
        </main>
        <footer className="footer">
          <div className="user-info56">
            <div className="user-name33">
              <h2 className="alex-gathecha">{username}</h2>
            </div>
            <div className="progress">
              <div className="question-tally">
                <div className="question-tally-child" />
                <b className="question-14-of">Question {currentQuestionIndex + 1} of {questions.length}</b>
              </div>
              <div className="question-tally-list">
                {questions.map((_, index) => (
                  <span
                    key={index}
                    className={`tally-item ${index === currentQuestionIndex ? 'active' : ''}`}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </span>
                ))}
              </div>
            </div>
            <div className="navigation174">
              <Button
                className="back-button"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#708df3",
                  borderRadius: "23px",
                  "&:hover": { background: "#708df3" },
                  height: 48,
                }}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex > 0 ? currentQuestionIndex - 1 : 0)}
              >
                Back
              </Button>
              <Button
                className="next-button"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "20",
                  background: "#708df3",
                  borderRadius: "23px",
                  "&:hover": { background: "#708df3" },
                  height: 48,
                }}
                onClick={() => setCurrentQuestionIndex(currentQuestionIndex < questions.length - 1 ? currentQuestionIndex + 1 : currentQuestionIndex)}
              >
                Next
              </Button>
            </div>
          </div>
        </footer>
      </>)}
    </div>
  );
};

export default ExamPage;
