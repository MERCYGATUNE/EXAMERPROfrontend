import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import ExamIcon from '../../../../assets/3d-casual-life-documents-with-diagram-and-pen.png';
import "./TopPerforming4.css";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const TopPerforming4 = ({ className = "" }) => {
  const navigate = useNavigate();

  const onMakeExamButtonClick = useCallback(() => {
    navigate("/add-exams");
  }, [navigate]);
  return (
    <div className={`top-performing2 ${className}`} onClick={onMakeExamButtonClick}>
      <div className="make-exam-button">
        <div className="vector-parent">
          <h1 className="make-an-exam">Make an exam now</h1>
        </div>
      </div>
      <div className="top-performing-inner">
        <div className="iconlylight-outlinedocument-parent">
          <img
            className="iconlylight-outlinedocument6"
            alt="Exam Icon"
            src={ExamIcon}
          />
        </div>
      </div>
    </div>
  );
};

TopPerforming4.propTypes = {
  className: PropTypes.string,
};

export default TopPerforming4;
