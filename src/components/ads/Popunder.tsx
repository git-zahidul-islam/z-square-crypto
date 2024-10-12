"use client"
import React, { useEffect } from 'react';

const Popunder: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl24671565.cpmrevenuegate.com/93/1c/6c/931c6c837346c3dc526889a6d44745a8.js';
    script.async = true;

    document.getElementById('ad-container')?.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.getElementById('ad-container')?.removeChild(script);
    };
  }, []);

  return <div id="ad-container" />;
};

export default Popunder;
