'use client'

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
      <div className="max-w-2xl mx-auto p-8 text-center mt-20">
        <h1 className="text-4xl font-bold mb-4">Hurry Up!</h1>
        <p className="text-gray-600 mb-6">
          Only 1,000 VIP spots available! Secure your place and start enjoying these exclusive benefits now.
        </p>
        
        <CountdownTimer {...timeLeft} />
        
        <button className="w-full bg-secondary_color text-white py-4 rounded-lg text-xl font-semibold hover:bg-purple-600 transition-colors">
          Claim your VIP Status Now
        </button>
      </div>
    );
  };
  
  export default VIPCountdownComponent;