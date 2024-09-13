

const WhyChooseUs = () => {
  return (
    <div className="flex  flex-col items-center justify-center py-52 px-8 bg-gray-50">
      <h2 className="text-4xl tracking-tight font-bold text-gray-800 mb-4 text-center">
        Why you should choose Regaarder?
      </h2>
      <p className="text-gray-600 mb-12 text-center max-w-xl ">
        Step into the future of video with Regaarder. Join a dynamic community of 900,000+ early adopters who are shaping the future of content creation.
      </p>

      <div className="flex flex-col lg:flex-row items-center lg:space-x-12 space-y-8 lg:space-y-0">
        <div className="relative">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPCa-1WP3cwTh-l4zq8tTD4RQ1SDkrgNKpXQ&s" // Replace with the correct path to your image
            alt="Video Thumbnail"
            className="rounded-lg shadow-lg w-full max-w-lg h-60"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white p-4 rounded-full shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-green-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14.752 11.168l-5.197 3.034a1 1 0 01-1.555-.832V10.63a1 1 0 011.555-.832l5.197 3.034a1 1 0 010 1.664z"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="space-y-8 max-w-lg">
          <div className="flex items-start">
            <div className="bg-purple-100 text-secondary_color font-bold p-2 rounded-full mr-4">
              1
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Revolutionary Technology
              </h3>
              <p className="text-gray-600">
                Harness the power of AI to streamline your content creation and elevate your viewing experience.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 text-secondary_color font-bold p-2 rounded-full mr-4">
              2
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Tailored to You
              </h3>
              <p className="text-gray-600">
                Dive into content that's perfectly curated to match your interests and schedule.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="bg-purple-100 text-secondary_color font-bold p-2 rounded-full mr-4">
              3
            </div>
            <div>
              <h3 className="text-lg font-bold text-gray-800">
                Your Voice Matters
              </h3>
              <p className="text-gray-600">
                Influence Regaarder’s growth with your feedback and insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
