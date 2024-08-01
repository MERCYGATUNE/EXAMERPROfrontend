import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './SubscriptionPage.css';

// Example function to get the current user ID
const fetchUserId = async () => {
  // Replace this with your actual logic to fetch user ID
  return 'example-user-id'; // Replace with actual user ID
};

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [amount, setAmount] = useState(0);
  const [userId, setUserId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getUserId = async () => {
      const id = await fetchUserId();
      setUserId(id);
    };

    getUserId();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      console.error('Stripe has not loaded.');
      return;
    }

    if (amount <= 0) {
      alert('Please select a valid subscription plan.');
      return;
    }

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error('Error creating payment method:', error);
      alert(`Payment error: ${error.message}`);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/create-subscription', {
        payment_method_id: paymentMethod.id,
        amount,
        user_id: userId,
      });

      if (response.data.success) {
        alert('Payment successful!');
        navigate('/');
      } else {
        alert('Payment failed');
      }
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('An error occurred while processing the payment.');
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
        <button type="button" onClick={() => setAmount(50)}>Student - 50 KSH</button>
        <button type="button" onClick={() => setAmount(100)}>Examiner - 100 KSH</button>
        <div className="stripe-element">
          <CardElement />
        </div>
        <button type="submit" className="submit-button" disabled={!stripe || loading}>
          {loading ? 'Processing...' : `Pay ${amount} KSH`}
        </button>
      </form>
    </div>
  );
};

export default SubscriptionPage;
