import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

import { languages as langLogos, libraries as libLogos } from "../logos";

const Marquee = () => {
  const [techItems, setTechItems] = useState([]); 
  const marqueeRef = useRef(null);
  const navigate = useNavigate();  
  const git = process.env.REACT_APP_GITHUB_API_KEY
  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/achira7/repos", {
          // headers: {
          //   Authorization: `Bearer ${git}`,
          // },
        });
        const data = await response.json();

        const techSet = new Set();

        await Promise.all(
          data.map(async (repo) => {
            const languagesResponse = await fetch(repo.languages_url);
            const languagesData = await languagesResponse.json();
        
            Object.keys(languagesData).forEach((language) => {
              techSet.add(language);
            });
        
            if (repo.topics) {
              repo.topics.forEach((topic) => {
                if (topic !== "best-projects") {
                  techSet.add(topic);
                }
              });
            }
          })
        );        

        const techArray = Array.from(techSet).map((tech) => ({
          name: tech,
          searchUrl: `/projects?query=${encodeURIComponent(tech)}`, 
        }));

        setTechItems(techArray); 

      } catch (error) {
        console.error("Error fetching data from GitHub:", error);
      }
    };

    fetchRepos();
  }, []);

  useEffect(() => {
    const marqueeElement = marqueeRef.current;
    const marqueeItems = marqueeElement.children;
  
    const totalItems = marqueeItems.length;
  
    // Clone items to create an infinite effect
    for (let i = 0; i < totalItems; i++) {
      marqueeElement.appendChild(marqueeItems[i].cloneNode(true));
    }
  
    const totalWidth = Array.from(marqueeItems).reduce(
      (acc, item) => acc + item.offsetWidth,
      0
    );
  
    // Start the marquee animation
    const marqueeAnimation = gsap.to(marqueeElement, {
      x: `-${totalWidth}px`,
      duration: 20,  // Adjust this duration as needed
      ease: "linear",
      repeat: -1,
    });
  
    // Pause animation on hover
    const handleMouseEnter = () => marqueeAnimation.pause();
    const handleMouseLeave = () => marqueeAnimation.resume();
  
    marqueeElement.addEventListener("mouseenter", handleMouseEnter);
    marqueeElement.addEventListener("mouseleave", handleMouseLeave);
  
    // Clean up event listeners
    return () => {
      marqueeElement.removeEventListener("mouseenter", handleMouseEnter);
      marqueeElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [techItems]); // Dependencies include `techItems`
   

  const handleTechClick = (searchUrl) => {
    try{
      navigate(searchUrl);  
    }catch{
      navigate(`/projects?query=${encodeURIComponent(tech)}`)
    }
  };

  return (
    <div className="overflow-hidden bg-background-primary min-w-full my-6 py-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top">
      <div className="flex items-center justify-between" ref={marqueeRef}>
        {techItems.map((tech, index) => {
          const logoSrc = langLogos[tech.name] || libLogos[tech.name];

          return (
            <div key={index} className="flex flex-col items-center mx-5 justify-center ">
              <a
                id="clickable"
                onClick={() => handleTechClick(tech.searchUrl)}
                className="flex flex-col items-center justify-center cursor-pointer "
              >
                <div className="flex items-center justify-center w-12 h-12  bg-white border border-card-primary-border rounded-lg shadow-lg md:w-24 md:h-24">
                  <img
                  id="clickable"
                    src={logoSrc}
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/80";
                    }}
                    alt={`${tech.name} logo`}
                    className="w-8 h-8 md:w-16 md:h-16 "
                  />
                </div>

                <span id="clickable" className="text-color-primary font-inter font-semibold mt-2 text-sm capitalize text-center md:text-lg">
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
