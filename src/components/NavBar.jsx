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
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const scrollThreshold = 250;
  let lastScrollY = window.scrollY;

  const links = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Projects", url: "/projects" },
    { id: 3, title: "Experience", url: "/experience" },
    { id: 4, title: "About Me", url: "/about" },
  ];

  const getPageTitle = (pathname) => {
    switch (pathname) {
      case "/":
        return "Home";
      case "/projects":
        return "Projects";
      case "/experience":
        return "Experience";
      case "/about":
        return "About Me";
      default:
        return "Page";
    }
  };

  const currentPage = getPageTitle(location.pathname);

  const scrambledLinks = links.map((link) => ({
    ...link,
    scrambledTitle: useTextScramble(link.title),
  }));

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (scrollThreshold < lastScrollY) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 1,
      ease: "power1.in",
    });
  };

  return (
    <div className="top-0 w-full navBarThing">
      {/* Hamburger Menu for Mobile Devices */}
      <div
        className={`z-20 md:hidden justify-end bg-card-primary-bottom items-center align-middle w-full ${
          isHamburgerOpen ? "" : "shadow-xl"
        } fixed top-0 `}
      >
        <div className="flex justify-between items-center  duration-300 rounded-xl my-4 mx-5">
          <button
            className={`text-color-primary text-2xl font-bold transition-transform duration-500 ease-in-out ${
              isHamburgerOpen ? "rotate-90" : "rotate-0"
            }`}
            onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
          >
            <span className="duration-300">{isHamburgerOpen ? "✕" : "☰"}</span>
          </button>
          <div className="text-color-primary font-inter text-2xl font-bold">
            {" "}
            {currentPage}{" "}
          </div>
          <DarkMode className="ml-auto" />
        </div>

        {/* Hamburger Menu Links */}
        <div
          className={`transition-all duration-500  ease-in-out z-30 ${
            isHamburgerOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-[-100px]"
          }`}
        >
          {isHamburgerOpen && (
            <div className=" flex flex-col w-full mt-4 bg-card-primary-bottom rounded-2xl">
              <div className="flex flex-col space-y-24 p-10 pb-10">
                {scrambledLinks.map(({ id, scrambledTitle, url }) => (
                  <button
                    key={id}
                    className="text-color-primary font-inter font-bold text-2xl"
                    onClick={() => {
                      navigate(url);
                      setIsHamburgerOpen(false);
                    }}
                  >
                    {scrambledTitle}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Vertical Navbar for Homepage */}
      {location.pathname === "/" && !isScrolled && (
        <div
          id="vertical-navbar"
          className="hidden md:flex z-20 fixed justify-end flex-wrap bg-transparent right-10 mt-5"
        >
          <ul className="flex flex-col items-end flex-wrap bg-transparent">
            {scrambledLinks.map(({ id, scrambledTitle, url }) => {
              const isCurrentPage = location.pathname === url;

              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className={`text-color-primary font-inter font-bold mx-5 my-2 z-10 md:my-7 hover:text-cyan-500 hover:tracking-widest transition-all duration-300 ${
                    isCurrentPage
                      ? "text-3xl md:text-5xl uppercase"
                      : "text-3xl md:text-5xl"
                  }`}
                  style={{
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {scrambledTitle}
                  {isCurrentPage && (
                    <div className="h-1 w-full bg-color-primary absolute bottom-[-10px] left-0 transition-all duration-300" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Horizontal Navbar for non-home pages and scrolled homepage */}
      {(location.pathname !== "/" || isScrolled) && (
        <div
          id="horizontal-navbar"
          className="hidden md:flex z-20 justify-end items-center align-middle shadow-xl bg-background w-full bg-gradient-to-t from-card-primary-bottom to-card-primary-top fixed top-0 md:pt-5 md:pb-7"
        >
          <ul className="flex justify-between w-full h-full md:px-20 lg:px-40">
            {scrambledLinks.map(({ id, scrambledTitle, url }) => {
              const isCurrentPage = location.pathname === url;

              return (
                <li
                  key={id}
                  onClick={() => navigate(url)}
                  className={`text-color-primary font-inter font-bold px-5 z-10 mx-10 transition-all duration-300 text-2xl md:text-3xl ${
                    isCurrentPage
                      ? "text-3xl md:text-4xl uppercase font-caveat"
                      : "hover:text-color-tertiary hover:tracking-widest"
                  }`}
                  style={{
                    position: "relative",
                    whiteSpace: "nowrap",
                    textShadow: isCurrentPage
                      ? "2px 2px 6px rgba(0, 0, 0, 0.7)"
                      : "none",
                  }}
                >
                  {scrambledTitle}
                  {isCurrentPage && (
                    <div className="h-1 w-full bg-color-primary absolute bottom-[-30px] left-0 transition-all duration-300" />
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {/* Bottom Chat Icon and Scroll to Top Button */}
      <div className="flex justify-between items-center fixed z-50 bottom-5 left-0 right-0 px-5 md:bottom-10 md:px-10">
        <div className="flex items-center space-x-4 md:pl-5">
          <button
            onClick={() => setIsChatOpen(true)}
            className="bg-color-primary text-white p-3 rounded-full shadow-[0_0_8px_8px_rgba(var(--normal-shadow))] border-2 border-white hover:scale-110 hover:shadow-color-primary-shadow hover:shadow-xl transition-all duration-300"
          >
            <ChatIcon className="cursor-none w-5 md:w-8" />
          </button>
          <div className="hidden md:flex">
            <DarkMode className="shadow-xl border-2 border-color-primary hover:shadow-color-primary-shadow transition-all duration-300" />
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="bg-color-primary fill-white p-3 rounded-full md:mr-5 border-2 border-white hover:scale-110 hover:shadow-color-primary-shadow hover:shadow-xl transition-all duration-300 shadow-[0_0_8px_8px_rgba(var(--normal-shadow))]"
        >
          <UpArrow className="cursor-none w-5 md:w-8" />
        </button>
      </div>

      {/* ChatBot Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-sky-950 bg-opacity-65 z-30">
          <div className="relative w-[90vw] md:w-[70vw] lg:w-[50vw] bg-white rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 p-2"
              onClick={() => setIsChatOpen(false)}
            >
              <CloseIcon className="w-7 fill-black cursor-pointer hover:fill-red-500 transition-all duration-300" />
            </button>
            <ChatBot />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;
