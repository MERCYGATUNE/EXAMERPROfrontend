import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import SignInPage from './Pages/Signin/SignInPage';
import SignUpPage from './Pages/Signup/SignUpPage';
import SubscriptionPage from './Pages/SubscriptionPage/SubscriptionPage';
import Home from './Pages/Home/Home';

const stripePromise = loadStripe('your-publishable-key-here');

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
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
