import { useMemo } from "react";
import PropTypes from "prop-types";
import "./TopPerforming2.css";

const TopPerforming2 = ({
  className = "",
  group78,
  viewAllYourExams,
  propWidth,
}) => {
  const viewAllYourStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={`top-performing33 ${className}`}>
      <div className="top-performing-child">
        <img className="group-icon" loading="lazy" alt="" src={group78} />
      </div>
      <h1 className="view-all-your" style={viewAllYourStyle}>
        {viewAllYourExams}
      </h1>
    </div>
  );
};

TopPerforming2.propTypes = {
  className: PropTypes.string,
  group78: PropTypes.string,
  viewAllYourExams: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
};

export default TopPerforming2;
