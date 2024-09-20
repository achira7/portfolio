import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";  // Assuming you're using React Router

// Importing logos
import { languages as langLogos, libraries as libLogos } from "../logos";

// List of tech items with names matching keys in logos
const techItems = [
  { name: "react", searchUrl: "/projects?query=React" },  // We will update these URLs dynamically
  { name: "tailwind", searchUrl: "/projects?query=Tailwind" },
  { name: "HTML", searchUrl: "/projects?query=HTML" },
  { name: "django", searchUrl: "/projects?query=Django" },
  { name: "Python", searchUrl: "/projects?query=Python" },
  { name: "C#", searchUrl: "/projects?query=C%23" },
];

const Marquee = () => {
  const marqueeRef = useRef(null);
  const navigate = useNavigate();  // React Router hook for navigation

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeItems = marqueeElement.children;

    const totalItems = marqueeItems.length;
    for (let i = 0; i < totalItems; i++) {
      marqueeElement.appendChild(marqueeItems[i].cloneNode(true));
    }

    const totalWidth = Array.from(marqueeItems).reduce((acc, item) => acc + item.offsetWidth, 0);

    const marqueeAnimation = gsap.to(marqueeElement, {
      x: `-${totalWidth}px`,
      duration: 20,
      ease: "linear",
      repeat: -1,
      paused: true,
    });

    marqueeElement.addEventListener("mouseenter", () => marqueeAnimation.pause());
    marqueeElement.addEventListener("mouseleave", () => marqueeAnimation.resume());

    marqueeAnimation.resume();

    return () => {
      marqueeElement.removeEventListener("mouseenter", () => marqueeAnimation.pause());
      marqueeElement.removeEventListener("mouseleave", () => marqueeAnimation.resume());
    };
  }, []);

  const handleTechClick = (searchUrl) => {
    navigate(searchUrl, { target: "_blank" });  
  };

  return (
    <div className="relative overflow-hidden bg-background-primary w-full my-6 z-10">
      <div className="flex items-center justify-between whitespace-nowrap" ref={marqueeRef}>
        {techItems.map((tech, index) => {
          const logoSrc = langLogos[tech.name] || libLogos[tech.name]; 

          return (
            <div key={index} className="flex flex-col items-center mx-5 justify-center ">
              <a
              
                id="clickable"
                onClick={() => handleTechClick(tech.searchUrl)}  
                className="flex flex-col items-center justify-center cursor-pointer"
              >
                <div className="flex items-center justify-center w-24 h-24 bg-white border border-card-primary-border rounded-lg shadow-lg">
                  <img
                    src={logoSrc}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/80";
                    }}
                    alt={`${tech.name} logo`}
                    className="w-16 h-16"
                  />
                </div>

                <span className="text-color-primary font-inter font-semibold mt-2 text-lg capitalize text-center">
                  {tech.name}
                </span>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Marquee;
