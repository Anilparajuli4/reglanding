import { ArrowRight } from 'lucide-react';

function Content() {
  return (
    <div className="text-[#fff]   md:mt-6    py-4 sm:px-4 overflow-x-hidden">
        <div className="flex flex-col items-center   space-y-4">
            <div className="p-6 px-4  flex items-center   flex-col gap-y-4">
               <div className='border flex items-center gap-2 p-2 border-[#C6B0FF]'>
               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
  <path d="M11.6089 3.45163L11.6439 3.4648L16.0536 5.11837C16.5604 5.30756 16.9482 5.45573 17.242 5.71459C17.5046 5.94597 17.7068 6.23782 17.8313 6.56489C17.9705 6.93082 17.9731 7.3457 17.9723 7.88658L17.9722 11.0355C17.9722 13.0548 16.7413 14.7353 15.4146 15.9685C14.0765 17.2124 12.5505 18.0863 11.7691 18.4935L11.7383 18.5096C11.6005 18.5818 11.4506 18.6593 11.2585 18.6966C11.1002 18.7274 10.9005 18.7274 10.7422 18.6966C10.5501 18.6593 10.4004 18.5819 10.2626 18.5097L10.232 18.4937C9.45062 18.0865 7.92423 17.2124 6.58603 15.9685C5.25939 14.7353 4.02851 13.0548 4.02851 11.0355L4.0284 7.88693C4.02762 7.34605 4.03015 6.93082 4.1694 6.56489C4.29386 6.23782 4.49611 5.94597 4.75866 5.71459C5.0524 5.45573 5.43996 5.30768 5.94668 5.11849L10.3564 3.46495L10.3916 3.4517C10.524 3.40167 10.6628 3.35016 10.807 3.32933C10.9352 3.3108 11.0654 3.3108 11.1937 3.32933C11.3378 3.35016 11.4764 3.4016 11.6089 3.45163ZM10.9978 8.95779C10.2679 8.27411 9.16529 8.12372 8.31432 8.86458C7.40955 9.65228 7.28009 10.9741 7.99324 11.9091C8.38489 12.4227 9.3233 13.3218 10.0023 13.9521L10.0097 13.959C10.1446 14.0842 10.257 14.1886 10.3571 14.2673C10.4623 14.3499 10.5676 14.4155 10.6927 14.4547C10.8874 14.5156 11.1084 14.5156 11.3031 14.4547C11.4283 14.4155 11.5336 14.3499 11.6388 14.2673C11.7389 14.1886 11.8512 14.0842 11.9861 13.9591L11.9935 13.9521C12.6726 13.3218 13.611 12.4227 14.0026 11.9091C14.7136 10.9769 14.6035 9.6453 13.6789 8.86233C12.8176 8.13284 11.7271 8.27382 10.9978 8.95779Z" fill="url(#paint0_linear_3738_19055)" stroke="url(#paint1_linear_3738_19055)" stroke-width="0.507042" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_3738_19055" x1="14.372" y1="17.2977" x2="9.07337" y2="10.554" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C6B0FF"/>
      <stop offset="1" stop-color="#C6B0FF" stop-opacity="0.36"/>
    </linearGradient>
    <linearGradient id="paint1_linear_3738_19055" x1="20.1522" y1="12.9625" x2="11.0003" y2="18.9732" gradientUnits="userSpaceOnUse">
      <stop stop-color="#C6B0FF"/>
      <stop offset="1" stop-color="white" stop-opacity="0.14"/>
    </linearGradient>
  </defs>
</svg>
                <p className=" md:text-[16px] text-[7px] text-center border-[#C6B0FF] py-2">Join our creator program and become the next big star with unmatched support.</p></div> 
                <p className="md:text-7xl text-lg font-semibold text-center">Earn While You Dream – Let AI  <br/><span className="text-[#CAAFDE] inline-block md:mt-2">Do the Heavy Lifting</span></p>
                <p className="text-[#666] text-[10px]  md:text-[16px] text-center">Create Fearlessly with Zero Editing Effort – Turn Your Ideas into Income!
                .</p>
            </div>
       <div className="max-w-sm flex   sm:max-w-md  px-4 sm:px-0">
      <div className="flex items-center  bg-white rounded-md py-2 px-3 sm:px-4 shadow-md ">
        <input
          type="text"
          className="flex-grow text-gray-800 text-base sm:text-lg focus:outline-none truncate"
          placeholder="Join Our Creator Squad for Free"
          readOnly
        />
        <button
          className="ml-2 bg-gray-100 rounded-md p-1.5 sm:p-2 hover:bg-gray-200 focus:outline-none flex-shrink-0"
          aria-label="Join"
        >
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        </button>
      </div>
    </div>
        </div>
        
       <div className='flex flex-col md:mt-72 mt-24 relative items-center'>
        <div className="mt-20 px-16  absolute left-12 bottom-0 ">
            <img src='/images/studio.png' className="bg-cover w-full" height={1000} width={1000} alt="img"/>
        </div>
       
        <div className="absolute right-36 bottom-0">
            <img src='/images/Editor.png' className="bg-cover w-full" height={1000} width={1000} alt="img"/>
        </div>
        <div className="flex items-center z-10">
            <img src='/images/creator.png' className="bg-cover w-5xl" height={1000} width={1000} alt="img"/>
        </div>
        </div>
    </div>
  )
}

export default Content


