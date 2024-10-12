"use client"
import { useEffect, useRef } from "react";

export default function BigBanner() {
  const banner = useRef(null);

  useEffect(() => {
    // Function to update ad size based on screen width
    function updateAdSize() {
      let width, height;

      if (window.innerWidth < 640) {
        // Small devices
        width = window.innerWidth * 0.9; // 90% of the screen width
        height = 90; // Fixed height
      } else {
        // Larger devices
        width = 728; // Default width
        height = 90; // Fixed height
      }

      if (banner.current) {
        banner.current.style.width = `${width}px`;
        banner.current.style.height = `${height}px`;
      }
    }

    updateAdSize(); // Initial size adjustment
    window.addEventListener("resize", updateAdSize); // Adjust on resize

    if (banner.current && !banner.current.firstChild) {
      const confScript = document.createElement("script");
      const mainScript = document.createElement("script");

      const atOptions = {
        key: "e9757328106058ad91bbea7f9647de43",
        format: "iframe",
        height: 90, // Fixed height
        width: banner.current.style.width.replace('px', ''), // Dynamic width
        params: {},
      };

      confScript.type = "text/javascript";
      confScript.innerHTML = `atOptions = ${JSON.stringify(atOptions)};`;

      mainScript.type = "text/javascript";
      mainScript.src = `//www.topcreativeformat.com/${atOptions.key}/invoke.js`;

      banner.current.appendChild(confScript);
      banner.current.appendChild(mainScript);
    }

    return () => {
      window.removeEventListener("resize", updateAdSize);
    };
  }, []);

  return (
    <div
      className="my-5 mx-auto"
      ref={banner}
      style={{
        maxWidth: "100%",
        height: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    ></div>
  );
}