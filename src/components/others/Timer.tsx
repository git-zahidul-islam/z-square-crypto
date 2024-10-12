"use client"
import React, { useEffect, useState } from 'react';

const Timer: React.FC = () => {
  const [seconds, setSeconds] = useState(30);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        setSeconds((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer); // Clear interval on component unmount
    } else {
      setIsDone(true);
    }
  }, [seconds]);

  return (
    <div className="fixed md:right-24 right-10 top-1/2 z-50">
      <div className="text-base font-normal mb-4 text-white/85 bg-[#272E3F] shadow-lg shadow-red-600 md:h-20 h-12 md:w-20 w-12 rounded-full flex items-center justify-center">
        {isDone ? 'Done' : `${seconds}s`}
      </div>
    </div>
  );
};

export default Timer;
