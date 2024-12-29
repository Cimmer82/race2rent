import React from 'react';
import { Calendar } from 'lucide-react';

interface TrackAvailabilityProps {
  trackId: string;
  availability: DateRange[];
  onAvailabilityChange: (trackId: string, dates: DateRange[]) => void;
}

interface DateRange {
  start: string;
  end: string;
}

export default function TrackAvailability({ 
  trackId, 
  availability, 
  onAvailabilityChange 
}: TrackAvailabilityProps) {
  const addDateRange = () => {
    const newRange = {
      start: '',
      end: ''
    };
    onAvailabilityChange(trackId, [...availability, newRange]);
  };

  const updateDateRange = (index: number, field: 'start' | 'end', value: string) => {
    const newAvailability = [...availability];
    newAvailability[index] = {
      ...newAvailability[index],
      [field]: value
    };
    onAvailabilityChange(trackId, newAvailability);
  };

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Calendar className="h-5 w-5 text-red-600" />
        <h4 className="font-medium">Available Dates</h4>
      </div>
      
      {availability.map((range, index) => (
        <div key={index} className="flex gap-3">
          <input
            type="date"
            value={range.start}
            onChange={(e) => updateDateRange(index, 'start', e.target.value)}
            className="input-primary flex-1"
          />
          <input
            type="date"
            value={range.end}
            onChange={(e) => updateDateRange(index, 'end', e.target.value)}
            className="input-primary flex-1"
          />
        </div>
      ))}
      
      <button
        type="button"
        onClick={addDateRange}
        className="text-sm text-red-600 hover:text-red-700"
      >
        + Add Date Range
      </button>
    </div>
  );
}