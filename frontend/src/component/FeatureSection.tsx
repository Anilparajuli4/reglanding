
import { WiDirectionRight } from 'react-icons/wi';

const FeaturesSection = () => {
  return (
    <div className="flex md:mt-24 mt-5 flex-col items-center sm:mt-28  justify-center min-h-screen bg-gray-50 py-16 ">
      <h1 className="md:text-3xl text-[16px] font-bold text-center text-gray-900 w-96">
        Explore Regaarder’s Revolutionary Features
      </h1>
      <div className='rounded-full text-[12px] md:text-[16px] px-5 py-2 bg-red-100 flex items-center justify-center mt-10 md:mt-20 mb-6'>
      <p className="text-center text-red-500  text-sm uppercase tracking-widest">
        for viewers
      </p> 
      </div>
     

      <div className="grid grid-cols-2 gap-14 mt-12 px-3 max-w-5xl">
     

        {/* Power to Influence */}
      <div className="flex items-center space-x-4 md:text-[16px] text-[7px]">
          <div className="bg-red-100 md:p-4 p-2 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 md:w-12 md:h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Microphone">
            <path id="Vector" d="M10 16V8C10 6.4087 10.6321 4.88258 11.7574 3.75736C12.8826 2.63214 14.4087 2 16 2C17.5913 2 19.1174 2.63214 20.2426 3.75736C21.3679 4.88258 22 6.4087 22 8V16C22 17.5913 21.3679 19.1174 20.2426 20.2426C19.1174 21.3679 17.5913 22 16 22C14.4087 22 12.8826 21.3679 11.7574 20.2426C10.6321 19.1174 10 17.5913 10 16ZM26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15C24.7348 15 24.4804 15.1054 24.2929 15.2929C24.1054 15.4804 24 15.7348 24 16C24 18.1217 23.1571 20.1566 21.6569 21.6569C20.1566 23.1571 18.1217 24 16 24C13.8783 24 11.8434 23.1571 10.3431 21.6569C8.84285 20.1566 8 18.1217 8 16C8 15.7348 7.89464 15.4804 7.70711 15.2929C7.51957 15.1054 7.26522 15 7 15C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6.00305 18.4782 6.9249 20.8672 8.5873 22.7051C10.2497 24.543 12.5346 25.6991 15 25.95V30C15 30.2652 15.1054 30.5196 15.2929 30.7071C15.4804 30.8946 15.7348 31 16 31C16.2652 31 16.5196 30.8946 16.7071 30.7071C16.8946 30.5196 17 30.2652 17 30V25.95C19.4654 25.6991 21.7503 24.543 23.4127 22.7051C25.0751 20.8672 25.997 18.4782 26 16Z" fill="#A1F64B"/>
            </g>
           </svg>

          </div>
          <div className='text-[#161C2D]'>
            <h3 className="md:text-xl text-[9px] font-semibold text-[#161C2D]">Audio Translating</h3>
            <p className="mt-2 text-gray-500">
            Translate your voice into multiple languages while keeping your tone. Connect globally with ease!
            </p>
          </div>
        </div>

        {/* Request Your Dream Content */}
        <div className="flex items-center space-x-4 md:text-[16px] text-[7px]">
          <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 md:w-12 md:h-12" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
           <g id="Video">
           <path id="Vector" d="M29.5 26C29.5 26.2652 29.3946 26.5196 29.2071 26.7071C29.0196 26.8946 28.7652 27 28.5 27H4.5C4.23478 27 3.98043 26.8946 3.79289 26.7071C3.60536 26.5196 3.5 26.2652 3.5 26C3.5 25.7348 3.60536 25.4804 3.79289 25.2929C3.98043 25.1054 4.23478 25 4.5 25H28.5C28.7652 25 29.0196 25.1054 29.2071 25.2929C29.3946 25.4804 29.5 25.7348 29.5 26ZM29.5 7V21C29.5 21.5304 29.2893 22.0391 28.9142 22.4142C28.5391 22.7893 28.0304 23 27.5 23H5.5C4.96957 23 4.46086 22.7893 4.08579 22.4142C3.71071 22.0391 3.5 21.5304 3.5 21V7C3.5 6.46957 3.71071 5.96086 4.08579 5.58579C4.46086 5.21071 4.96957 5 5.5 5H27.5C28.0304 5 28.5391 5.21071 28.9142 5.58579C29.2893 5.96086 29.5 6.46957 29.5 7ZM21 14C21 13.8393 20.9612 13.681 20.887 13.5385C20.8128 13.396 20.7053 13.2734 20.5737 13.1812L15.5737 9.68125C15.4239 9.57629 15.2482 9.51444 15.0656 9.50244C14.8831 9.49043 14.7008 9.52873 14.5385 9.61316C14.3762 9.69759 14.2402 9.82491 14.1452 9.98128C14.0503 10.1377 14.0001 10.3171 14 10.5V17.5C14.0001 17.6829 14.0503 17.8624 14.1452 18.0187C14.2402 18.1751 14.3762 18.3024 14.5385 18.3868C14.7008 18.4713 14.8831 18.5096 15.0656 18.4976C15.2482 18.4856 15.4239 18.4237 15.5737 18.3188L20.5737 14.8188C20.7053 14.7266 20.8128 14.604 20.887 14.4615C20.9612 14.319 21 14.1607 21 14Z" fill="#473BF0"/>
            </g>
          </svg>

          </div>
          <div className='text-[#161C2D]'>
            <h3 className="md:text-xl text-[9px] font-semibold ">Tailored Video Experience</h3>
            <p className="mt-2">
            Discover content curated just for you, with the ability to schedule your favorite videos at your preferred times
            </p>
          </div>
        </div>


        <div className="flex items-center space-x-4 md:text-[16px] text-[7px]">
          <div className="bg-purple-100 p-4 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 md:w-12 md:h-12" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="Lightning">
           <path id="Vector" d="M26.7322 15.6816L12.7322 30.6816C12.5838 30.84 12.388 30.9457 12.1742 30.983C11.9604 31.0203 11.7404 30.987 11.5472 30.8882C11.354 30.7894 11.1982 30.6305 11.1032 30.4354C11.0083 30.2403 10.9794 30.0196 11.0209 29.8066L12.8534 20.6404L5.64965 17.9354C5.49494 17.8775 5.35697 17.7822 5.24808 17.658C5.13918 17.5338 5.06275 17.3846 5.02561 17.2236C4.98847 17.0627 4.99177 16.895 5.03523 16.7357C5.07869 16.5763 5.16094 16.4302 5.27465 16.3104L19.2747 1.31038C19.423 1.15205 19.6188 1.04627 19.8326 1.009C20.0464 0.971735 20.2664 1.005 20.4596 1.10378C20.6528 1.20256 20.8086 1.3615 20.9036 1.55661C20.9985 1.75172 21.0274 1.97241 20.9859 2.18538L19.1484 11.3616L26.3521 14.0629C26.5057 14.1211 26.6426 14.2163 26.7506 14.34C26.8587 14.4637 26.9346 14.6122 26.9717 14.7722C27.0087 14.9322 27.0058 15.0989 26.9632 15.2575C26.9205 15.4161 26.8395 15.5618 26.7271 15.6816H26.7322Z" fill="#F64B4B"/>
           </g>
          </svg>

          </div>
          <div className='text-[#161C2D]'>
            <h3 className="md:text-xl text-[9px] font-semibold ">Power to Influence</h3>
            <p className="mt-2 ">
            Vote in exciting contests and help shape the content that rises to the top.
            </p>
          </div>
        </div>

      
         {/* Request Your Dream Content */}
         <div className="flex items-center space-x-4 md:text-[16px] text-[7px]">
          <div className="bg-green-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 md:w-12 md:h-12 text-green-500"
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
            <h3 className="md:text-xl text-[9px] font-semibold text-gray-900">Request Your Dream Content</h3>
            <p className="mt-2 text-gray-500">
              Have a specific video idea? Request it, and see it come to life on Regaarder.
            </p>
          </div>
        </div>

        {/* Engaged Community */}
        <div className="flex items-center space-x-4 md:text-[16px] text-[7px]">
          <div className="bg-gray-100 p-4 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 md:w-12 md:h-12" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g id="Alarm">
                  <path id="Vector" d="M8.20806 4.70806L4.20806 8.70806C4.02042 8.8957 3.76592 9.00111 3.50056 9.00111C3.23519 9.00111 2.9807 8.8957 2.79306 8.70806C2.60542 8.52042 2.5 8.26592 2.5 8.00056C2.5 7.73519 2.60542 7.4807 2.79306 7.29306L6.79306 3.29306C6.9807 3.10542 7.23519 3 7.50056 3C7.76592 3 8.02042 3.10542 8.20806 3.29306C8.3957 3.4807 8.50111 3.73519 8.50111 4.00056C8.50111 4.26592 8.3957 4.52042 8.20806 4.70806ZM30.2081 7.29306L26.2081 3.29306C26.0204 3.10542 25.7659 3 25.5006 3C25.2352 3 24.9807 3.10542 24.7931 3.29306C24.6054 3.4807 24.5 3.73519 24.5 4.00056C24.5 4.26592 24.6054 4.52042 24.7931 4.70806L28.7931 8.70806C28.886 8.80097 28.9963 8.87467 29.1177 8.92495C29.2391 8.97523 29.3692 9.00111 29.5006 9.00111C29.632 9.00111 29.7621 8.97523 29.8835 8.92495C30.0048 8.87467 30.1151 8.80097 30.2081 8.70806C30.301 8.61515 30.3747 8.50485 30.4249 8.38345C30.4752 8.26206 30.5011 8.13195 30.5011 8.00056C30.5011 7.86916 30.4752 7.73905 30.4249 7.61766C30.3747 7.49627 30.301 7.38597 30.2081 7.29306ZM28.5006 17.0006C28.5006 19.3739 27.7968 21.694 26.4782 23.6674C25.1596 25.6408 23.2855 27.1789 21.0928 28.0871C18.9 28.9954 16.4872 29.233 14.1595 28.77C11.8317 28.307 9.6935 27.1641 8.01527 25.4858C6.33704 23.8076 5.19416 21.6694 4.73113 19.3416C4.26811 17.0139 4.50575 14.6011 5.414 12.4084C6.32225 10.2156 7.86032 8.3415 9.83371 7.02292C11.8071 5.70434 14.1272 5.00056 16.5006 5.00056C19.682 5.00419 22.7322 6.26965 24.9818 8.51929C27.2315 10.7689 28.4969 13.8191 28.5006 17.0006ZM24.5006 17.0006C24.5006 16.7353 24.3952 16.481 24.2077 16.2934C24.0201 16.1059 23.7658 16.0006 23.5006 16.0006H17.5006V10.0006C17.5006 9.73534 17.3952 9.48099 17.2077 9.29345C17.0201 9.10591 16.7658 9.00056 16.5006 9.00056C16.2353 9.00056 15.981 9.10591 15.7934 9.29345C15.6059 9.48099 15.5006 9.73534 15.5006 10.0006V17.0006C15.5006 17.2658 15.6059 17.5201 15.7934 17.7077C15.981 17.8952 16.2353 18.0006 16.5006 18.0006H23.5006C23.7658 18.0006 24.0201 17.8952 24.2077 17.7077C24.3952 17.5201 24.5006 17.2658 24.5006 17.0006Z" fill="#A668D5"/>
                  </g>
                 </svg>


          </div>
          <div className='text-[#161C2D]'>
            <h3 className="md:text-xl text-[9px] font-semibold ">Flexible Content Scheduling</h3>
            <p className="mt-2 ">
            Set your preferred viewing times and never miss a moment of your favorite content.  
            </p>
          </div>
        </div>
          {/* Power to Influence */}
          <div className="flex items-center space-x-4 md:text-[16px] text-[7px]">
          <div className="bg-red-100 p-4 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
             className="w-4 h-4 md:w-12 md:h-12 text-red-500"
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
          <div className='text-[#161C2D]'>
            <h3 className="md:text-xl text-[9px] font-semibold ">Engaged Community</h3>
            <p className="mt-2 ">
            Dive into interactive features like comment awards and explore content that matches your interests..
            </p>
          </div>
        </div>

         {/* Flexible Content Scheduling */}
         

      </div>
      <div>
        <button className='flex bg-[#DF68FD] text-white md:px-4 px-2 md:py-2 py-1 text-[12px] md:text-[16px] justify-center items-center md:mt-24 mt-12 rounded-md'>Discover All Features <span><WiDirectionRight className='text-2xl md:text-4xl'/></span></button>
       
      </div>
    </div>
  );
};

export default FeaturesSection;
