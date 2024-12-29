import { supabase } from './supabase';

interface PaymentSplit {
  platformFee: number;
  ownerAmount: number;
}

export async function calculatePaymentSplit(totalAmount: number): Promise<PaymentSplit> {
  // Get current payment settings
  const { data: settings } = await supabase
    .from('payment_settings')
    .select('platform_fee_percent, owner_share_percent')
    .single();

  if (!settings) {
    throw new Error('Payment settings not found');
  }

  const platformFee = Math.round(totalAmount * (settings.platform_fee_percent / 100));
  const ownerAmount = totalAmount - platformFee;

  return {
    platformFee,
    ownerAmount
  };
}