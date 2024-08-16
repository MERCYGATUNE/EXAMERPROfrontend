import React, { useEffect, useState, useMemo } from "react";
import LeftBar4 from "../components/LeftBar4";
import ExamInfo from "../components/ExamInfo";
import GroupComponent1 from "../components/GroupComponent1";
import TrashIcon from '../../../../assets/group-101.svg';
import EditIcon from '../../../../assets/group-102.svg';
import AlluraAvatar from '../../../../assets/allura-avatar1@2x.png';
import "./ExaminerDashboardExams.css";

const ExaminerDashboardExams = () => {
  const [data, setData] = useState();
  const examiner_id = localStorage.getItem('userId');
  const examDetailsStyle = useMemo(() => {
    return {
      height: '32px',
    };
  }, ['32px']);

  const examTypeStyle = useMemo(() => {
    return {
      width: '362px',
      height: '33px',
    };
  }, ['362px', '33px']);

  const examSubjectStyle = useMemo(() => {
    return {
      minHeight: '33',
    };
  }, ['33']);

  const formLabelStyle = useMemo(() => {
    return {
      height: '32px',
    };
  }, ['32px']);
  const fetchData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5555/get_exam_for_examiner/${examiner_id}`, {
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

  const handleDeleteExamClick = async (exam_id) => {
    try {
      const response = await fetch('http://127.0.0.1:5555/delete_exam', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ exam_id }),
      });
      const data = await response.json();
      console.log(data.message);
      fetchData();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  if (!data) return null;
  if (!data.examiner_exams) return (<><h1>No exams to display</h1></>);
  return (
    <div className="examiner-dashboard-exams">
      <LeftBar4 />
      <main className="content33">
        <section className="exam-list">
          <ExamInfo
            allYourExams="All Your Exams"
            alluraAvatar={AlluraAvatar}
            fUNCTIONS="FUNCTIONS"
          />
          {data.examiner_exams ? (
            data.examiner_exams.map((exam) => (
              <>
          <div className={`exam-details-parent`} key={exam.id}>
            <div className="exam-details" style={examDetailsStyle}>
              <b className="jamias-high-school6">{exam?.exam_name}</b>
            </div>
            <div className="exam-type" style={examTypeStyle}>
              <div className="exam-subject" style={examSubjectStyle}>
                <div className="form-label" style={formLabelStyle}>
                  <b className="jamias-high-school6">{exam?.category}</b>
                </div>
                <b className="biology6">{exam?.subcategory}</b>
              </div>
            </div>
            <div className="exam-actions">
              <img
                className="exam-actions-child"
                loading="lazy"
                alt=""
                src={TrashIcon}
                onClick={() => {handleDeleteExamClick(exam.id)}}
              />
              <img
                className="exam-actions-child"
                loading="lazy"
                alt=""
                src={EditIcon}
              />
            </div>
          </div>
            </>
            ))
          ) : (
            <>
            <h1>No exams to render</h1>
            </>
          )}
        </section>

      </main>
    </div>
  );
};

export default ExaminerDashboardExams;
