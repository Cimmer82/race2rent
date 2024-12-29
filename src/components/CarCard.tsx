import React from 'react';
import { MapPin, Star, Clock, Shield } from 'lucide-react';
import type { RaceCar } from '../types';
import RentButton from './RentButton';

interface CarCardProps {
  car: RaceCar;
}

export default function CarCard({ car }: CarCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-48">
        <img
          src={car.images[0]}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          ${car.price}/day
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{`${car.year} ${car.make} ${car.model}`}</h3>
            <p className="text-red-600 font-semibold mt-1">{car.class}</p>
          </div>
          <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
            <Star className="h-4 w-4 text-yellow-400 fill-current" />
            <span className="ml-1 text-sm font-medium">{car.owner.ratings}</span>
          </div>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            <span className="text-sm">{car.location}</span>
          </div>
          
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm">Available Now</span>
          </div>

          <div className="flex items-center text-gray-600">
            <Shield className="h-4 w-4 mr-2" />
            <span className="text-sm">{car.owner.experience}</span>
          </div>
        </div>

        <div className="border-t pt-4">
          <h4 className="font-semibold mb-2">Features:</h4>
          <div className="flex flex-wrap gap-2">
            {car.features.slice(0, 3).map((feature) => (
              <span 
                key={feature}
                className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <RentButton carId={car.id} price={car.price} />
        </div>
      </div>
    </div>
  );
}