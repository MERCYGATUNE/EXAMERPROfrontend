import React from "react";
import LeftBar4 from "../components/LeftBar4";
import ExamInfo from "../components/ExamInfo";
import GroupComponent1 from "../components/GroupComponent1";
import AlluraAvatar from '../../../../assets/allura-avatar1@2x.png';
import ExamAdder from "../components/ExamAdder"; // Import the ExamAdder component
import "./ExaminerDashboardExams.css";

const ExaminerDashboardExams = () => {
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
          <GroupComponent1 
            propHeight="32px"
            propWidth="362px"
            propHeight1="33px"
            propMinHeight="33"
            propHeight2="32px"
          />
          {/* Repeat GroupComponent1 as needed */}
        </section>

        <section className="exam-adder">
          <ExamAdder /> {/* Add the ExamAdder component */}
        </section>
      </main>
    </div>
  );
};

export default ExaminerDashboardExams;
