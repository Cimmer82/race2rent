import React from 'react';
import { Users, Flag, MapPin, Trophy } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '400,000+',
    label: 'Active Racers',
    description: 'Across all disciplines'
  },
  {
    icon: Flag,
    value: '1,300+',
    label: 'Race Tracks',
    description: 'Operating in the USA'
  },
  {
    icon: MapPin,
    value: '50',
    label: 'States',
    description: 'With racing events'
  },
  {
    icon: Trophy,
    value: '$2.5B+',
    label: 'Industry Value',
    description: 'Annual racing market'
  }
];

export default function RacingStats() {
  return (
    <section className="bg-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Racing in America
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Join one of the fastest-growing motorsports communities in the nation
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {stats.map(({ icon: Icon, value, label, description }) => (
            <div 
              key={label}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10 text-center"
            >
              <Icon className="h-8 w-8 text-orange-500 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-1">{value}</div>
              <div className="text-lg font-semibold text-orange-500 mb-2">{label}</div>
              <p className="text-slate-300 text-sm">{description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-slate-400">
          Source: Combined data from NHRA, NASCAR, SCORE, and other sanctioning bodies
        </div>
      </div>
    </section>
  );