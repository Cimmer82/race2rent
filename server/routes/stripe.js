import express from 'express';
import { stripe } from '../config/stripe.js';
import { supabase } from '../config/supabase.js';
import { calculatePaymentSplit } from '../utils/payments.js';

const router = express.Router();

// Create checkout session with split payments
router.post('/create-checkout-session', async (req, res) => {
  const { carId, price } = req.body;

  try {
    // Get car owner's Stripe account ID
    const { data: carData } = await supabase
      .from('car_listings')
      .select('owner_id')
      .eq('id', carId)
      .single();

    const { data: ownerData } = await supabase
      .from('owner_payment_info')
      .select('stripe_account_id')
      .eq('user_id', carData.owner_id)
      .single();

    // Calculate payment split
    const { platformFee, ownerAmount } = await calculatePaymentSplit(price);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'Race Car Rental',
            description: `Car ID: ${carId}`,
          },
          unit_amount: price * 100, // Convert to cents
        },
        quantity: 1,
      }],
      mode: 'payment',
      success_url: `${process.env.FRONTEND_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.FRONTEND_URL}/cancel`,
      payment_intent_data: {
        application_fee_amount: platformFee * 100, // Platform fee in cents
        transfer_data: {
          destination: ownerData.stripe_account_id,
          amount: ownerAmount * 100, // Owner's share in cents
        },
      },
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ error: error.message });
  }
});

export default router;