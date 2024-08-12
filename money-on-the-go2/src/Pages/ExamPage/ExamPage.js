import { Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import ExamTimer from "./components/ExamTimer";
import "./ExamPage.css";
import { useNavigate } from "react-router-dom";

const ExamPage = () => {
  const exam = [{
    "id": "fcd462b1103c4946a3c9794a04f2bfb2",
    "exam_name": "Loreto High School",
    "category": "FORM 3",
    "subcategory": "MATHEMATICS",
    "createdBy": "Julius Ceasar",
    "createdOn": "2024-08-09 08:37:46.343232",
    "questions": [
        {
            "id": "4954cb3bcd54464783b42009cb380504",
            "question_text": "Which of the following is the capital city of Zimbabwe?",
            "choice1": "Harare",
            "choice2": "Kigali",
            "choice3": "Lusaka",
            "choice4": null,
            "isChoice": true,
            "answer": "Harare",
            "topic": "Geography",
            "exam_id": "fcd462b1103c4946a3c9794a04f2bfb2"
          },
          {
            "id": "4954cb3bcd54464783b42009cb380505",
            "question_text": "Which of the following is the capital city of Zimbabwe?",
            "choice1": null,
            "choice2": null,
            "choice3": null,
            "choice4": null,
            "isChoice": false,
            "answer": "Kigali",
            "topic": "Geography",
            "exam_id": "fcd462b1103c4946a3c9794a04f2bfb2"
          },
          {
            "id": "4954cb3bcd54464783b42009cb380505",
            "question_text": "Which of the following is the capital city of Kenya?",
            "choice1": "Bukaru",
            "choice2": "Aswara",
            "choice3": "Nairobi",
            "choice4": "Kifair",
            "isChoice": true,
            "answer": "Nairobi",
            "topic": "Geography",
            "exam_id": "fcd462b1103c4946a3c9794a04f2bfb2"
          }  
    ]
}]
  const [questions, setQuestions] = useState([''])
  useEffect(() => {
    setQuestions(exam[0].questions)
  }, [])
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState({}); // Store user's answers
  console.log(answers);
  const handleExamCompletion = () => {
    // Your logic for handling exam completion
    localStorage.removeItem("examStartTime");
  };
  
  useEffect(() => {
    const storedHasStarted = localStorage.getItem('hasStarted');
    if (storedHasStarted === 'true') {
      setHasStarted(true);
    }
  }, []);
  const [hasStarted, setHasStarted] = useState(false);
  const examDuration = 1 * 60;
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  // Handle text input for open-ended questions
  const handleTextInputChange = (event) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: event.target.value,
    }));
  };

  // Handle choice selection for multiple-choice questions
  const handleChoiceClick = (choice) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [currentQuestion.id]: choice,
    }));
  };

  const handleTimerEnd = () => {
    localStorage.removeItem("hasStarted")
    localStorage.removeItem("examStartTime");
    navigate("/exam-page-results");
  };

  // Retrieve the selected answer for the current question
  const selectedChoice = answers[currentQuestion.id] || null;

  return (
    <div className="exam-page">
      {!hasStarted ? (
        <div className="start-exam-button">
          <h1 className="examerpro22">ExamerPro™</h1>
          <h2>{exam[0].exam_name} - {exam[0].category}</h2>
          <h2>{exam[0].subcategory}</h2>
          <h3>Made by: {exam[0].createdBy}</h3>
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
            <b className="jamias-high-school">{exam[0].exam_name} - {exam[0].category}</b>
            <div className="subject">
              <a className="biology">{exam[0].subcategory}</a>
            </div>
          </div>
        </div>
      </header>
      <main className="question-content-wrapper">
      {/* <aside className="question-nav">
              <h3>Questions</h3>
              <ul>
                {questions.map((_, index) => (
                  <li
                    key={index}
                    className={currentQuestionIndex === index ? "active" : ""}
                    onClick={() => setCurrentQuestionIndex(index)}
                  >
                    {index + 1}
                  </li>
                ))}
              </ul>
            </aside> */}

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
                    className={`choice-a ${selectedChoice === 'A' ? 'selected' : ''}`}
                    onClick={() => handleChoiceClick('A')}
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
                    className={`choice-b ${selectedChoice === 'B' ? 'selected' : ''}`}
                    onClick={() => handleChoiceClick('B')}
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
                    className={`choice-c ${selectedChoice === 'C' ? 'selected' : ''}`}
                    onClick={() => handleChoiceClick('C')}
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
                    className={`choice-d ${selectedChoice === 'D' ? 'selected' : ''}`}
                    onClick={() => handleChoiceClick('D')}
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
