import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useTextScramble } from "../hooks/useTextScramble";
import DarkMode from "./DarkMode/DarkMode";
import ChatBot from "../components/ChatBot";
import { ChatIcon, UpArrow, CloseIcon } from "../assets/icons/icons";

gsap.registerPlugin(ScrollToPlugin);

const NavBar = ({ startNavbarAnimation }) => {
  const navigate = useNavigate();
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const location = useLocation();
  const scrollThreshold = 250;
  let lastScrollY = window.scrollY;

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Projects", url: "/projects" },
    { id: 3, title: "Experience", url: "/experience" },
    { id: 4, title: "About Me", url: "/about" },
  ];

  useEffect(() => {
    if (location.pathname !== "/") {
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;

      if (currentScrollY > scrollThreshold) {
        setIsScrolled(true);

        gsap.to("#horizontal-navbar", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to("#vertical-navbar", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });
      } else if (scrollDirection === "up" && currentScrollY <= scrollThreshold) {
        setIsScrolled(false);
        gsap.to("#horizontal-navbar", {
          y: -100,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        });

        gsap.to("#vertical-navbar", {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollDirection, location.pathname]);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: "power1.in",
    });
  };

  return (
    <div className="top-0 w-full">
      {location.pathname === "/" && !isScrolled ? (
        <div
          id="vertical-navbar"
          className="z-20 flex fixed justify-end flex-wrap bg-transparent right-10 mt-5">
          <ul className="flex flex-col items-end flex-wrap bg-transparent">
            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title);
              const isCurrentPage = location.pathname === url;

              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className={`text-color-primary font-inter font-bold mx-5 my-2 z-10 md:my-7 hover:text-cyan-500 hover:tracking-widest transition-all duration-300 ${
                    isCurrentPage
                      ? "text-3xl md:text-5xl uppercase" // Larger, capitalized text for the current page
                      : "text-3xl md:text-5xl" // Regular size for other links
                  }`}
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {scrambledTitle}
                  {isCurrentPage && (
                    <div
                      className="h-1 w-full bg-color-primary absolute bottom-[-10px] left-0 transition-all duration-300"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div
          id="horizontal-navbar"
          className="z-20 flex justify-end items-center align-middle shadow-xl bg-background w-full bg-gradient-to-t from-card-primary-bottom to-card-primary-top fixed top-0 md:pt-5 md:pb-7"
        >
          <ul className="flex justify-between w-full h-full md:px-20 lg:px-40">
            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title);
              const isCurrentPage = location.pathname === url;

              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  id="clickable"
                  className={`text-color-primary font-inter font-bold px-5 z-10 mx-10 hover:text-color-tertiary hover:tracking-widest transition-all duration-300 text-2xl md:text-3xl ${
                    isCurrentPage
                      ? "text-3xl md:text-4xl uppercase font-caveat" 
                      : "" 
                  }`}
                  style={{
                    position: "relative",
                    whiteSpace: "nowrap",
                  }}
                >
                  {scrambledTitle}
                  {isCurrentPage && (
                    <div
                      className="h-1 w-full bg-color-primary absolute bottom-[-30px] left-0 transition-all duration-300"
                    />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center fixed bottom-5 left-0 right-0 px-5 md:bottom-10 md:px-10">
        <div id="clickable" className="flex items-center space-x-4 md:pl-5">
          <button
            id="clickable"
            onClick={() => setIsChatOpen(true)}
            className="bg-color-primary text-white p-3 rounded-full shadow-xl border-2 border-white hover:scale-110 hover:shadow-color-primary-shadow hover:shadow-xl transition-all duration-300"
          >
            <ChatIcon className="cursor-none w-5 md:w-8" />
          </button>

          <DarkMode className="flex shadow-xl border-2 border-color-primary hover:shadow-color-primary-shadow transition-all duration-300" />
        </div>

        <button
          id="clickable"
          onClick={scrollToTop}
          className="bg-color-primary fill-white p-3 rounded-full md:mr-5 shadow-xl border-2 border-white hover:scale-110 hover:shadow-color-primary-shadow hover:shadow-xl transition-all duration-300"
        >
          <UpArrow className="cursor-none w-5 md:w-8" />
        </button>
      </div>

      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-65 z-30">
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
