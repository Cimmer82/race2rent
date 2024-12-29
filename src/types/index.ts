import { LucideIcon } from 'lucide-react';

export interface RaceCar {
  id: string;
  make: string;
  model: string;
  year: number;
  class: string;
  price: number;
  location: string;
  images: string[];
  features: string[];
  owner: User;
  availability: DateRange[];
  specifications: {
    engine: string;
    transmission: string;
    chassis: string;
    safety: string[];
  };
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  experience?: string;
  licenses?: string[];
  ratings?: number;
  reviews?: Review[];
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  user: User;
  date: Date;
}

export interface DateRange {
  start: Date;
  end: Date;
}

export interface HeroFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}