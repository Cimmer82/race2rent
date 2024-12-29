import React, { useState } from 'react';
import { MapPin, Plus, X } from 'lucide-react';

interface TrackSelectorProps {
  selectedTracks: string[];
  onTrackChange: (tracks: string[]) => void;
}

export default function TrackSelector({ selectedTracks, onTrackChange }: TrackSelectorProps) {
  const [trackName, setTrackName] = useState('');

  const handleAddTrack = () => {
    if (trackName.trim()) {
      onTrackChange([...selectedTracks, trackName.trim()]);
      setTrackName('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddTrack();
    }
  };

  const removeTrack = (trackToRemove: string) => {
    onTrackChange(selectedTracks.filter(track => track !== trackToRemove));
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <MapPin className="h-5 w-5 text-red-600" />
        <h3 className="text-lg font-semibold">Track Locations</h3>
      </div>
      
      <div className="flex gap-2">
        <input
          type="text"
          value={trackName}
          onChange={(e) => setTrackName(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Enter track name (e.g., Boone Speedway)"
          className="input-primary flex-1"
        />
        <button
          type="button"
          onClick={handleAddTrack}
          className="btn-primary px-3 py-2"
        >
          <Plus className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-2">
        {selectedTracks.map((track) => (
          <div 
            key={track}
            className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
          >
            <span>{track}</span>
            <button
              type="button"
              onClick={() => removeTrack(track)}
              className="text-gray-500 hover:text-red-600"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}