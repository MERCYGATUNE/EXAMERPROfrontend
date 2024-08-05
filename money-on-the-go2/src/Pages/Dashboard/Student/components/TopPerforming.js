import PropTypes from "prop-types";
import "./TopPerforming.css";

const TopPerforming = ({ className = "" }) => {
  return (
    <div className={`top-performing2 ${className}`}>
      <div className="top-performing-inner" />
      <div className="take-exam-button-container">
        <div className="take-exam-button">
          <img
            className="take-exam-button-icons"
            alt=""
            src="/take-exam-button-icons.svg"
          />
          <img
            className="take-exam-button-icons1"
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
        </div>
        <h1 className="take-a-quick">Take a quick exam</h1>
      </div>
      <div className="exam-document-icon-container">
        <div className="exam-document-icon">
          <img
            className="iconlylight-outlinedocument2"
            alt=""
            src="/iconlylight-outlinedocument2.svg"
          />
          <img
            className="iconlylight-outlinedocument3"
            loading="lazy"
            alt=""
            src="/iconlylight-outlinedocument-1.svg"
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
