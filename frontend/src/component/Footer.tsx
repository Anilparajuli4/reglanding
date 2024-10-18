
import { Eye, Twitter, Github, Instagram, MessageCircle, PlusSquare } from 'lucide-react';

const Footer = () => {
  return (
    <div className="container flex justify-between max-w-6xl mx-auto px-4 py-8 mt-24">
        <div className='flex flex-col justify-between'>
        <div className="flex items-center mb-4 md:mb-0">
          <img className='h-9' src='/images/logo.png' />
          <h1 className="text-2xl font-bold">Regaarder</h1>
        </div>
       
        <nav className="flex space-x-4">
          <Twitter className="w-5 h-5" />
          <Github className="w-5 h-5" />
          <Instagram className="w-5 h-5" />
          <MessageCircle className="w-5 h-5" />
          <PlusSquare className="w-5 h-5" />
        </nav>
        <p className="text-green-500 mb-2 md:mb-0">• All systems normal</p>
        </div>
      
     
    

     
        <div className=''>
          <h2 className="text-xl font-semibold mb-4">Services</h2>
          <ul className="space-y-2">
            <li>On-Demand Video Creation</li>
            <li>Direct Sponsorship Opportunities</li>
            <li>Crowdsourced Content Creation</li>
            <li>Interactive Content Engagement</li>
            <li>Creator Monetization Support</li>
          </ul>
          <p className='mt-16'>© 2024 Regaarder, Inc.</p>
        </div>
        <div className=''>
          <h2 className="text-xl font-semibold mb-4">Products</h2>
          <ul className="space-y-2">
            <li>Smart Auto Editor</li>
            <li>AI-Powered Smart Editor</li>
            <li>Audio Live Proofreader</li>
            <li>Customizable Video Player</li>
            <li>Multilingual Voice Translation</li>
          </ul>
          <div className="flex space-x-4 mt-16">
          <MessageCircle className="w-5 h-5" />
          <PlusSquare className="w-5 h-5" />
          <Eye className="w-5 h-5" />
        </div> 
        </div>
    </div>
  );
};

export default Footer;