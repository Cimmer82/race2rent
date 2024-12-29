import React from 'react';
import { Home, Search, Plus, MessageCircle, Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function BottomToolbar() {
  const location = useLocation();
  
  const tools = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Search, label: 'Browse', path: '/search' },
    { icon: Plus, label: 'List Car', path: '/list-car' },
    { icon: MessageCircle, label: 'Messages', path: '/messages' },
    { icon: Menu, label: 'More', path: '/menu' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 shadow-lg px-4 py-2 z-50">
      <div className="max-w-lg mx-auto flex justify-between items-center">
        {tools.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className={`flex flex-col items-center p-2 transition-colors ${
              location.pathname === path 
                ? 'text-orange-600' 
                : 'text-gray-600 hover:text-orange-600'
            }`}
          >
            <Icon className="h-6 w-6" />
            <span className="text-xs mt-1 font-medium">{label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}