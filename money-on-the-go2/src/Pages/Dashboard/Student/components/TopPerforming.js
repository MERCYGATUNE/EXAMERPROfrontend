import PropTypes from "prop-types";
import "./TopPerforming.css";
import ExamIcon from '../../../../assets/3d-casual-life-documents-with-diagram-and-pen.png'
import axios from 'axios';
import { useEffect } from 'react';

const TopPerforming = ({ className = "" }) => {
  useEffect(() => {
    const fetchExamUUIDs = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:5555/get_all_exam_uuids`);
            console.log(response.data)
        } catch (err) {
            console.error(err);
        }
    };
    fetchExamUUIDs();
}, ['']);
  return (
    <div className={`top-performing2 ${className}`}>
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
