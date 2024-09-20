import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

// Importing logos
import { languages as langLogos, libraries as libLogos } from "../logos";

// List of tech items with names matching keys in logos
const techItems = [
  { name: "react", searchUrl: "https://www.google.com/search?q=React" },
  { name: "tailwind", searchUrl: "https://www.google.com/search?q=Tailwind+CSS" },
  { name: "HTML", searchUrl: "https://www.google.com/search?q=HTML" },
  { name: "django", searchUrl: "https://www.google.com/search?q=Django" },
  { name: "Python", searchUrl: "https://www.google.com/search?q=Python" },
  { name: "C#", searchUrl: "https://www.google.com/search?q=C%23" },
];

const Marquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeAnimation = gsap.to(marqueeRef.current, {
      xPercent: -100,
      repeat: -1,
      duration: 10,
      ease: "linear",
      paused: true,
    });

    const marqueeElement = marqueeRef.current;

    // Pause the animation on hover
    marqueeElement.addEventListener("mouseenter", () => marqueeAnimation.pause());
    marqueeElement.addEventListener("mouseleave", () => marqueeAnimation.resume());

    marqueeAnimation.resume(); // Resume animation on page load

    return () => {
      // Cleanup event listeners
      marqueeElement.removeEventListener("mouseenter", () => marqueeAnimation.pause());
      marqueeElement.removeEventListener("mouseleave", () => marqueeAnimation.resume());
    };
  }, []);

  return (
    <div className="relative overflow-hidden bg-background-primary py-10">
      <div className="w-full flex items-center justify-between" ref={marqueeRef}>
        {techItems.map((tech, index) => {
          const logoSrc = langLogos[tech.name] || libLogos[tech.name]; // Check in both languages and libraries
          
          return (
            <div key={index} className="flex flex-col items-center mx-5">
              <a href={tech.searchUrl} target="_blank" rel="noopener noreferrer">
                {/* Display logo if available, otherwise fallback to a default image */}
                <img
                  src={logoSrc}
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/80"; // Fallback logo on error
                  }}
                  alt={`${tech.name} logo`}
                  className="w-20 h-20 object-contain"
                />
              </a>
              <span className="text-color-primary mt-2 text-lg">{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
