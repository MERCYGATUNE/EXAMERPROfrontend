import LeftBar5 from "../components/LeftBar5";
import AlluraAvatar from '../../../../assets/allura-avatar1@2x.png'
import "./ExaminerDashboardSubmissions.css";

const ExaminerDashboardSubmissions = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  return (
    <div className="examiner-dashboard-submissions">
      <LeftBar5 />
      <main className="content2">
        <section className="student-info">
          <header className="student-name">
            <div className="student-name-label">
              <div className="name-of-student-wrapper">
                <b className="name-of-student">NAME OF STUDENT</b>
              </div>
              <div className="submissions-list">
                <div className="submission-header">
                  <h1 className="all-student-submissions">
                    All Student Submissions
                  </h1>
                  <div className="submission-items">
                    <div className="submission-item">
                      <div className="submission-details">
                        <b className="name-of-exam">NAME OF EXAM</b>
                      </div>
                      <div className="exam-category">
                        <b className="category">CATEGORY</b>
                      </div>
                      <div className="auto-grade">
                        <b className="category">AUTO- GRADE</b>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="user-profile">
                  <div className="profile-details">
                    <div className="profile-content">
                      <div className="profile">
                        <div className="avatar-image">
                          <div className="allura-avatar" />
                          <img
                            className="allura-avatar-icon2"
                            loading="lazy"
                            alt=""
                            src={AlluraAvatar}
                          />
                        </div>
                        <div className="profile-name">
                          <a className="ayo2">{username}</a>
                        </div>
                      </div>
                    </div>
                    <b className="functions">FUNCTIONS</b>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <div className="school-submissions">
            <div className="teacher-name-parent">
              <div className="teacher-name">
                <b className="mercy-gatune">Mercy Gatune</b>
              </div>
              <div className="school-details">
                <b className="mercy-gatune">Aga Khan High School</b>
              </div>
              <div className="school-details1">
                <b className="form-16">FORM 1</b>
              </div>
              <div className="submission-count">
                <b className="submission-count-label">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review">REVIEW</b>
              </div>
            </div>
          </div>
          <div className="submissions-table">
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
          </div>
          <div className="table-body">
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
            <div className="table-header-name-parent">
              <div className="table-header-name">
                <b className="mercy-gatune1">Mercy Gatune</b>
              </div>
              <div className="table-header-school">
                <b className="mercy-gatune1">Aga Khan High School</b>
              </div>
              <div className="table-header-type">
                <b className="mercy-gatune1">FORM 1</b>
              </div>
              <div className="table-header-count">
                <b className="table-header-count1">78%</b>
              </div>
              <div className="review-wrapper">
                <b className="review1">REVIEW</b>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExaminerDashboardSubmissions;
