"use client"
import React, { useEffect } from 'react';

const Socialbar: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl24671457.cpmrevenuegate.com/f9/54/8a/f9548a9172861f26913112f7809e02d4.js';
    script.async = true;

    document.getElementById('ad-container')?.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.getElementById('ad-container')?.removeChild(script);
    };
  }, []);

  return <div id="ad-container" />;
};

export default Socialbar;
