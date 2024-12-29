/*
  # Add payment settings and split configuration

  1. New Tables
    - `payment_settings`
      - `id` (uuid, primary key)
      - `platform_fee_percent` (integer)
      - `owner_share_percent` (integer)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
      
  2. Security
    - Enable RLS on payment_settings table
    - Only allow platform admins to modify settings
*/

CREATE TABLE IF NOT EXISTS payment_settings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_fee_percent integer NOT NULL,
  owner_share_percent integer NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  
  CONSTRAINT valid_percentages CHECK (
    platform_fee_percent >= 0 AND 
    owner_share_percent >= 0 AND 
    (platform_fee_percent + owner_share_percent) = 100
  )
);

-- Insert default split (30% platform, 70% owner)
INSERT INTO payment_settings (platform_fee_percent, owner_share_percent)
VALUES (30, 70);

ALTER TABLE payment_settings ENABLE ROW LEVEL SECURITY;