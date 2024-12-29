import React, { useState } from 'react';
import TrackSelector from '../components/TrackSelector';
import TrackAvailability from '../components/TrackAvailability';
import ImageUpload from '../components/ImageUpload/ImageUpload';
import DeliveryOptions from '../components/DeliveryOptions';

interface DateRange {
  start: string;
  end: string;
}

interface TrackAvailability {
  trackId: string;
  dates: DateRange[];
}

export default function ListCarPage() {
  const [images, setImages] = useState<File[]>([]);
  const [selectedTracks, setSelectedTracks] = useState<string[]>([]);
  const [trackAvailability, setTrackAvailability] = useState<TrackAvailability[]>([]);
  const [deliveryOption, setDeliveryOption] = useState<'delivery' | 'pickup' | 'both'>('both');

  const handleTrackChange = (tracks: string[]) => {
    setSelectedTracks(tracks);
    const newAvailability = tracks.map(trackId => ({
      trackId,
      dates: trackAvailability.find(t => t.trackId === trackId)?.dates || []
    }));
    setTrackAvailability(newAvailability);
  };

  const handleAvailabilityChange = (trackId: string, dates: DateRange[]) => {
    setTrackAvailability(prev => 
      prev.map(track => 
        track.trackId === trackId ? { ...track, dates } : track
      )
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Selected tracks:', selectedTracks);
    console.log('Track availability:', trackAvailability);
    console.log('Images:', images);
    console.log('Delivery option:', deliveryOption);
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-2">List Your Car For Rent</h1>
      <p className="text-gray-600 mb-8">Share your race car with other drivers and earn money when you're not racing</p>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Car Details</h2>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Make</label>
              <input type="text" className="input-primary w-full" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Model</label>
              <input type="text" className="input-primary w-full" required />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Year</label>
              <input type="number" className="input-primary w-full" required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Car Number</label>
              <input 
                type="text" 
                className="input-primary w-full" 
                placeholder="e.g. 24X"
                required 
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Class</label>
              <select className="input-primary w-full" required>
                <option value="">Select class</option>
                <option>Hobby Stock</option>
                <option>Stock Car</option>
                <option>Modified</option>
                <option>Sport Compact</option>
                <option>Late Model</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Daily Rate ($)</label>
            <input type="number" className="input-primary w-full" required />
          </div>

          <DeliveryOptions 
            value={deliveryOption}
            onChange={setDeliveryOption}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Photos</h2>
          <ImageUpload
            images={images}
            onChange={setImages}
            maxImages={10}
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          List Your Car
        </button>
      </form>
    </div>
  );
}