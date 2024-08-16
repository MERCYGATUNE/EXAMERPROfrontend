import FrameComponent1 from "../components/FrameComponent1";
import TopPerforming from "../components/TopPerforming";
import TopPerforming1 from "../components/TopPerforming1";
import LeftBar from "../components/LeftBar";
import CoolKidsAvatar from '../../../../assets/casual-life-3d-girl-with-tablet-and-working-process-on-desktop.png'
import ProgressTickGif from '../../../../assets/bouncy-completed-checklist-form-on-a-clipboard-and-pencil.gif'
import "./StudentDashboard.css";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const username = user.username
  return (
    <div className="student-dashboard">
      <div className="student-dashboard-child" />
      <FrameComponent1 />
      <img className="cool-kids-avatar" alt="" src={CoolKidsAvatar} />
      <section className="frame-section">
        <div className="frame-child6" />
        <h2 className="welcome-back-ayo">Welcome back, {username}!👋</h2>
      </section>
      <TopPerforming />
      <TopPerforming1 />
      <div className="top-performing">
        <div className="top-performing-child" />
        <div className="top-performing-title">
          <img
            className="top-performing-title-child"
            loading="lazy"
            alt=""
            src={ProgressTickGif}
          />
        </div>
        <h1 className="view-your-progress">View your progress</h1>
      </div>
      <LeftBar />
      <div className="top-performing1">
        <div className="top-performing-item" />
        <div className="view-all-exam-categories-parent">
          <h1 className="view-all-exam">View all exam categories</h1>
          <h1 className="h1">?</h1>
          <h1 className="h11">?</h1>
          <h1 className="h12">?</h1>
          <h1 className="h13">?</h1>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
