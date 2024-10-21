

import  { useEffect, useState } from 'react';
import { X,  } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Content() {
  const [showPopup, setShowPopup] = useState(false);
  const [preference, setPreference] = useState('');
  const navigate = useNavigate();

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleConfirm = () => {
    if (preference === 'user') {
      togglePopup(); // Navigate to the home route
    } else if (preference === 'creator') {
      navigate('/creator'); // Navigate to the creator route
    }
  };

  useEffect(()=>{
   togglePopup()
  },[])

  return (
    <div className="text-[#fff] md:mt-6 py-6 sm:px-4 overflow-x-hidden">
      <div className="flex flex-col items-center md:items-start">
        <div className="p-6 px-4 md:px-16 flex flex-col gap-y-4">
          <p className="md:text-7xl text-lg font-semibold text-center">
            Demand the Content You Crave <br/>
            <span className="text-[#CAAFDE] inline-block mt-2">
              – Watch What You Want, When You Want.
            </span>
          </p>
          <p className="text-[#666] text-[12px] md:text-[16px] text-center">
            Because Your Time Deserves Content That Speaks to You, From a Platform That Delivers.
          </p>
        </div>
        <div className="md:px-16">
          <button  className="py-2 px-3 md:py-3 font-semibold text-black rounded-xl text-[10px] md:text-[16px] bg-[#fff]">
            Get started for free
          </button>
        </div>
      </div>

      <div className="mt-20">
        <img src='/images/Frames.png' className="bg-cover w-full filter" height={1000} width={1000} alt="img" />
      </div>
    

      {showPopup && (
        <div className="fixed inset-0 bg-[#000] bg-opacity-50 flex items-center justify-center z-50">
       
          <div className="bg-gray-800 p-6 rounded-lg w-96 max-w-[90%]">
            <div className="flex justify-between items-center mb-4">
        
              <h3 className="text-xl font-semibold">Select Your Preference</h3>
              <button onClick={togglePopup} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>
            <p className="text-gray-400 mb-4">Select which describes you the best</p>
            
            <div className="space-y-4">
               
              <button
                className={`w-full relative p-4 rounded-lg flex  items-center bg-[#FFFFFF]`}
                onClick={() => setPreference('user')}
              >
               {preference === 'user' && (
               <div className='absolute top-7 right-5'>
               <svg
                 className="text-green-500 stroke-current"
                 xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 10 10"
                 fill="none"
               >
                 <path
                   d="M8.33268 2.5L3.74935 7.08333L1.66602 5"
                   stroke-width="1.66667"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 />
               </svg>
             </div>
                )}
                <div className='mr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" fill="none">
<path d="M1.33398 9.66638L7.76214 12.8805C7.84959 12.9242 7.89332 12.9461 7.93919 12.9547C7.97981 12.9623 8.02149 12.9623 8.06212 12.9547C8.10798 12.9461 8.15171 12.9242 8.23917 12.8805L14.6673 9.66638M1.33398 6.33305L7.76214 3.11897C7.84959 3.07525 7.89332 3.05338 7.93919 3.04478C7.97981 3.03716 8.02149 3.03716 8.06212 3.04478C8.10798 3.05338 8.15171 3.07525 8.23917 3.11897L14.6673 6.33305L8.23917 9.54713C8.15171 9.59085 8.10798 9.61272 8.06212 9.62132C8.02149 9.62895 7.97981 9.62895 7.93919 9.62132C7.89332 9.61272 7.84959 9.59085 7.76214 9.54713L1.33398 6.33305Z" stroke="#DF68FD" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
               
                <div className="text-left md:text-[16px] text-[12px]">
                  <div className="font-semibold text-gray-500">User</div>
                  <div className="md:text-sm text-[10px] text-gray-400">Watch videos and explore for fun</div>
                </div>
              </button>
              <button
                className={`w-full relative p-4 rounded-lg flex items-center bg-[#FFFFFF]`}
                onClick={() => setPreference('creator')}
              >
                {preference === 'creator' && (
               <div className='absolute top-7 right-5'>
               <svg
                 className="text-green-500 stroke-current"
                 xmlns="http://www.w3.org/2000/svg"
                 width="20"
                 height="20"
                 viewBox="0 0 10 10"
                 fill="none"
               >
                 <path
                   d="M8.33268 2.5L3.74935 7.08333L1.66602 5"
                   stroke-width="1.66667"
                   stroke-linecap="round"
                   stroke-linejoin="round"
                 />
               </svg>
             </div>
                )}
                <div className='mr-4'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
  <g clip-path="url(#clip0_3347_22398)">
    <path d="M1.33398 8.00037L7.76214 11.2144C7.84959 11.2582 7.89332 11.28 7.93919 11.2886C7.97981 11.2963 8.02149 11.2963 8.06212 11.2886C8.10798 11.28 8.15171 11.2582 8.23917 11.2144L14.6673 8.00037M1.33398 11.3337L7.76214 14.5478C7.84959 14.5915 7.89332 14.6134 7.93919 14.622C7.97981 14.6296 8.02149 14.6296 8.06212 14.622C8.10798 14.6134 8.15171 14.5915 8.23917 14.5478L14.6673 11.3337M1.33398 4.66704L7.76214 1.45296C7.84959 1.40923 7.89332 1.38737 7.93919 1.37876C7.97981 1.37114 8.02149 1.37114 8.06212 1.37876C8.10798 1.38737 8.15171 1.40923 8.23917 1.45296L14.6673 4.66704L8.23917 7.88111C8.15171 7.92484 8.10798 7.9467 8.06212 7.95531C8.02149 7.96293 7.97981 7.96293 7.93919 7.95531C7.89332 7.9467 7.84959 7.92484 7.76214 7.88111L1.33398 4.66704Z" stroke="#7F56D9" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <defs>
    <clipPath id="clip0_3347_22398">
      <rect width="16" height="16" fill="white"/>
    </clipPath>
  </defs>
</svg>
                </div>
             
                <div className="text-left  md:text-[16px] text-[12px]">
                  <div className="font-semibold text-gray-500">Creator</div>
                  <div className="md:text-sm text-[10px] text-gray-400">Create content and earn</div>
                </div>
              </button>
            </div>
            <button
              onClick={handleConfirm}
              className="w-full bg-[#DF68FD] text-white py-2 rounded-lg mt-6 "
            >
              Confirm
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Content;


