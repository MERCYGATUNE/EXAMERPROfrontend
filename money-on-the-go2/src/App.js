import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SignInPage from './Pages/Signin/SignInPage';
import SignUpPage from './Pages/Signup/SignUpPage';
import SubscriptionPage from './Pages/SubscriptionPage/SubscriptionPage';
import StudentDashboard from './Pages/Dashboard/Student/Home/StudentDashboard';
import StudentDashboardExams from './Pages/Dashboard/Student/Exams/StudentDashboardExams';
import StudentDashboardSettings from './Pages/Dashboard/Student/Settings/StudentDashboardSettings';
import ExaminerDashboardExams from './Pages/Dashboard/Examiner/Exams/ExaminerDashboardExams';
import ExaminerDashboardSettings from './Pages/Dashboard/Examiner/Settings/ExaminerDashboardSettings';
import ExaminerDashboardSubmissions from './Pages/Dashboard/Examiner/Submissions/ExaminerDashboardSubmissions';
import Examiner from './Pages/Dashboard/Examiner/Home/Examiner';
import ResetPassword from './Pages/ResetPassword/ResetPasswordPage';
import Home from './Pages/Home/Home';

// Ensure this is your actual public key from .env
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/student-dashboard" element={<StudentDashboard/>}/>
          <Route path="/student-dashboard-exams" element={<StudentDashboardExams />} />
          <Route path="/student-dashboard-settings" element={<StudentDashboardSettings />} />
          <Route path="/examiner-dashboard-exams" element={<ExaminerDashboardExams />} />
          <Route path="/examiner-dashboard-settings" element={<ExaminerDashboardSettings />} />
          <Route path="/examiner-dashboard-submissions" element={<ExaminerDashboardSubmissions />} />
          <Route path="/examiner" element={<Examiner />} />
          <Route path="/reset-password/:token" element={<ResetPassword/>} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/subscription" element={
            <Elements stripe={stripePromise}>
              <SubscriptionPage />
            </Elements>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
