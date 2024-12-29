import React, { useState } from 'react';
import { Mail, MapPin } from 'lucide-react';

interface FormData {
  email: string;
  location: string;
}

export default function NewsletterForm() {
  const [formData, setFormData] = useState<FormData>({
    email: '',
    location: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with email service
    console.log('Form submitted:', formData);
    setFormData({ email: '', location: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="email" className="sr-only">Email</label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="email"
            id="email"
            required
            placeholder="Enter your email"
            className="pl-10 w-full input-primary"
            value={formData.email}
            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
          />
        </div>
      </div>

      <div>
        <label htmlFor="location" className="sr-only">Location</label>
        <div className="relative">
          <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            id="location"
            required
            placeholder="Your city or region"
            className="pl-10 w-full input-primary"
            value={formData.location}
            onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
          />
        </div>
      </div>

      <button type="submit" className="w-full btn-primary">
        Join Now
      </button>
    </form>
  );
}