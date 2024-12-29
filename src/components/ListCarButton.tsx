import React from 'react';
import { Plus } from 'lucide-react';

export default function ListCarButton() {
  return (
    <button 
      onClick={() => window.location.href = '/list-car'}
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-colors"
      aria-label="List your race car"
    >
      <Plus className="h-6 w-6" />
    </button>
  );
}