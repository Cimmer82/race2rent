import React from 'react';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <div className="flex items-center bg-slate-900 px-3 py-1">
        <span className="text-white font-bold text-2xl tracking-tight">RENT 2</span>
      </div>
      <div className="bg-white px-3 py-1">
        <span className="text-slate-900 font-bold text-2xl tracking-tight">RACE</span>
      </div>
    </Link>
  );
}