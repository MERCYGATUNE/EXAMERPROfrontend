import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './SubscriptionPage.css';

const fetchUserId = async () => {
  const userId = localStorage.getItem('userId'); // Retrieve user ID from local storage
  if (!userId) {
    throw new Error('User ID not found in local storage');
  }
  return userId;
};

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const getUserId = async () => {
      try {
        const id = await fetchUserId();
        setUserId(id);
      } catch (error) {
        console.error('Error fetching user ID:', error);
        setError('Failed to fetch user information. Please log in again.');
        setTimeout(() => navigate('/signin'), 3000); // Redirect to login page after 3 seconds
      }
    };

    getUserId();
  }, [navigate]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      setError('Stripe.js or Elements not loaded.');
      return;
    }

    if (amount < 65) { // Adjusting to the minimum threshold
      setError('Please select a subscription plan with at least 65 KSH.');
      return;
    }

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('CardElement not found.');
      return;
    }

    setLoading(true);
    setError(''); // Reset error state

    const { error: stripeError, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (stripeError) {
      console.error('Error creating payment method:', stripeError);
      setError(`Payment error: ${stripeError.message}`);
      setLoading(false);
      return;
    }

    try {
      const payload = {
        payment_method_id: paymentMethod.id,
        amount,
        user_id: userId,
      };
      console.log('Sending payload to backend:', payload);

      const response = await axios.post(`${process.env.REACT_APP_API_URL}/create-subscription`, payload);

      if (response.data.success) {
        alert('Payment successful!');

        const user = JSON.parse(localStorage.getItem('user'));
        if (amount === 65) {
          user.role = 'student';
        } else if (amount === 130) {
          user.role = 'examiner';
        }
        localStorage.setItem('user', JSON.stringify(user));
        
        if (user.role === 'examiner') {
          navigate('/examiner');
        }
        if (user.role === 'student') {
          navigate('/student-dashboard');
        }
      } else {
        setError('Payment failed: ' + response.data.error);
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      setError('An error occurred while processing the payment.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <h1>Choose Your Subscription Plan</h1>
      </div>
      <form className="subscription-form" onSubmit={handleSubmit}>
        <div className="subscription-options">
          <button
            type="button"
            onClick={() => setAmount(65)} // Updated amount
            className={amount === 65 ? 'active' : ''}
          >
            Student - 65 KSH
          </button>
          <button
            type="button"
            onClick={() => setAmount(130)} // Updated amount
            className={amount === 130 ? 'active' : ''}
          >
            Examiner - 130 KSH
          </button>
        </div>
        <div className="stripe-element">
          <CardElement />
        </div>
        <button type="submit" className="submit-button" disabled={!stripe || loading}>
          {loading ? 'Processing...' : `Pay ${amount} KSH`}
        </button>
        {error && <div className="error-message">{error}</div>}
      </form>
    </div>
  );
};

export default SubscriptionPage;
