import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TopPerforming3.css";

const TopPerforming3 = ({
  className = "",
  propTop,
  propLeft,
  viewAllStudentSubmissions,
  propRight,
  propRight1,
  propRight2,
  propRight3,
}) => {
  const topPerformingStyle = useMemo(() => {
    return {
      top: propTop,
      left: propLeft,
    };
  }, [propTop, propLeft]);

  const h1Style = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  const h11Style = useMemo(() => {
    return {
      right: propRight1,
    };
  }, [propRight1]);

  const h12Style = useMemo(() => {
    return {
      right: propRight2,
    };
  }, [propRight2]);

  const h13Style = useMemo(() => {
    return {
      right: propRight3,
    };
  }, [propRight3]);

  return (
    <div className={`top-performing4 ${className}`} style={topPerformingStyle}>
      <div className="view-all-student-submissions-parent">
        <h1 className="view-all-student">{viewAllStudentSubmissions}</h1>
        <h1 className="h1" style={h1Style}>
          ?
        </h1>
        <h1 className="h11" style={h11Style}>
          ?
        </h1>
        <h1 className="h12" style={h12Style}>
          ?
        </h1>
        <h1 className="h13" style={h13Style}>
          ?
        </h1>
      </div>
    </div>
  );
};

TopPerforming3.propTypes = {
  className: PropTypes.string,
  viewAllStudentSubmissions: PropTypes.string,

  /** Style props */
  propTop: PropTypes.any,
  propLeft: PropTypes.any,
  propRight: PropTypes.any,
  propRight1: PropTypes.any,
  propRight2: PropTypes.any,
  propRight3: PropTypes.any,
};

export default TopPerforming3;
