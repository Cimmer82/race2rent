import React from 'react';
import { Trophy, Star } from 'lucide-react';

interface RacingStory {
  id: string;
  renterName: string;
  track: string;
  date: string;
  result: string;
  story: string;
  image: string;
  rating: number;
}

const stories: RacingStory[] = [
  {
    id: '1',
    renterName: 'John Davis',
    track: 'Boone Speedway',
    date: 'Last Weekend',
    result: '3rd Place Finish',
    story: 'First time racing at Boone and couldn\'t be happier with the car rental. The setup was perfect right off the trailer, and we were fast all night. Made some great moves through traffic and brought home a podium finish!',
    image: 'https://images.unsplash.com/photo-1600359746315-119f20a92281?auto=format&fit=crop&q=80&w=1200',
    rating: 5
  },
  {
    id: '2',
    renterName: 'Sarah Miller',
    track: 'Hamilton County Speedway',
    date: 'Two weeks ago',
    result: 'Heat Race Win',
    story: 'What an incredible experience! Won our heat race and had a blast running up front all night. The car owner had everything prepared perfectly and was super helpful with track insights.',
    image: 'https://images.unsplash.com/photo-1577414168016-3e25da50dda5?auto=format&fit=crop&q=80&w=1200',
    rating: 5
  }
];

export default function RacingStories() {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Racing Success Stories</h2>
          <p className="mt-4 text-lg text-gray-600">See how racers are winning with our rental cars</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {stories.map((story) => (
            <div key={story.id} className="bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <img
                src={story.image}
                alt={`Racing at ${story.track}`}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Trophy className="h-6 w-6 text-red-600 mr-2" />
                    <span className="font-bold text-red-600">{story.result}</span>
                  </div>
                  <div className="flex items-center">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">{story.renterName}</h3>
                <div className="text-sm text-gray-600 mb-4">
                  <p>{story.track} - {story.date}</p>
                </div>
                <p className="text-gray-700">{story.story}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}