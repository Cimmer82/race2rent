import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
export const getStripe = () => {
  const stripeKey = import.meta.env.VITE_STRIPE_PUBLIC_KEY;
  if (!stripeKey) {
    throw new Error('Stripe public key not found');
  }
  return loadStripe(stripeKey);
};