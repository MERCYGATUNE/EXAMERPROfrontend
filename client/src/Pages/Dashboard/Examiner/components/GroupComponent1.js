import { useMemo } from "react";
import PropTypes from "prop-types";
import TrashIcon from '../../../../assets/group-101.svg';
import EditIcon from '../../../../assets/group-102.svg';
import "./GroupComponent1.css";

const GroupComponent1 = ({
  className = "",
  propHeight,
  propWidth,
  propHeight1,
  propMinHeight,
  propHeight2,
  examName,
  category,
  subcategory,
}) => {
  const examDetailsStyle = useMemo(() => {
    return {
      height: '32px',
    };
  }, ['32px']);

  const examTypeStyle = useMemo(() => {
    return {
      width: '362px',
      height: '33px',
    };
  }, ['362px', '33px']);

  const examSubjectStyle = useMemo(() => {
    return {
      minHeight: '33',
    };
  }, ['33']);

  const formLabelStyle = useMemo(() => {
    return {
      height: '32px',
    };
  }, ['32px']);

  return (
    <div className={`exam-details-parent ${className}`}>
      <div className="exam-details" style={examDetailsStyle}>
        <b className="jamias-high-school6">J{examName}</b>
      </div>
      <div className="exam-type" style={examTypeStyle}>
        <div className="exam-subject" style={examSubjectStyle}>
          <div className="form-label" style={formLabelStyle}>
            <b className="jamias-high-school6">{category}</b>
          </div>
          <b className="biology6">{subcategory}</b>
        </div>
      </div>
      <div className="exam-actions">
        <img
          className="exam-actions-child"
          loading="lazy"
          alt=""
          src={TrashIcon}
        />
        <img
          className="exam-actions-child"
          loading="lazy"
          alt=""
          src={EditIcon}
        />
      </div>
    </div>
  );
};

GroupComponent1.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propHeight1: PropTypes.any,
  propMinHeight: PropTypes.any,
  propHeight2: PropTypes.any,
};

export default GroupComponent1;
