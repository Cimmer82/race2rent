import React from 'react';
import { CircleDot, Gauge, Mountain } from 'lucide-react';
import type { RacingType } from '../types/racing';

interface RacingTypeSelectorProps {
  selected: RacingType;
  onChange: (type: RacingType) => void;
}

export default function RacingTypeSelector({ selected, onChange }: RacingTypeSelectorProps) {
  const types = [
    {
      id: 'circle-track' as RacingType,
      name: 'Circle Track',
      icon: CircleDot,
      description: 'Oval track racing'
    },
    {
      id: 'drag' as RacingType,
      name: 'Drag Racing',
      icon: Gauge,
      description: 'Quarter & eighth mile'
    },
    {
      id: 'off-road' as RacingType,
      name: 'Off-Road',
      icon: Mountain,
      description: 'Desert & trail racing'
    }
  ];

  return (
    <div className="grid grid-cols-3 gap-4">
      {types.map(({ id, name, icon: Icon, description }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`p-4 rounded-lg border-2 transition-all ${
            selected === id
              ? 'border-orange-600 bg-orange-50'
              : 'border-gray-200 hover:border-orange-600'
          }`}
        >
          <Icon className={`h-8 w-8 mx-auto mb-2 ${
            selected === id ? 'text-orange-600' : 'text-gray-600'
          }`} />
          <h3 className="font-semibold mb-1">{name}</h3>
          <p className="text-sm text-gray-600">{description}</p>
        </button>
      ))}
    </div>
  );
}