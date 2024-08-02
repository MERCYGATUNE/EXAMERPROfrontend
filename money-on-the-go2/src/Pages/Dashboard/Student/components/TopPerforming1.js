import PropTypes from "prop-types";
import "./TopPerforming1.css";

const TopPerforming1 = ({ className = "" }) => {
  return (
    <div className={`top-performing3 ${className}`}>
      <div className="exam-progress-bar" />
      <div className="left-bookmark-icon-container-wrapper">
        <div className="left-bookmark-icon-container">
          <img
            className="iconlylight-outlinebookmark"
            loading="lazy"
            alt=""
            src="/iconlylight-outlinebookmark.svg"
          />
          <img
            className="left-bookmark-indicator"
            alt=""
            src="/vector-2-1.svg"
          />
        </div>
      </div>
      <div className="right-bookmark-icon-container-parent">
        <div className="right-bookmark-icon-container">
          <img
            className="right-bookmark-indicator"
            loading="lazy"
            alt=""
            src="/vector-3.svg"
          />
          <img
            className="iconlylight-outlinebookmark1"
            alt=""
            src="/iconlylight-outlinebookmark-1.svg"
          />
        </div>
        <h1 className="you-have-completed">
          You have completed 0/5 exams this week.
        </h1>
      </div>
    </div>
  );
};

TopPerforming1.propTypes = {
  className: PropTypes.string,
};

export default TopPerforming1;
