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
  }, [techItems]); 

  const handleTechClick = (searchUrl) => {
    navigate(searchUrl, { target: "_blank" });  
  };

  return (
    <div className="z-10 overflow-hidden bg-background-primary min-w-full my-6 py-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top">
      <div className="flex items-center justify-between whitespace-nowrap" ref={marqueeRef}>
        {techItems.map((tech, index) => {
          const logoSrc = langLogos[tech.name] || libLogos[tech.name];

          return (
            <div key={index} className="z-10 flex flex-col items-center mx-5 justify-center ">
              <a
                id="clickable"
                onClick={() => handleTechClick(tech.searchUrl)}
                className="flex flex-col items-center justify-center cursor-pointer "
              >
                <div className="z-10 flex items-center justify-center w-12 h-12  bg-white border border-card-primary-border rounded-lg shadow-lg md:w-24 md:h-24">
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
