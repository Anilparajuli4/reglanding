import { ArrowRight } from 'lucide-react';

function Content() {
  return (
    <div className="text-[#fff] md:mt-6  py-6 sm:px-4 overflow-x-hidden">
        <div className="flex flex-col items-center md:items-start">
            <div className="p-6 px-4 md:px-16 flex   flex-col gap-y-4">
                <p className="border md:text-[16px] text-[7px] text-center border-[#C6B0FF] py-2">Join our creator program and become the next big star with unmatched support.</p>
                <p className="md:text-7xl text-lg font-semibold text-center">Earn While You Dream – Let AI  <br/><span className="text-[#CAAFDE] inline-block md:mt-2">Do the Heavy Lifting</span></p>
                <p className="text-[#666] text-[10px] md:text-[16px] text-center">Create Fearlessly with Zero Editing Effort – Turn Your Ideas into Income!
                .</p>
            </div>
       <div className="max-w-sm sm:max-w-md ml-10 px-4 sm:px-0">
      <div className="flex items-center bg-white rounded-full py-2 px-3 sm:px-4 shadow-md ">
        <input
          type="text"
          className="flex-grow text-gray-800 text-base sm:text-lg focus:outline-none truncate"
          placeholder="Join Our Creator Squad for Free"
          readOnly
        />
        <button
          className="ml-2 bg-gray-100 rounded-full p-1.5 sm:p-2 hover:bg-gray-200 focus:outline-none flex-shrink-0"
          aria-label="Join"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
      </div>
    </div>
        </div>
        <div className="mt-20 px-16">
            <img src='/images/frontuser.png' className="bg-cover w-full" height={1000} width={1000} alt="img"/>
        </div>
    </div>
  )
}

export default Content