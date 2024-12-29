import React from 'react';
import { Truck, Home } from 'lucide-react';

interface DeliveryOptionsProps {
  value: 'delivery' | 'pickup' | 'both';
  onChange: (value: 'delivery' | 'pickup' | 'both') => void;
}

export default function DeliveryOptions({ value, onChange }: DeliveryOptionsProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium mb-2">Delivery Options</label>
      <div className="grid grid-cols-3 gap-3">
        <button
          type="button"
          onClick={() => onChange('delivery')}
          className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-orange-600 transition-colors ${
            value === 'delivery' ? 'border-orange-600 bg-orange-50' : 'border-gray-200'
          }`}
        >
          <Truck className={`h-6 w-6 ${value === 'delivery' ? 'text-orange-600' : 'text-gray-600'}`} />
          <span className="text-sm font-medium">Track Delivery</span>
        </button>

        <button
          type="button"
          onClick={() => onChange('pickup')}
          className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-orange-600 transition-colors ${
            value === 'pickup' ? 'border-orange-600 bg-orange-50' : 'border-gray-200'
          }`}
        >
          <Home className={`h-6 w-6 ${value === 'pickup' ? 'text-orange-600' : 'text-gray-600'}`} />
          <span className="text-sm font-medium">Pickup Only</span>
        </button>

        <button
          type="button"
          onClick={() => onChange('both')}
          className={`p-4 border rounded-lg flex flex-col items-center gap-2 hover:border-orange-600 transition-colors ${
            value === 'both' ? 'border-orange-600 bg-orange-50' : 'border-gray-200'
          }`}
        >
          <div className="flex gap-1">
            <Truck className={`h-6 w-6 ${value === 'both' ? 'text-orange-600' : 'text-gray-600'}`} />
            <Home className={`h-6 w-6 ${value === 'both' ? 'text-orange-600' : 'text-gray-600'}`} />
          </div>
          <span className="text-sm font-medium">Both Options</span>
        </button>
      </div>
    </div>
  );
}