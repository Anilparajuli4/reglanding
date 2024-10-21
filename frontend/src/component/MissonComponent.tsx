

const MissionComponent = () => {
  return (
    <div className="flex items-center justify-center md:py-1 py-2 px-6 bg-gray-100  rounded-lg shadow w-full md:max-w-7xl mx-auto mt-24">
      {/* Left Section */}
      <div className="md:pr-12 pr-7 flex-1 ">
      <div className="flex items-center md:pb-6  mb-4 md:mb-6 space-x-1">
          <img className='md:h-7 h-2' src='/images/6.png' />
          <h1 className="md:text-2xl text-[10px]  font-bold">Regaarder</h1>
        </div>
        <h2 className="md:text-4xl  font-bold text-gray-900 md:mb-6 mb-2">Our Mission</h2>
        <p className="md:text-lg text-[8px] text-gray-600 leading-relaxed md:mb-6 mb-2">
          Regaarder empowers creators by handling the technical work, so they can focus on quality content. Viewers enjoy personalized content and can request what they want, anytime. We're pushing innovation to become the top platform for creators and audiences alike.
        </p>
        <a href="#" className="text-blue-600 hover:underline font-medium">
          Learn more &gt;
        </a>
      </div>
      
      {/* Right Section */}
        <div className=' flex-1'>
   <img src='./images/tick.png' className='w-full  bg-cover'/>
    </div>
    </div>
  );
};




export default MissionComponent;
