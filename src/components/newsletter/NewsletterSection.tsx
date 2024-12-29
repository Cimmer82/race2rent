import React from 'react';
import { Bell } from 'lucide-react';
import NewsletterForm from './NewsletterForm';

export default function NewsletterSection() {
  return (
    <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <Bell className="h-12 w-12 text-orange-500 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">
            Never Miss a Race Car Listing
          </h2>
          <p className="text-lg text-slate-300 mb-8">
            Join our community to receive alerts when race cars become available in your area,
            plus exclusive deals and racing tips.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}