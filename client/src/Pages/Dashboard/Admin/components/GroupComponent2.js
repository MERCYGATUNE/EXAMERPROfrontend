import PropTypes from "prop-types";
import TrashIcon from '../../../../assets/group-1011.svg'
import EditIcon from '../../../../assets/group-1021.svg'
import "./GroupComponent2.css";

const GroupComponent2 = ({ className = "" }) => {
  return (
    <div className={`lenny-row-parent ${className}`}>
      <div className="lenny-row">
        <b className="lenny">Lenny</b>
      </div>
      <div className="lenny-info-row">
        <div className="lenny-details">
          <b className="lennywachira01gmailcom">lennywachira01@gmail.com</b>
          <b className="student">Student</b>
        </div>
      </div>
      <div className="empty-user-row">
        <b className="empty-user-cell">2024-02-05 16:02:35</b>
      </div>
      <div className="frame-parent20">
        <div className="frame-wrapper3">
          <img
            className="frame-child3"
            loading="lazy"
            alt=""
            src={TrashIcon}
          />
        </div>
        <img
          className="frame-child4"
          loading="lazy"
          alt=""
          src={EditIcon}
        />
      </div>
    </div>
  );
};

GroupComponent2.propTypes = {
  className: PropTypes.string,
};

export default GroupComponent2;
