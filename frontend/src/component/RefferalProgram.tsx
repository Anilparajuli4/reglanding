

const ReferralProgram = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20">
      <div className="bg-white shadow-md rounded-md p-6 w-full max-w-lg">
        <h1 className="text-2xl font-bold text-center text-gray-900 ">
          Join the Regaarder Referral Program
        </h1>
        <p className="text-center text-gray-600 mt-2 mb-8">
          Become a Regaarder ambassador and start earning rewards for every friend you invite!
        </p>

        <div className="bg-gray-700 text-white text-center p-4 mt-4 rounded-md">
          <p className="text-sm font-medium">Hurry up to refer</p>
          <p className="text-lg font-bold space-x-3">
            ONLY <span className="text-white">5 <span className='text-sm'>d</span> 01 <span className='text-sm'>h</span> 08 m 59 s</span> LEFT
          </p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-bold text-center text-gray-900 ">Share the love</h2>
          <ul className="mt-4 space-y-4">
            <li className="flex items-center">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m2 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className='font-semibold'>
              Share Regaarder with your network and help us grow
              </span>
             
            </li>
            <li className="flex items-center">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </span>
              <span className='font-semibold'>
              Keep referring to stack your discounts—up to 10% for 100 successful referrals!
              </span>
             
            </li>
            <li className="flex items-center">
              <span className="mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-4 0v4m-5 6h14M5 21h14m1-10H4l1-9h14l1 9z" />
                </svg>
              </span>
              <span className='font-semibold'>
              Once you hit a milestone (10, 20, 30, etc.), simply click the "Claim" button to instantly apply your discount.
              </span>
             
            </li>
          </ul>
        </div>

        <form className="mt-6">
          <input
            type="text"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <div className="flex items-center">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-gray-700 text-sm">
              I agree to <a href="#" className="text-black font-bold underline">Term & Conditions</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-secondary_color text-white p-3 rounded-md mt-4 hover:bg-purple-600"
          >
            Start referring
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReferralProgram;
