// src/components/NavBar.js
import { useNavigate, useLocation } from "react-router-dom";
import React, { useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTextScramble } from "../hooks/useTextScramble";
import DarkMode from "./DarkMode/DarkMode";
import ChatBot from "../components/ChatBot";
import { ChatIcon, UpArrow, CloseIcon } from "../assets/icons/icons";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = () => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const location = useLocation();

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Projects", url: "/projects" },
    { id: 3, title: "Experience", url: "/experience" },
    { id: 4, title: "About Me", url: "/about" },
  ];
  
  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      delay: "0",
      duration: 1,
      ease: "power1.in",
    });
  };

  return (
    <div className="top-0 right-0 z-10 w-full">
      {/* VERTICAL NAV BAR */}
      {location.pathname === "/" ? (
        <div
          id="horizontal-navbar"
          className="flex fixed justify-end flex-wrap bg-transparent right-10"
        >
          <ul className="flex flex-col items-end flex-wrap bg-transparent">
            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title); 
              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className="text-color-primary text-5xl font-inter font-bold mx-5 my-7 z-10 hover:text-cyan-500 hover:tracking-wider"
                  style={{
                    backgroundColor: "transparent",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {scrambledTitle}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          id="vertical-navbar"
          className="flex justify-end bg-background w-full fixed "
        >
          <ul className="flex justify-between bg-background w-full px-40">
            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title); 
              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className="text-color-primary text-4xl font-inter font-bold py-3 px-5 z-10 mx-10 hover:text-cyan-500 hover:tracking-wider"
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {scrambledTitle}
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <div className="flex justify-between items-center fixed bottom-10 left-0 right-0 px-10">
        <div className="flex items-center space-x-4">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-color-primary text-white p-3 rounded-full"
          >
            <ChatIcon className="overflow-hidden cursor-none" />
          </button>

          <DarkMode className="flex" />
        </div>

        <button
          onClick={scrollToTop}
          className="bg-color-primary text-white p-3 rounded-full"
        >
          <UpArrow className="cursor-none" />
        </button>
      </div>
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-50 z-30">
          <div className="relative w-auto h-auto p-4 bg-card-primary-top rounded-lg">
            <button
              onClick={() => setIsChatOpen(false)}
              className="absolute top-2 right-2 text-red-500"
            >
              <CloseIcon
                id="clickable"
                className="w-7 h-7 text-color-red z-20 cursor-none"
              />
            </button>
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
