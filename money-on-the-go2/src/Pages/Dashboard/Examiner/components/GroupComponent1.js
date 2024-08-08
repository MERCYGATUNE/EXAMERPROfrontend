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
}) => {
  const examDetailsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const examTypeStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight1,
    };
  }, [propWidth, propHeight1]);

  const examSubjectStyle = useMemo(() => {
    return {
      minHeight: propMinHeight,
    };
  }, [propMinHeight]);

  const formLabelStyle = useMemo(() => {
    return {
      height: propHeight2,
    };
  }, [propHeight2]);

  return (
    <div className={`exam-details-parent ${className}`}>
      <div className="exam-details" style={examDetailsStyle}>
        <b className="jamias-high-school6">Jamias High School Exam</b>
      </div>
      <div className="exam-type" style={examTypeStyle}>
        <div className="exam-subject" style={examSubjectStyle}>
          <div className="form-label" style={formLabelStyle}>
            <b className="jamias-high-school6">FORM 1</b>
          </div>
          <b className="biology6">BIOLOGY</b>
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
