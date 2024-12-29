import React from 'react';
import { Settings, HelpCircle, Info, LogOut } from 'lucide-react';

export default function MenuPage() {
  const menuItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help & Support', path: '/support' },
    { icon: Info, label: 'About Us', path: '/about' },
    { icon: LogOut, label: 'Sign Out', path: '/signout' }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-6">Menu</h1>
      <div className="bg-white rounded-lg shadow-sm divide-y">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <a
            key={path}
            href={path}
            className="flex items-center p-4 hover:bg-gray-50"
          >
            <Icon className="h-5 w-5 text-gray-600 mr-3" />
            <span className="text-gray-900">{label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}