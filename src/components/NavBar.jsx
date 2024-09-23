import { useNavigate, useLocation } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
    <div className="top-0 z-20 w-full">
      {location.pathname === "/" && !isScrolled ? (
        <div
          id="vertical-navbar"
          className="flex fixed justify-end flex-wrap bg-transparent right-10 mt-5"
        >
          <ul className="flex flex-col items-end flex-wrap bg-transparent">
            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title);
              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className="text-color-primary text-3xl font-inter font-bold mx-5 my-2 z-10 hover:text-cyan-500 hover:tracking-wider md:text-5xl md:my-7"
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
          id="horizontal-navbar"
          className="flex justify-end items-center align-middle bg-background w-full fixed top-0 md:pt-5 md:pb-7"
        >
          <ul className="flex justify-between bg-background w-full md:px-20 lg:px-40">

            {links.map(({ id, title, url }) => {
              const scrambledTitle = useTextScramble(title);
              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className="text-color-primary text-2xl font-inter font-bold px-5 z-10 mx-10 hover:text-cyan-500 hover:tracking-wider md:text-4xl"
                  style={{
                    position: "relative",
                  }}
                >
                  {scrambledTitle}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      <div className="flex justify-between items-center fixed bottom-5 left-0 right-0 px-5 md:bottom-10 md:px-10">
        <div className="flex items-center space-x-4 md:pl-5">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-color-primary text-white p-3 rounded-full  shadow-lg"
          >
            <ChatIcon className="cursor-none w-5 md:w-8" />
          </button>

          <DarkMode className="flex shadow-lg" />
        </div>

        <button
          onClick={scrollToTop}
          className="bg-color-primary fill-white p-3 rounded-full md:mr-5  shadow-lg"
        >
          <UpArrow className="cursor-none w-5 md:w-8" />
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
