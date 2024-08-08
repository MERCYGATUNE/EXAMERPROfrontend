import PropTypes from "prop-types";
import "./TopPerforming.css";
import ExamIcon from '../../../../assets/3d-casual-life-documents-with-diagram-and-pen.png'
import ExamWritingGif from '../../../../assets/paper-cut-task-management-and-planner-organizing-1.gif'
const TopPerforming = ({ className = "" }) => {
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
