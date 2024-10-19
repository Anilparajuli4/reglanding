

import React from 'react';


interface TimelineEventProps {
  number: number;
  title: string;
  description: string;
  date: string;
}

interface DottedLineProps {
  start: number;
  end: number;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ number, title, description, date }) => (
  <div className="flex flex-col items-center w-1/3">
    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl font-bold mb-4 z-10
      ${number === 1 ? 'bg-red-500' : number === 2 ? 'bg-green-500' : 'bg-blue-500'}`}>
      {number}
    </div>
    <h3 className="md:text-lg text-[10px] font-semibold mb-2 text-center">{title}</h3>
    <p className="md:text-sm text-[8px] text-gray-600 text-center mb-1">{description}</p>
    <p className="md:text-xs text-[6px] text-gray-500">{date}</p>
  </div>
);


const DottedLine: React.FC<DottedLineProps> = ({ start, end }) => (
  <div 
    className="absolute top-6 border-t-2 border-dashed border-gray-300" 
    style={{
      left: `${start}%`,
      right: `${100 - end}%`,
    }}
  ></div>
);

// Define the type for the events array
interface Event {
  number: number;
  title: string;
  description: string;
  date: string;
}

const UpcomingEvents: React.FC = () => {
  // Add type annotations to the events array
  const events: Event[] = [
    {
      number: 1,
      title: "Exclusive Demo",
      description: "Get a sneak peek at our groundbreaking features on",
      date: "August 27, 2024"
    },
    {
      number: 2,
      title: "Crowdfunding Launch",
      description: "Be part of our exciting growth journey starting",
      date: "September 1, 2024"
    },
    {
      number: 3,
      title: "Full Beta Release",
      description: "Experience the full Regaarder ecosystem in",
      date: "October 2024"
    }
  ];

  return (
    <div className="max-w-3xl mx-auto md:p-8 p-4 md:mt-16 mt-2">
      <h2 className="md:text-3xl text-xl font-bold text-center mb-4 mt-24">What's Coming Up?</h2>
      <p className="text-center text-[12px] md:text-[16px] text-gray-600 mb-12">
        With lots of unique blocks, you can easily build a page without any coding.
      </p>
      <div className="flex justify-between items-start relative">
        <DottedLine start={16.67} end={50} />
        <DottedLine start={50} end={83.33} />
        {events.map((event, index) => (
          <TimelineEvent key={index} {...event} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEvents;




