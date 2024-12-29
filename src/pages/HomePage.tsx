import React from 'react';
import FilterSidebar from '../components/FilterSidebar';
import CarCard from '../components/CarCard';
import RacingStories from '../components/RacingStories';
import NewsletterSection from '../components/newsletter/NewsletterSection';
import HeroSection from '../components/HeroSection';
import ShareSection from '../components/ShareSection';
import { SAMPLE_CAR } from '../data/sampleData';

export default function HomePage() {
  const sampleCars = [
    SAMPLE_CAR,
    { ...SAMPLE_CAR, id: '2', location: 'Knoxville, IA', price: 549 },
    { ...SAMPLE_CAR, id: '3', location: 'Des Moines, IA', price: 499 }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <HeroSection />
      <div className="flex">
        <FilterSidebar />
        <main className="flex-1">
          <div className="p-8" id="available-cars">
            <div className="max-w-7xl mx-auto">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold text-gray-900">Featured Race Cars</h2>
                  <p className="text-gray-600 mt-1">Ready for your next checkered flag</p>
                </div>
                <select className="input-primary">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Highest Rated</option>
                </select>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {sampleCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            </div>
          </div>

          <RacingStories />
          <NewsletterSection />
          <ShareSection />
        </main>
      </div>
    </div>
  );
}