import React from 'react';
import { Eye, CheckCircle } from 'lucide-react';

const MissionComponent = () => {
  return (
    <div className="flex bg-white p-12 rounded-lg shadow-lg max-w-6xl mx-auto mt-24">
      {/* Left Section */}
      <div className="w-1/2 pr-12">
        <div className="flex items-center mb-6">
          <Eye className="w-6 h-6 mr-2 text-gray-700" />
          <span className="text-xl font-semibold text-gray-700">Regaarder</span>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-relaxed mb-6">
          Regaarder empowers creators by handling the technical work, so they can focus on quality content. Viewers enjoy personalized content and can request what they want, anytime. We're pushing innovation to become the top platform for creators and audiences alike.
        </p>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Learn more &gt;
        </a>
      </div>
      
      {/* Right Section */}
      <div className="w-1/2 relative">
        <div className="flex flex-col space-y-6 relative">
          <FeatureItem color="orange" text="Engaged Community" />
          <FeatureItem color="green" text="Enhanced Tools" />
          <FeatureItem color="purple" text="AI Integration" />
          <FeatureItem color="pink" text="Audio Translating" />
        </div>
        
        {/* Check Icon */}
        <div className="absolute -right-8 top-1/4 transform translate-x-1/2 bg-white p-3 rounded-full shadow-lg">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>
      </div>
    </div>
  );
};

const FeatureItem = ({ color, text }) => {
  return (
    <div className="flex items-center space-x-4">
      <div className={`bg-${color}-100 p-2 rounded-lg w-full h-14 flex items-center`}>
        <div className={`w-4 h-4 bg-${color}-500 rounded-full`}></div>
        <span className={`text-${color}-600 font-medium text-lg ml-4`}>{text}</span>
      </div>
    </div>
  );
};

export default MissionComponent;
