import { supabase } from '../utils/supabase';

export interface NewCarListing {
  make: string;
  model: string;
  year: number;
  class: string;
  daily_rate: number;
  images: string[];
}

export const createCarListing = async (listing: NewCarListing) => {
  const { data, error } = await supabase
    .from('car_listings')
    .insert([{
      ...listing,
      owner_id: (await supabase.auth.getUser()).data.user?.id
    }])
    .select()
    .single();

  if (error) throw error;
  return data;
};