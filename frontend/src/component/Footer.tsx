
import { Eye, Twitter, Github, Instagram, MessageCircle, PlusSquare } from 'lucide-react';

const Footer = () => {
  return (
    <div className="container flex justify-between max-w-6xl mx-auto md:px-4 px-2 md:py-8 py-4 mt-16 md:mt-24">
        <div className='flex flex-col justify-between'>
        <div className="flex items-center mb-4 md:mb-0">
          <img className='md:h-9 h-4' src='/images/logo.png' />
          <h1 className="md:text-2xl text-[12px] font-bold">Regaarder</h1>
        </div>
       
        <nav className="flex md:space-x-4 space-x-2">
          <Twitter className="md:w-5 w-3 md:h-5 h-3" />
          <Github className="md:w-5 w-3 md:h-5 h-3" />
          <Instagram className="md:w-5 w-3 md:h-5 h-3" />
          <MessageCircle className="md:w-5 w-3 md:h-5 h-3" />
          <PlusSquare className="md:w-5 w-3 md:h-5 h-3" />
        </nav>
        <p className="text-green-500  md:mb-0 md:text-[16px] text-[8px]">• All systems normal</p>
        </div>
      
     
    

     
        <div className=''>
          <h2 className="md:text-xl text-[12px] font-semibold mb-4">Services</h2>
          <ul className="space-y-2 md:text-[16px] text-[8px]">
            <li>On-Demand Video Creation</li>
            <li>Direct Sponsorship Opportunities</li>
            <li>Crowdsourced Content Creation</li>
            <li>Interactive Content Engagement</li>
            <li>Creator Monetization Support</li>
          </ul>
          <p className='mt-16 md:text-[16px] text-[8px]'>© 2024 Regaarder, Inc.</p>
        </div>
        <div className=''>
          <h2 className="md:text-xl text-[12px] font-semibold mb-4">Products</h2>
          <ul className="space-y-2 md:text-[16px] text-[8px]">
            <li>Smart Auto Editor</li>
            <li>AI-Powered Smart Editor</li>
            <li>Audio Live Proofreader</li>
            <li>Customizable Video Player</li>
            <li>Multilingual Voice Translation</li>
          </ul>
          <div className="flex space-x-4 mt-16">
          <MessageCircle className="md:w-5 w-3 md:h-5 h-3" />
          <PlusSquare className="md:w-5 w-3 md:h-5 h-3" />
          <Eye className="md:w-5 w-3 md:h-5 h-3" />
        </div> 
        </div>
    </div>
  );
};

export default Footer;



