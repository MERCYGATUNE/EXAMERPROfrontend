import { Button } from "@mui/material";
import LeftBar1 from "../components/LeftBar1";
import "./StudentDashboardExams.css";

const StudentDashboardExams = () => {
  return (
    <div className="student-dashboard-exams">
      <div className="student-dashboard-exams-child" />
      <LeftBar1 />
      <main className="content">
        <section className="exam-headers">
          <div className="exam-history">
            <div className="exam-history-header">
              <div className="completed-exams-container">
                <b className="name">NAME</b>
              </div>
              <div className="recently-completed-container">
                <div className="recent-exam-info">
                  <h1 className="recently-completed-exams">
                    Recently Completed Exams
                  </h1>
                  <div className="subject-category-container">
                    <div className="exam-info">
                      <b className="category">CATEGORY</b>
                      <b className="subject">SUBJECT</b>
                    </div>
                  </div>
                </div>
                <div className="profile-container">
                  <div className="profile-info">
                    <div className="profile">
                      <div className="profile-child" />
                      <div className="profile-avatar">
                        <div className="allura-avatar" />
                        <img
                          className="allura-avatar-icon1"
                          loading="lazy"
                          alt=""
                          src="/allura-avatar@2x.png"
                        />
                      </div>
                      <div className="user-name-container">
                        <a className="ayo1">Ayo</a>
                      </div>
                    </div>
                  </div>
                  <b className="completed-on">COMPLETED ON</b>
                </div>
              </div>
            </div>
          </div>
          <div className="exam-headers-inner">
            <div className="group-div">
              <div className="rectangle-div" />
              <div className="school-name-container">
                <b className="jamias-high-school">Jamias High School Exam</b>
              </div>
              <div className="form-container">
                <b className="form-1">FORM 1</b>
              </div>
              <div className="subject-container">
                <b className="biology">BIOLOGY</b>
              </div>
              <b className="exam-button-container">2024-04-3 12:20</b>
            </div>
          </div>
          <div className="exam-headers-child">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="jamias-high-school-exam-wrapper">
                <b className="form-1">Jamias High School Exam</b>
              </div>
              <div className="form-1-wrapper">
                <b className="form-1">FORM 1</b>
              </div>
              <div className="biology-wrapper">
                <b className="biology">BIOLOGY</b>
              </div>
              <b className="exam-button-container">2024-04-3 12:20</b>
            </div>
          </div>
          <div className="exam-headers-child">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="jamias-high-school-exam-wrapper">
                <b className="form-1">Jamias High School Exam</b>
              </div>
              <div className="form-1-wrapper">
                <b className="form-1">FORM 1</b>
              </div>
              <div className="biology-wrapper">
                <b className="biology">BIOLOGY</b>
              </div>
              <b className="exam-button-container">2024-04-3 12:20</b>
            </div>
          </div>
          <div className="recommended-exams-header-wrapper">
            <div className="recommended-exams-header">
              <div className="view-history-button-container">
                <Button
                  className="view-history-button-container-child"
                  disableElevation
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    color: "#fff",
                    fontSize: "20",
                    background: "#0077ff",
                    borderRadius: "30px",
                    "&:hover": { background: "#0077ff" },
                    width: 337,
                    height: 59,
                  }}
                >
                  VIEW ALL HISTORY
                </Button>
              </div>
              <h1 className="recommended-exams">Recommended Exams</h1>
            </div>
          </div>
          <div className="exam-headers-child">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="jamias-high-school-exam-wrapper">
                <b className="form-1">Jamias High School Exam</b>
              </div>
              <div className="form-1-wrapper">
                <b className="form-1">FORM 1</b>
              </div>
              <div className="biology-wrapper">
                <b className="biology">BIOLOGY</b>
              </div>
              <b className="exam-button-container">2024-04-3 12:20</b>
            </div>
          </div>
          <div className="exam-headers-child">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="jamias-high-school-exam-wrapper">
                <b className="form-1">Jamias High School Exam</b>
              </div>
              <div className="form-1-wrapper">
                <b className="form-1">FORM 1</b>
              </div>
              <div className="biology-wrapper">
                <b className="biology">BIOLOGY</b>
              </div>
              <b className="exam-button-container">2024-04-3 12:20</b>
            </div>
          </div>
          <div className="exam-headers-inner3">
            <div className="rectangle-parent1">
              <div className="rectangle-div" />
              <div className="jamias-high-school-exam-wrapper">
                <b className="form-1">Jamias High School Exam</b>
              </div>
              <div className="form-1-wrapper">
                <b className="form-1">FORM 1</b>
              </div>
              <div className="biology-wrapper">
                <b className="biology">BIOLOGY</b>
              </div>
              <b className="exam-button-container">2024-04-3 12:20</b>
            </div>
          </div>
          <div className="view-all-exams-button-containe">
            <Button
              className="view-history-button-container-child"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "20",
                background: "#0077ff",
                borderRadius: "30px",
                "&:hover": { background: "#0077ff" },
                width: 337,
                height: 59,
              }}
            >
              VIEW ALL EXAMS
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default StudentDashboardExams;
