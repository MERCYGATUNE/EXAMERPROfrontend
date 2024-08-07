import PropTypes from "prop-types";
import ExamIcon from '../../../../assets/3d-casual-life-documents-with-diagram-and-pen.png'
import "./TopPerforming4.css";

const TopPerforming4 = ({ className = "" }) => {
  return (
    <div className={`top-performing2 ${className}`}>
      <div className="make-exam-button">
        <div className="vector-parent">
          <h1 className="make-an-exam">Make an exam now</h1>
        </div>
      </div>
      <div className="top-performing-inner">
        <div className="iconlylight-outlinedocument-parent">
          <img
            className="iconlylight-outlinedocument6"
            alt=""
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
