import FrameComponent1 from '../../Student/components/FrameComponent1';
import TopPerforming4 from "../components/TopPerforming4";
import TopPerforming2 from "../components/TopPerforming2";
import CoolKidsAvatar from '../../../../assets/cool-kids-avatar@2x.png'
import FinishedTasksPic from '../../../../assets/business-3d-businessman-with-laptop-finished-all-tasks.png'
import ProgressTickGif from '../../../../assets/bouncy-completed-checklist-form-on-a-clipboard-and-pencil.gif'
import LeftBar3 from "../components/LeftBar3";
import TopPerforming3 from "../components/TopPerforming3";
import "./Examiner.css";

const Examiner = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  return (
    <div className="examiner">
      <FrameComponent1
        alluraAvatarBackgroundColor="#ff0000"
        alluraAvatar="/allura-avatar1@2x.png"
      />
      <img
        className="cool-kids-avatar1"
        loading="lazy"
        alt=""
        src={CoolKidsAvatar}
      />
      <section className="welcome-back-ayo-container">
        <h2 className="welcome-back-ayo1">Welcome back, {username}!👋</h2>
      </section>
      <TopPerforming4 />
      <div className="frame-parent2">
        <div className="rectangle-parent11">
          <div className="frame-child21" />
          <img
            className="iconlylight-outlinebookmark"
            loading="lazy"
            alt=""
            src={ProgressTickGif}
          />
        </div>
        <h1 className="you-have-2">
          You have 2 exams that have not been graded.
        </h1>
      </div>
      <TopPerforming2
        group78={FinishedTasksPic}
        viewAllYourExams="View all your exams"
      />
      <LeftBar3 />
      <TopPerforming3 viewAllStudentSubmissions="View all student submissions" />
    </div>
  );
};

export default Examiner;
