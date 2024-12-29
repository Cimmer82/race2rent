import React, { useState } from 'react';
import { getStripe } from '../utils/stripe';

interface RentButtonProps {
  carId: string;
  price: number;
}

export default function RentButton({ carId, price }: RentButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleRent = async () => {
    setLoading(true);
    try {
      const stripe = await getStripe();
      
      const response = await fetch('http://localhost:3000/api/stripe/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          carId,
          price,
        }),
      });
      
      const session = await response.json();
      
      if (session.error) {
        throw new Error(session.error);
      }
      
      // Redirect to checkout
      const result = await stripe?.redirectToCheckout({
        sessionId: session.id,
      });

      if (result?.error) {
        throw new Error(result.error.message);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleRent}
      disabled={loading}
      className="btn-primary w-full flex justify-center items-center"
    >
      {loading ? 'Processing...' : 'Rent Now'}
    </button>
  );
}