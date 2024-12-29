/*
  # Car Listings Schema

  1. New Tables
    - `car_listings`
      - `id` (uuid, primary key)
      - `created_at` (timestamp)
      - `make` (text)
      - `model` (text)
      - `year` (integer)
      - `class` (text)
      - `daily_rate` (integer)
      - `owner_id` (uuid, references auth.users)
      - `images` (text array)
      - `status` (text)
    
  2. Security
    - Enable RLS on car_listings table
    - Add policies for authenticated users
*/

CREATE TABLE IF NOT EXISTS car_listings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz DEFAULT now(),
  make text NOT NULL,
  model text NOT NULL,
  year integer NOT NULL,
  class text NOT NULL,
  daily_rate integer NOT NULL,
  owner_id uuid REFERENCES auth.users NOT NULL,
  images text[] NOT NULL DEFAULT '{}',
  status text NOT NULL DEFAULT 'pending',
  
  CONSTRAINT valid_year CHECK (year >= 1900 AND year <= date_part('year', CURRENT_DATE)::integer + 1),
  CONSTRAINT valid_daily_rate CHECK (daily_rate > 0),
  CONSTRAINT valid_status CHECK (status IN ('pending', 'approved', 'rejected'))
);

ALTER TABLE car_listings ENABLE ROW LEVEL SECURITY;

-- Policy to allow users to create their own listings
CREATE POLICY "Users can create their own listings"
  ON car_listings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = owner_id);

-- Policy to allow users to read all approved listings
CREATE POLICY "Anyone can view approved listings"
  ON car_listings
  FOR SELECT
  TO authenticated
  USING (status = 'approved');

-- Policy to allow users to view their own listings regardless of status
CREATE POLICY "Users can view their own listings"
  ON car_listings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = owner_id);

-- Function to notify on new listings
CREATE OR REPLACE FUNCTION notify_new_car_listing()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM pg_notify(
    'new_car_listing',
    json_build_object(
      'id', NEW.id,
      'make', NEW.make,
      'model', NEW.model,
      'year', NEW.year,
      'created_at', NEW.created_at
    )::text
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger for new listings
CREATE TRIGGER on_new_car_listing
  AFTER INSERT ON car_listings
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_car_listing();