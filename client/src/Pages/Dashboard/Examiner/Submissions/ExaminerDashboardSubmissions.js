import LeftBar5 from "../components/LeftBar5";
import AlluraAvatar from '../../../../assets/allura-avatar1@2x.png'
import "./ExaminerDashboardSubmissions.css";
import { useEffect, useState } from "react";

const ExaminerDashboardSubmissions = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  const examiner_id = localStorage.getItem('userId');
  const [data, setData] = useState(null);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://http://0.0.0.0:10000/get_submissions/${examiner_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (response.ok) {
        const jsonData = await response.json();
        console.log(jsonData);
        setData(jsonData);
      } else {
        console.error('Failed to fetch data:', response.statusText);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
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
            {data ?(
              data.map((submission) => {
                <>
            <div className="teacher-name-parent">
              <div className="teacher-name">
                <b className="mercy-gatune">{submission.user_name}</b>
              </div>
              <div className="school-details">
                <b className="mercy-gatune">{submission.exam_name}</b>
              </div>
              <div className="school-details1">
                <b className="form-16">{submission.exam_category}</b>
              </div>
              <div className="submission-count">
                <b className="submission-count-label">{submission.grade}</b>
              </div>
              <div className="review-wrapper">
                <b className="review">REVIEW</b>
              </div>
            </div>
                
                </>
              })
              
            
            ): (<>
            <h1> NO SUBMISSIONS YET!</h1>
            </>)}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ExaminerDashboardSubmissions;
