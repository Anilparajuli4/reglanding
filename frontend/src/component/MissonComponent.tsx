
import { Check } from 'lucide-react';

interface FeatureItemProps {
  color: string;
  text: string;
  className: string
}

const MissionComponent = () => {
  return (
    <div className="flex  md:p-12 py-6 px-3 bg-gray-100  rounded-lg shadow w-full md:max-w-7xl mx-auto mt-24">
      {/* Left Section */}
      <div className="md:pr-12 pr-7 w-[60%] ">
      <div className="flex items-center md:pb-6  mb-4 md:mb-0 space-x-1">
          <img className='md:h-7 h-3' src='/images/6.png' />
          <h1 className="md:text-2xl text-[14px]  font-bold">Regaarder</h1>
        </div>
        <h2 className="md:text-4xl  font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="md:text-lg text-[8px] text-gray-600 leading-relaxed mb-6">
          Regaarder empowers creators by handling the technical work, so they can focus on quality content. Viewers enjoy personalized content and can request what they want, anytime. We're pushing innovation to become the top platform for creators and audiences alike.
        </p>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Learn more &gt;
        </a>
      </div>
      
      {/* Right Section */}
        <div className="bg-white w-60 md:w-1/2 md:p-6 px-7 md:h-80 h-30 rounded-lg relative  ">
      <div className="space-y-8 absolute py-2">
        <FeatureTag color="bg-orange-500" text="Engaged Community" className="md:ml-10 ml=6" />
        <FeatureTag color="bg-green-600" text="Enhanced Tools" className="ml-2 " />
        <FeatureTag color="bg-violet-600" text="AI Integration" className="md:ml-16 ml-10"/>
        <FeatureTag color="bg-pink-500" text="Audio Translating" className="ml-0" />
      </div>
      <div className="absolute md:top-24 top-14 md:right-6 right-1 bg-white md:py-6 py-2 md:px-10 px-5 shadow-lg">
        <div className="bg-green-100 rounded-full py-2 px-1 md:py-5 md:px-6">
          <Check className="md:w-16 w-6 md:h-16 h-6 text-green-500" />
        </div>
      </div>
    </div>
    </div>
  );
};


const FeatureTag = ({ color, text, className }:FeatureItemProps) => (
  <div className={`flex md:w-72 w-28 items-center bg-white rounded-full shadow-md px-5 md:py-2 py-1  ${className}`}>
     
    <div className={`md:w-6 w-2 md:h-6 h-2 rounded-full  ${color} mr-2`}></div>
    <span className=" md:text-xl text-[7px] font-medium px-2">{text}</span>

  
  </div>
);

export default MissionComponent;
