import React from 'react';
import { Search, Menu, User } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search race cars by location or class..."
                className="w-full px-4 py-2 pl-10 rounded-lg bg-slate-50 text-slate-900 placeholder-slate-500 border border-slate-200 focus:outline-none focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-slate-400" />
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button className="hover:bg-slate-100 p-2 rounded-full transition-colors">
              <Menu className="h-6 w-6 text-slate-700" />
            </button>
            <button className="hover:bg-slate-100 p-2 rounded-full transition-colors">
              <User className="h-6 w-6 text-slate-700" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}