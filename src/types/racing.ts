export type RacingType = 'circle-track' | 'drag' | 'off-road';

export interface RacingClass {
  id: string;
  name: string;
  type: RacingType;
  description: string;
  sanctioningBodies: string[];
}

export const RACING_CLASSES: RacingClass[] = [
  // Circle Track Classes
  {
    id: 'hobby-stock',
    name: 'Hobby Stock',
    type: 'circle-track',
    description: 'Entry level circle track racing class',
    sanctioningBodies: ['IMCA', 'USRA', 'WISSOTA']
  },
  {
    id: 'stock-car',
    name: 'Stock Car',
    type: 'circle-track',
    description: 'Traditional stock car racing',
    sanctioningBodies: ['IMCA', 'USRA', 'WISSOTA', 'UMP']
  },
  {
    id: 'modified',
    name: 'Modified',
    type: 'circle-track',
    description: 'Open wheel modified racing',
    sanctioningBodies: ['IMCA', 'USRA', 'USMTS', 'UMP']
  },
  {
    id: 'late-model',
    name: 'Late Model',
    type: 'circle-track',
    description: 'High-performance late model racing',
    sanctioningBodies: ['Lucas Oil', 'World of Outlaws', 'MLRA']
  },
  
  // Drag Racing Classes
  {
    id: 'pro-mod',
    name: 'Pro Modified',
    type: 'drag',
    description: 'Professional modified drag racing',
    sanctioningBodies: ['NHRA', 'PDRA']
  },
  {
    id: 'top-sportsman',
    name: 'Top Sportsman',
    type: 'drag',
    description: 'High-end sportsman drag racing',
    sanctioningBodies: ['NHRA', 'IHRA']
  },
  {
    id: 'super-comp',
    name: 'Super Comp',
    type: 'drag',
    description: '8.90 index drag racing class',
    sanctioningBodies: ['NHRA', 'IHRA']
  },
  {
    id: 'super-street',
    name: 'Super Street',
    type: 'drag',
    description: '10.90 index drag racing class',
    sanctioningBodies: ['NHRA', 'IHRA']
  },
  
  // Off-Road Classes
  {
    id: 'trophy-truck',
    name: 'Trophy Truck',
    type: 'off-road',
    description: 'Unlimited off-road racing trucks',
    sanctioningBodies: ['SCORE', 'BITD']
  },
  {
    id: 'ultra4',
    name: 'Ultra4',
    type: 'off-road',
    description: 'Unlimited 4-wheel drive racing',
    sanctioningBodies: ['ULTRA4']
  },
  {
    id: 'pro-utv',
    name: 'Pro UTV',
    type: 'off-road',
    description: 'Professional UTV/Side-by-side racing',
    sanctioningBodies: ['SCORE', 'BITD', 'WORCS']
  },
  {
    id: 'class-10',
    name: 'Class 10',
    type: 'off-road',
    description: 'Limited open-wheel off-road buggies',
    sanctioningBodies: ['SCORE', 'BITD']
  }
];