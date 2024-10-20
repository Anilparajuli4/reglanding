

const PricingCard= () => {
  return (
    <div className="max-w-4xl mx-auto p-6 font-sans mt:16 md:mt-24">
      <h1 className="md:text-3xl text-[14px]  font-bold text-center mb-2">Elevate Your Experience: Become a VIP Member</h1>
      <p className="text-center text-[8px] md:text-lg text-gray-600 mb-8">Unlock extraordinary benefits for just $1—one-time only! Act fast, this offer won't last long.</p>
      
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 space-x-6 mt-7">
        {/* VIP Access Card */}
        <div className="flex-1 border border-[#9E3DFF] rounded-lg py-12 px-8 relative">
          <div className="mb-4">
            <span className="bg-purple-100 text-black text-xs  border-2 border-[#DF68FD] font-semibold py-1 px-3 rounded-full">MOST POPULAR</span>
          </div>
          <h2 className="md:text-xl  font-bold mb-2">Vip Access</h2>
          <p className="text-sm text-gray-600 mb-4">Reserved for the first 1,000 users.</p>
          <p className="md:text-3xl text-lg md:font-semibold font-bold mb-4">$1<span className="text-sm font-normal">/One Time Only</span></p>
          <button className=" bg-[#DF68FD] text-[12px] md:text-[16px] px-5 text-white py-2 rounded-lg mb-6">Sign Up Now</button>
          
          <h3 className="font-semibold text-[13px] md:text-[16px] mb-2">What's included:</h3>
          <ul className="space-y-2 mb-16 ">
            {['Priority Access', 'Exclusive Content', 'Up to 10% Off', 'Personalized Onboarding', 'Direct Feedback Channel', 'Crowdfunding Advantages'].map((item, index) => (
              <li key={index} className="flex items-center ">
                <svg className="md:w-5 md:h-5 w-3 h-3 mr-2 text-secondary_color" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          
          <div className="absolute bottom-0 left-0 right-0 bg-purple-100 p-3 rounded-b-lg">
            <p className="md:text-sm text-purple-700  text-[12px] md:text-[16px]">
              Hurry: Only 1,000 VIP spots available! Secure your place and start
            </p>
          </div>
        </div>
        
        {/* Normal Sign-Up Card */}
        {/* md:flex-1 */}
        <div className="flex-1 border flex-col justify-between border-[#E7E5F9] relative flex rounded-lg py-16 md:px-8 px-6">
        <div className="space-y-6 h-[530px] w-[230px]">
          <h2 className="md:text-xl font-bold mb-2">Normal Sign-Up</h2>
          <p className="text-sm text-gray-600 mb-4">Join the Regaarder community</p>
          <p className="md:text-3xl text-lg font-semibold mb-4">$0</p>
          <button className="md:px-5 px-3 bg-white text-secondary_color border border-secondary_color md:py-2 py-1 md:text-[16px] text-[12px]  rounded-lg mb-6">Sign Up Now</button>
          
          <h3 className="font-semibold text-[13px] md:text-[16px]  mb-2">What's included:</h3>
          
          <ul className="space-y-2 ">
            {['Personalized Content Curation', 'Access to Revolutionary Features', 'Crowdfunding Updates', 'Earn Customizable Gifts'].map((item, index) => (
              <li key={index} className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-secondary_color" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <div className="md:mt-6 mt-24  absolute bottom-0 left-0  right-0 bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Bonus:</span> Every friend you invite who signs up and contributes will bring you closer to unlocking more perks and exclusive content
            </p>
          </div>
        
          </div>
          
         
        </div>
        
      </div>
    </div>
  );
};

export default PricingCard;  