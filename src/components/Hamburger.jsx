import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTextScramble } from "../hooks/useTextScramble";
import DarkMode from "./DarkMode/DarkMode";
import ChatBot from "../components/ChatBot";
import { ChatIcon, UpArrow, CloseIcon } from "../assets/icons/icons";

gsap.registerPlugin(ScrollToPlugin);

function Hamburger() {
    const navigate = useNavigate();
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false); 
    const location = useLocation();
    const scrollThreshold = 250;
    let lastScrollY = window.scrollY;
  
    const links = [
      { id: 1, title: "Home", url: "/" },
      { id: 2, title: "Projects", url: "/projects" },
      { id: 3, title: "Experience", url: "/experience" },
      { id: 4, title: "About Me", url: "/about" },
    ];

  return (
    <div>
      {/* Hamburger Menu for Mobile Devices */}
      <div className="md:hidden fixed top-0 left-0 z-50 w-full p-5 bg-card-primary shadow-lg">
        <div className="flex justify-between items-center">
          <button
            className="text-color-primary text-2xltransition-all duration-300"
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            {isHamburgerOpen ? "✕" : "☰"}
          </button>
          <DarkMode className="ml-auto" />
        </div>

        {/* Hamburger Menu Links */}
        {isHamburgerOpen && (
          <div className="flex flex-col mt-4 space-y-4">
            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title);
              return (
                <button
                  key={id}
                  className="text-color-primary font-inter font-bold text-xl"
                  onClick={() => {
                    navigate(url);
                    setIsHamburgerOpen(false);
                  }}
                >
                  {scrambledTitle}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

export default Hamburger;
