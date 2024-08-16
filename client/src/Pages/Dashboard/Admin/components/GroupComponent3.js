import PropTypes from "prop-types";
import TrashIcon from '../../../../assets/group-1011.svg'
import EditIcon from '../../../../assets/group-1021.svg'
import "./GroupComponent3.css";

const GroupComponent3 = ({ className = "" }) => {
  return (
    <div className={`selection-container-parent ${className}`}>
      <div className="selection-container">
        <div className="selected-items">
          <div className="selection-details">
            <b className="july-high-school">July High School</b>
          </div>
          <div className="form-selection">
            <b className="form-116">Form 1</b>
          </div>
          <b className="biology7">Biology</b>
        </div>
      </div>
      <div className="topic-selection">
        <div className="topic-details">
          <b className="julius-ceasar">Julius Ceasar</b>
          <div className="placeholder-container">
            <b className="empty-selection">2024-02-05 16:02:35</b>
          </div>
        </div>
      </div>
      <div className="frame-parent21">
        <div className="frame-wrapper4">
          <img
            className="frame-child5"
            loading="lazy"
            alt=""
            src={TrashIcon}
          />
        </div>
        <img
          className="frame-child6"
          loading="lazy"
          alt=""
          src={EditIcon}
        />
      </div>
    </div>
  );
};

GroupComponent3.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent3;
