import PropTypes from "prop-types";
import CheckListBox from '../../../../assets/chromed-tablet-with-the-checklist.png'
import "./TopPerforming1.css";

const TopPerforming1 = ({ className = "" }) => {
  return (
    <div className={`top-performing3 ${className}`}>
      <div className="exam-progress-bar" />
      <div className="left-bookmark-icon-container-wrapper">
        <div className="left-bookmark-icon-container">
        </div>
      </div>
      <div className="right-bookmark-icon-container-parent">
        <div className="right-bookmark-icon-container">
          <img
            className="iconlylight-outlinebookmark1"
            alt=""
            src={CheckListBox}
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
