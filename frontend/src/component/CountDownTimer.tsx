

export type TimeLeft = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  
  type TimerBoxProps = {
    value: number;
    label: string;
  };
  
  const TimerBox: React.FC<TimerBoxProps> = ({ value, label }) => (
    <div className="flex flex-col items-center">
      <div className="bg-gray-100 rounded-lg w-20 h-20 flex items-center justify-center mb-2">
        <span className="text-4xl font-bold">{value.toString().padStart(2, '0')}</span>
      </div>
      <span className="text-xs text-gray-600">{label}</span>
    </div>
  );
  
  const CountdownTimer: React.FC<TimeLeft> = ({ days, hours, minutes, seconds }) => {
    return (
      <div className="flex justify-center space-x-4 my-8">
        <TimerBox value={days} label="DAYS" />
        <TimerBox value={hours} label="HOURS" />
        <TimerBox value={minutes} label="MINS" />
        <TimerBox value={seconds} label="SECS" />
      </div>
    );
  };
  
  
  export default CountdownTimer