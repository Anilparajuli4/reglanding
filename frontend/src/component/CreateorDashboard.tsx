import React from 'react';

interface CardProps {
  color: 'green' | 'blue' | 'red';
  title: string;
  description: string;
  imageUrl: string;
}

const Card: React.FC<CardProps> = ({ color, title, description, imageUrl }) => (
  <div className={`bg-${color}-500 rounded-lg p-6 flex flex-col items-center text-center text-white`}>
    <div className="w-24 h-24 mb-4 flex items-center justify-center">
      <img src={imageUrl} alt={title} className="w-full h-full object-contain" />
    </div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <p className="text-sm">{description}</p>
  </div>
);

const CreatorDashboard: React.FC = () => {
  const cards: CardProps[] = [
    {
      color: 'green',
      title: 'Effortless Creativity',
      description: 'Connect with our vibrant and engaged community of viewers',
      imageUrl: '/images/creative.png' // Replace with actual image URL
    },
    {
      color: 'blue',
      title: 'Expand Your Reach',
      description: 'Let our AI tools handle the heavy lifting so you can focus on what you do best.',
      imageUrl: '/images/expand.png' // Replace with actual image URL
    },
    {
      color: 'red',
      title: 'Boost Your Revenue',
      description: 'Leverage our creator-first revenue model to turn your passion into a thriving career.',
      imageUrl: '/images/revenue.png' // Replace with actual image URL
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold text-center mb-8">
        Creators: Your Next Big Break Awaits
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default CreatorDashboard;