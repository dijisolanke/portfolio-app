"use client";

import { useEffect, useState } from "react";
import contentData from "./content.json";

export default function Page() {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger the dissolve-in effect after component mounts
    setImageLoaded(true);

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const parallaxElement = document.getElementById("parallax-image");
      if (parallaxElement) {
        parallaxElement.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white p-5 md:p-45 flex flex-col items-center justify-center">
      <h4 className="text-gray-500 text-sm mb-8 self-center">3 min read</h4>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        {/* Image with dissolve-in animation */}
        <div
          id="parallax-image"
          className={`w-[250px] h-[250px] md:w-[300px] md:h-[500px] flex-shrink-0 transition-opacity duration-1000 ease-in-out ${
            imageLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src="/luca.jpg"
            alt="Placeholder"
            className="w-full h-full object-cover blur-[3px] rounded-[10%]"
          />
        </div>

        {/* Paragraph positioned to the right and starting halfway down */}
        <p
          className="ml-0 md:ml-6 mt-6 md:mt-[150px] text-gray-800 leading-relaxed whitespace-pre-line text-sm md:text-base px-4 md:px-0 max-w-lg"
          dangerouslySetInnerHTML={{ __html: contentData.text }}
        />
      </div>
      <h4 className="text-sm mt-8 self-center">
        Recommended argument concept:{" "}
        <a
          href="https://www.google.com/search?q=repair+attempts+gottman&rlz=1C5CHFA_enGB1094GB1094&oq=repair+attempts&gs_lcrp=EgZjaHJvbWUqBwgBEAAYgAQyCQgAEEUYORiABDIHCAEQABiABDIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIICAYQABgWGB4yCAgHEAAYFhgeMggICBAAGBYYHjIICAkQABgWGB7SAQg0NzAyajBqN6gCALACAA&sourceid=chrome&ie=UTF-8#cobssid=s"
          target="_blank"
          rel="noopener noreferrer"
          className="!text-blue-600 underline hover:text-blue-800"
        >
          Repair attempts
        </a>
      </h4>
    </div>
  );
}
