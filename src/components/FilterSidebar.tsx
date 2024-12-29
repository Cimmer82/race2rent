import React, { useState } from 'react';
import { Filter, DollarSign } from 'lucide-react';
import { RACING_CLASSES } from '../types/racing';

const SANCTIONING_BODIES = [
  // Circle Track
  'IMCA', 'USRA', 'WISSOTA', 'UMP', 'USMTS', 'Lucas Oil', 
  'World of Outlaws', 'ASCS', 'POWRi', 'MLRA',
  // Drag Racing
  'NHRA', 'IHRA', 'PDRA', 'NMCA',
  // Off-Road
  'SCORE', 'BITD', 'ULTRA4', 'WORCS'
];

export default function FilterSidebar() {
  const [priceRange, setPriceRange] = useState(5000);
  const [selectedType, setSelectedType] = useState<string>('all');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="w-64 bg-white p-4 shadow-lg h-screen overflow-y-auto">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold">Filters</h2>
        <Filter className="h-5 w-5" />
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-semibold mb-2">Racing Type</h3>
          <select 
            className="input-primary w-full"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="all">All Types</option>
            <option value="circle-track">Circle Track</option>
            <option value="drag">Drag Racing</option>
            <option value="off-road">Off-Road</option>
          </select>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Race Class</h3>
          <div className="space-y-2">
            {RACING_CLASSES
              .filter(cls => selectedType === 'all' || cls.type === selectedType)
              .map((cls) => (
                <label key={cls.id} className="flex items-center">
                  <input type="checkbox" className="form-checkbox text-orange-600" />
                  <span className="ml-2">{cls.name}</span>
                </label>
              ))}
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Price Range</h3>
          <div className="flex items-center gap-2 mb-2">
            <DollarSign className="h-4 w-4 text-gray-500" />
            <span className="font-medium">{formatPrice(priceRange)}</span>
          </div>
          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={priceRange}
            onChange={(e) => setPriceRange(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-1">
            <span>{formatPrice(0)}</span>
            <span>{formatPrice(10000)}</span>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Sanctioning Bodies</h3>
          <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
            {SANCTIONING_BODIES.map((sanction) => (
              <label key={sanction} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-orange-600" />
                <span className="ml-2">{sanction}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}