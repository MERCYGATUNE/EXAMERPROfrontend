import PropTypes from "prop-types";
import "./TopPerforming.css";
import ExamIcon from '../../../../assets/3d-casual-life-documents-with-diagram-and-pen.png'
import axios from 'axios';
import { useEffect, useState } from 'react';

const TopPerforming = ({ className = "" }) => {
  const [allExamUUIDs, setAllExamUUIDs] = useState([]);
  useEffect(() => {
    const fetchExamUUIDs = async () => {
        try {
            const response = await axios.get(`http://0.0.0.0:5555/get_all_exam_uuids`);
            setAllExamUUIDs(response.data);
            console.log(response.data);
        } catch (err) {
            console.error(err);
        }
    };
    fetchExamUUIDs();
}, ['']);

  const handleRandomExamer = () => {
    const randomIndex = Math.floor(Math.random() * allExamUUIDs.length);
    const examUUID = allExamUUIDs[randomIndex];
    window.location.href = `/exam-page/${examUUID}`; // Redirect to the exam page with the random exam ID
  }


  return (
    <div className={`top-performing2 ${className}`} onClick={handleRandomExamer}>
      <div className="top-performing-inner" />
      <div className="take-exam-button-container">
        <div className="take-exam-button">
        </div>
        <h1 className="take-a-quick">Take a quick exam</h1>
      </div>
      <div className="exam-document-icon-container">
        <div className="exam-document-icon">
          <img
            className="iconlylight-outlinedocument2"
            alt=""
            src={ExamIcon}
          />
        </div>
      </div>
    </div>
  );
};

TopPerforming.propTypes = {
  className: PropTypes.string,
};

export default TopPerforming;
