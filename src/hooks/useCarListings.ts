import { useEffect } from 'react';
import { supabase } from '../utils/supabase';

export const useCarListings = (onNewListing: (listing: any) => void) => {
  useEffect(() => {
    // Subscribe to real-time notifications
    const channel = supabase
      .channel('new_car_listings')
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'car_listings'
        },
        (payload) => {
          onNewListing(payload.new);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [onNewListing]);
};