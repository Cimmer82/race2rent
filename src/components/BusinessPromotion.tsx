import React from 'react';
import { Users, Trophy, Building2 } from 'lucide-react';
import Logo from './Logo';

export default function BusinessPromotion() {
  return (
    <section className="bg-slate-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo />
          </div>
          <h2 className="text-3xl font-bold mb-4">
            Corporate Team Building Through Racing
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Transform your next corporate event into an unforgettable racing experience at Perris Motor Speedway
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-slate-800/50 p-6 rounded-lg">
            <Users className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Team Building</h3>
            <p className="text-slate-300">
              Build stronger teams through the excitement of competitive racing
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg">
            <Trophy className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Friendly Competition</h3>
            <p className="text-slate-300">
              Battle for bragging rights in our fleet of race-ready cars
            </p>
          </div>

          <div className="bg-slate-800/50 p-6 rounded-lg">
            <Building2 className="h-12 w-12 text-orange-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Corporate Events</h3>
            <p className="text-slate-300">
              One call handles everything - from cars to track time
            </p>
          </div>
        </div>

        <div className="text-center">
          <a href="/corporate" className="btn-primary inline-flex">
            Plan Your Corporate Event
          </a>
        </div>
      </div>
    </section>
  );
}