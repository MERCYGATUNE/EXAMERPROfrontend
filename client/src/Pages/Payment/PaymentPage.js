// src/components/PaymentPage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe('your-publishable-key-here');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const location = useLocation();
  const { amount } = location.state;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      console.error(error);
    } else {
      const response = await axios.post('http://http://0.0.0.0:10000/create-subscription', {
        payment_method_id: paymentMethod.id,
        amount,
      });

      if (response.data.success) {
        alert('Payment successful!');
      } else {
        alert('Payment failed');
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe}>Pay {amount} KSH</button>
    </form>
  );
};

const PaymentPage = () => (
  <Elements stripe={stripePromise}>
    <h1>Payment Page</h1>
    <CheckoutForm />
  </Elements>
);

export default PaymentPage;
