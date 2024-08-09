import PropTypes from "prop-types";
import "./GroupComponent4.css";

const GroupComponent4 = ({ className = "", fORM1, vector }) => {
  return (
    <div className={`form-1-wrapper8 ${className}`}>
      <h1 className="form-115">{fORM1}</h1>
    </div>
  );
};

GroupComponent4.propTypes = {
  className: PropTypes.string,
  fORM1: PropTypes.string,
  vector: PropTypes.string,
};

export default GroupComponent4;
