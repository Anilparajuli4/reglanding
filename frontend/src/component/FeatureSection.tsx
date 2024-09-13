
import { WiDirectionRight } from 'react-icons/wi';

const FeaturesSection = () => {
  return (
    <div className="flex flex-col items-center sm:mt-28  justify-center min-h-screen bg-gray-50 py-16">
      <h1 className="text-3xl font-bold text-center text-gray-900 w-96">
        Explore Regaarder’s Revolutionary Features
      </h1>
      <div className='rounded-full px-5 py-2 bg-red-100 flex items-center justify-center mt-20 mb-6'>
      <p className="text-center text-red-500  text-sm uppercase tracking-widest">
        for viewers
      </p> 
      </div>
     

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 max-w-5xl">
        {/* Tailored Video Experience */}
        <div className="md:col-span-2 flex items-center justify-center flex-col">
          <div className="flex max-w-3xl items-center space-x-4 mb-4">
            <div className="bg-purple-100 p-4 rounded-full flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-purple-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-5.197-2.887A.75.75 0 009 9v6a.75.75 0 001.055.694l5.197-2.887a.75.75 0 000-1.388z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Tailored Video Experience</h3>
              <p className="mt-2 text-gray-500 w-52">
                Discover content curated just for you, with the ability to schedule your favorite videos at your preferred times.
              </p>
            </div>
          </div>
        </div>

        {/* Power to Influence */}
        <div className="flex items-center space-x-4">
          <div className="bg-red-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m2 4h1v-4h-1m-6 0h1v-2.61a1.94 1.94 0 01.32-1.01l.68-.87C8.39 8.9 8.88 8 9.53 7.3A2.89 2.89 0 0111.77 6h.47m4.76 10h-1v-4h-1m2 4h1v-4h-1m2-4h-1V6h-1m2 4h1V6h-1m0-4a10.96 10.96 0 00-8 3.38C8.06 6.84 7.36 8 7 9.14m0 7.16A10.96 10.96 0 0018.62 6c1.72 0 3.28.34 4.62 1.07M6 4.69C4.68 5.34 3.66 6.41 3 8.19M4.39 12.2C4 10.67 3.67 9.19 3.37 7.71M5 17.05A10.97 10.97 0 016 15c1.73 0 3.39.44 4.83 1.18"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Power to Influence</h3>
            <p className="mt-2 text-gray-500">
              Vote in exciting contests and help shape the content that rises to the top.
            </p>
          </div>
        </div>

        {/* Request Your Dream Content */}
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M9 6v12m6-12v12m-6-6h6"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Request Your Dream Content</h3>
            <p className="mt-2 text-gray-500">
              Have a specific video idea? Request it, and see it come to life on Regaarder.
            </p>
          </div>
        </div>

        {/* Flexible Content Scheduling */}
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-6m-6 6h12"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Flexible Content Scheduling</h3>
            <p className="mt-2 text-gray-500">
              Set your preferred viewing times and never miss a moment of your favorite content.
            </p>
          </div>
        </div>

        {/* Engaged Community */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8-4H8m8 8H8m-3.293 2.707a1 1 0 010-1.414L5.414 16H4a1 1 0 010-2h1.414l-.707-.707a1 1 0 011.414-1.414L8 13.586V12H4m0 10h16a1 1 0 001-1v-1a1 1 0 00-1-1H4m0-4h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Engaged Community</h3>
            <p className="mt-2 text-gray-500">
              Dive into interactive features like comment awards and explore content that matches your interests.
            </p>
          </div>
        </div>
      </div>
      <div className='rounded-full px-5 py-2 bg-red-100 flex items-center justify-center mt-20 mb-6'>
      <p className="text-center text-red-500  text-sm uppercase tracking-widest">
        for creators
      </p> 
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 mt-12 max-w-5xl">

        {/* Power to Influence */}
        <div className="flex items-center space-x-4">
          <div className="bg-red-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 16h-1v-4h-1m2 4h1v-4h-1m-6 0h1v-2.61a1.94 1.94 0 01.32-1.01l.68-.87C8.39 8.9 8.88 8 9.53 7.3A2.89 2.89 0 0111.77 6h.47m4.76 10h-1v-4h-1m2 4h1v-4h-1m2-4h-1V6h-1m2 4h1V6h-1m0-4a10.96 10.96 0 00-8 3.38C8.06 6.84 7.36 8 7 9.14m0 7.16A10.96 10.96 0 0018.62 6c1.72 0 3.28.34 4.62 1.07M6 4.69C4.68 5.34 3.66 6.41 3 8.19M4.39 12.2C4 10.67 3.67 9.19 3.37 7.71M5 17.05A10.97 10.97 0 016 15c1.73 0 3.39.44 4.83 1.18"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Enhanced Tools</h3>
            <p className="mt-2 text-gray-500">
            Utilize AI-driven tools for audio translation, mispronunciation correction, and more, elevating your content to new heights
            </p>
          </div>
        </div>

        {/* Request Your Dream Content */}
        <div className="flex items-center space-x-4">
          <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M9 6v12m6-12v12m-6-6h6"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">AI-Powered Creation</h3>
            <p className="mt-2 text-gray-500">
            Revolutionize your workflow with Regaarder’s Smart Editor, simplifying content creation and enhancing your videos
            </p>
          </div>
        </div>

        {/* Flexible Content Scheduling */}
        <div className="flex items-center space-x-4">
          <div className="bg-purple-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18v-6m-6 6h12"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Sponsorship Opportunties</h3>
            <p className="mt-2 text-gray-500">
            Connect with brands eager to sponsor your upcoming videos and expand your reach
            </p>
          </div>
        </div>

        {/* Engaged Community */}
        <div className="flex items-center space-x-4">
          <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 12H8m8-4H8m8 8H8m-3.293 2.707a1 1 0 010-1.414L5.414 16H4a1 1 0 010-2h1.414l-.707-.707a1 1 0 011.414-1.414L8 13.586V12H4m0 10h16a1 1 0 001-1v-1a1 1 0 00-1-1H4m0-4h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1v10a1 1 0 001 1z"
              />
            </svg>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Maximize Your Earnings</h3>
            <p className="mt-2 text-gray-500">
            Earn up to 70% of the revenue generated by your content, empowering your creative journey
            </p>
          </div>
        </div>
      </div>
      <div>
        <button className='text-white py-3 px-6 bg-secondary_color rounded-md mt-20 gap-2  flex justify-center items-center'>Descover All Features <span><WiDirectionRight size={35}/></span></button>
      </div>
    </div>
  );
};

export default FeaturesSection;
