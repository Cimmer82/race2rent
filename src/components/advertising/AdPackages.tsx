import React from 'react';
import { Shield, Rocket, Crown } from 'lucide-react';

const packages = [
  {
    name: 'Starter',
    icon: Shield,
    price: 299,
    features: [
      'Banner ad on search results',
      '30-day runtime',
      'Basic analytics',
      'Mobile responsive'
    ]
  },
  {
    name: 'Premium',
    icon: Rocket,
    price: 599,
    features: [
      'Featured listing placement',
      'Homepage banner',
      'Social media promotion',
      'Detailed performance metrics',
      '60-day runtime'
    ]
  },
  {
    name: 'Enterprise',
    icon: Crown,
    price: 999,
    features: [
      'Premium placement everywhere',
      'Custom campaign duration',
      'Dedicated account manager',
      'Advanced analytics dashboard',
      'Email newsletter feature',
      'Social media campaign'
    ]
  }
];

export default function AdPackages() {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      {packages.map((pkg) => (
        <div key={pkg.name} className="border rounded-xl p-6 hover:shadow-lg transition-shadow">
          <pkg.icon className="h-12 w-12 text-orange-600 mb-4" />
          <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
          <div className="text-3xl font-bold text-orange-600 mb-4">
            ${pkg.price}
            <span className="text-base font-normal text-gray-600">/month</span>
          </div>
          <ul className="space-y-3 mb-6">
            {pkg.features.map((feature) => (
              <li key={feature} className="flex items-center text-gray-600">
                <span className="mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
          <button className="btn-primary w-full">Get Started</button>
        </div>
      ))}
    </div>
  );
}