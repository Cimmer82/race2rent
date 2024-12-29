import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, DollarSign } from 'lucide-react';

export default function OwnerOnboarding() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleStripeConnect = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/stripe/create-connect-account', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      
      const { url } = await response.json();
      window.location.href = url; // Redirect to Stripe Connect onboarding
    } catch (error) {
      console.error('Failed to create Connect account:', error);
      alert('Failed to setup payments. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6">
      <div className="text-center mb-8">
        <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
        <h2 className="text-2xl font-bold mb-2">Setup Your Payments</h2>
        <p className="text-gray-600">
          Connect your bank account to receive rental payments directly
        </p>
      </div>

      <button
        onClick={handleStripeConnect}
        disabled={loading}
        className="btn-primary w-full flex items-center justify-center gap-2"
      >
        {loading ? 'Setting up...' : (
          <>
            Connect with Stripe
            <ArrowRight className="h-5 w-5" />
          </>
        )}
      </button>
    </div>
  );
}