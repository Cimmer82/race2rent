/*
  # Add owner payment information

  1. New Tables
    - `owner_payment_info`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `stripe_account_id` (text)
      - `payouts_enabled` (boolean)
      - `created_at` (timestamp)
      
  2. Security
    - Enable RLS on `owner_payment_info` table
    - Add policy for owners to manage their own payment info
*/

CREATE TABLE IF NOT EXISTS owner_payment_info (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  stripe_account_id text UNIQUE,
  payouts_enabled boolean DEFAULT false,
  created_at timestamptz DEFAULT now(),
  
  CONSTRAINT unique_user_payment_info UNIQUE (user_id)
);

ALTER TABLE owner_payment_info ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can manage their own payment info"
  ON owner_payment_info
  FOR ALL
  TO authenticated
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);