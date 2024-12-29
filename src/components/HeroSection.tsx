import React from 'react';
import { Flag, Clock, Wrench, Trophy, DollarSign, Shield } from 'lucide-react';
import { HeroFeature } from '../types';

const OWNER_FEATURES: HeroFeature[] = [
  {
    icon: DollarSign,
    title: 'Earn While Parked',
    description: 'Turn your spare race car into passive income between events'
  },
  {
    icon: Shield,
    title: 'Full Protection',
    description: 'Comprehensive insurance and damage coverage included'
  }
];

const RENTER_FEATURES: HeroFeature[] = [
  {
    icon: Trophy,
    title: 'Championship Cars',
    description: 'Access proven, winning equipment ready to race'
  },
  {
    icon: Clock,
    title: 'Race Ready',
    description: 'Skip the prep work - just arrive and drive'
  }
];

export default function HeroSection() {
  return (
    <div className="relative bg-slate-900 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1577414168016-3e25da50dda5?auto=format&fit=crop&q=80"
          alt="Racing background"
          className="w-full h-full object-cover opacity-15"
        />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Turn Downtime into Dollars.<br/>
              Race in Winning Equipment.
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              For owners: Earn thousands monthly renting your spare race cars.<br/>
              For racers: Get behind the wheel of proven winners without the overhead.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/list-car" className="btn-primary">
                List Your Car
              </a>
              <a href="#available-cars" className="px-6 py-3 rounded-lg border-2 border-white hover:bg-white/10 transition-colors font-semibold">
                Find a Race Car
              </a>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h2 className="font-bold text-xl mb-4">Car Owners</h2>
              <div className="grid grid-cols-1 gap-4">
                {OWNER_FEATURES.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <feature.icon className="h-8 w-8 text-orange-500 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-lg border border-white/10">
              <h2 className="font-bold text-xl mb-4">Racers</h2>
              <div className="grid grid-cols-1 gap-4">
                {RENTER_FEATURES.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <feature.icon className="h-8 w-8 text-orange-500 shrink-0" />
                    <div>
                      <h3 className="font-bold mb-1">{feature.title}</h3>
                      <p className="text-slate-300 text-sm">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}