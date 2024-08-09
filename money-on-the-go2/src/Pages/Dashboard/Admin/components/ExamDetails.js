import GroupComponent3 from "./GroupComponent3";
import PropTypes from "prop-types";
import "./ExamDetails.css";

const ExamDetails = ({ className = "" }) => {
  return (
    <section className={`exam-details1 ${className}`}>
      <div className="exam-info1">
        <div className="exam-attributes">
          <div className="exam-properties">
            <div className="exam-name-input">
              <b className="exam-name">EXAM NAME</b>
            </div>
            <b className="category2">CATEGORY</b>
          </div>
          <b className="sub-category">SUB-CATEGORY</b>
          <div className="metadata">
            <b className="created-by">CREATED-BY</b>
          </div>
          <div className="metadata1">
            <b className="created-on1">CREATED-ON</b>
          </div>
          <div className="functionality1">
            <b className="created-by">FUNCTIONS</b>
          </div>
        </div>
      </div>
      <GroupComponent3 />
    </section>
  );
};

ExamDetails.propTypes = {
  className: PropTypes.string,
};

export default ExamDetails;
