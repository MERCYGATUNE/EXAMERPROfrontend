import { useMemo } from "react";
import PropTypes from "prop-types";
import "./ExamInfo.css";

const ExamInfo = ({
  className = "",
  allYourExams,
  propTextAlign,
  propWidth,
  propAlignSelf,
  propFlex,
  propWidth1,
  propBackgroundColor,
  alluraAvatar,
  fUNCTIONS,
}) => {
  const allYourExamsStyle = useMemo(() => {
    return {
      textAlign: propTextAlign,
    };
  }, [propTextAlign]);

  const examFilterStyle = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  const categoryFilterStyle = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth1,
    };
  }, [propFlex, propWidth1]);

  const alluraAvatar1Style = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  const email = user.email

  return (
    <div className={`exam-info ${className}`}>
      <div className="user-info">
        <div className="user-name">
          <b className="name">NAME</b>
        </div>
        <div className="exam-overview">
          <div className="exams-header">
            <h1 className="all-your-exams" style={allYourExamsStyle}>
              {allYourExams}
            </h1>
            <div className="exam-filter" style={examFilterStyle}>
              <div className="category-filter" style={categoryFilterStyle}>
                <b className="category1">CATEGORY</b>
                <b className="subject">SUBJECT</b>
              </div>
            </div>
          </div>
          <div className="user-profile1">
            <div className="profile-details1">
              <div className="profile3">
                <div className="avatar-container">
                  <div className="allura-avatar3" style={alluraAvatar1Style} />
                  <img
                    className="allura-avatar-icon5"
                    loading="lazy"
                    alt=""
                    src={alluraAvatar}
                  />
                </div>
                <div className="user-name-container1">
                  <a className="ayo5">{username}</a>
                </div>
              </div>
            </div>
            <b className="functions1">{fUNCTIONS}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

ExamInfo.propTypes = {
  className: PropTypes.string,
  allYourExams: PropTypes.string,
  alluraAvatar: PropTypes.string,
  fUNCTIONS: PropTypes.string,

  /** Style props */
  propTextAlign: PropTypes.any,
  propWidth: PropTypes.any,
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propWidth1: PropTypes.any,
  propBackgroundColor: PropTypes.any,
};

export default ExamInfo;
