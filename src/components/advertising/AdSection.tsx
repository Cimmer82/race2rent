import React from 'react';
import { Megaphone } from 'lucide-react';
import AdPackages from './AdPackages';
import ContactForm from './ContactForm';

export default function AdSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <Megaphone className="h-10 w-10 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Advertise With Us</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reach thousands of racing enthusiasts and industry professionals. 
            Put your brand in front of a highly engaged motorsports audience.
          </p>
        </div>

        <AdPackages />
        <ContactForm />
      </div>
    </section>
  );
}