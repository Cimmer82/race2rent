import React, { useState } from 'react';
import { Mail, Building, Phone, MessageSquare } from 'lucide-react';

interface FormData {
  company: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-8">Contact Our Advertising Team</h3>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Company Name"
            className="input-primary pl-10 w-full"
            required
          />
        </div>

        <div className="relative">
          <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="input-primary pl-10 w-full"
            required
          />
        </div>

        <div className="relative">
          <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="input-primary pl-10 w-full"
            required
          />
        </div>

        <div className="relative">
          <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your advertising goals"
            className="input-primary pl-10 w-full h-32 resize-none"
            required
          />
        </div>

        <button type="submit" className="btn-primary w-full">
          Send Message
        </button>
      </form>
    </div>
  );
}