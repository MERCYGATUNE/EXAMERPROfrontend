
import PropTypes from "prop-types";
import "./UserTable.css";

const UserTable = ({ className = "" }) => {
  return (
    <section className={`user-table ${className}`}>
      <div className="table-header">
        <div className="user-header">
          <b className="username1">USERNAME</b>
          <div className="header-fields">
            <b className="email23">EMAIL</b>
          </div>
          <div className="header-fields1">
            <b className="role">ROLE</b>
          </div>
          <div className="header-fields2">
            <b className="created-on">CREATED-ON</b>
          </div>
          <div className="functions-wrapper">
            <b className="functions2">FUNCTIONS</b>
          </div>
        </div>
      </div>
    </section>
  );
};

UserTable.propTypes = {
  className: PropTypes.string,
};

export default UserTable;
