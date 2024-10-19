

import { useEffect, useState } from "react";
import CountdownTimer, { TimeLeft } from "./CountDownTimer";

const VIPCountdownComponent: React.FC = () => {
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({
      days: 7,
      hours: 17,
      minutes: 46,
      seconds: 56,
    });
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime.seconds > 0) {
            return { ...prevTime, seconds: prevTime.seconds - 1 };
          } else if (prevTime.minutes > 0) {
            return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
          } else if (prevTime.hours > 0) {
            return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
          } else if (prevTime.days > 0) {
            return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
          } else {
            clearInterval(timer);
            return prevTime;
          }
        });
      }, 1000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <div className="md:max-w-2xl max-w-xl mx-auto p-8 text-center mt-14 md:mt-24">
        <h1 className="md:text-4xl text-2xl font-bold mb-4">Hurry Up!</h1>
        <p className="text-gray-600 mb-6 text-[12px] md:[text-16px]">
          Only 1,000 VIP spots available! Secure your place and start enjoying these exclusive benefits now.
        </p>
        
        <CountdownTimer {...timeLeft} />
        
        <button className="w-full bg-[#DF68FD] text-white md:py-4 py-2 text-[10px]  rounded-lg md:text-xl text-lg font-semibold hover:bg-purple-600 transition-colors">
          Claim your VIP Status Now
        </button>
      </div>
    );
  };
  
  export default VIPCountdownComponent;