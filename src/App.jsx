import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import ChatBot from "./components/ChatBot";
import Test from "./pages/Test";
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";

function App() {
  const cursorContainer = useRef(null);
  const flairRef = useRef(null);
  const container = useRef(null);
  const [mode, setMode] = useState("light-mode");

  useEffect(() => {
    const storedMode = localStorage.getItem("mode") || "light-mode";
    setMode(storedMode);
    document.body.classList.add(storedMode);
  }, []);

  const toggleMode = () => {
    const newMode = mode === "light-mode" ? "dark-mode" : "light-mode";
    setMode(newMode);
    document.body.classList.remove(mode);
    document.body.classList.add(newMode);
    localStorage.setItem("mode", newMode);
  };

  // Cursor animation
  useLayoutEffect(() => {
    gsap.set(flairRef.current, { xPercent: -50, yPercent: -50, scale: 1 });

    const xSetter = gsap.quickSetter(flairRef.current, "x", "px");
    const ySetter = gsap.quickSetter(flairRef.current, "y", "px");

    const handleMouseMove = (e) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    };

    const handleMouseEnter = () => {
      gsap.to(flairRef.current, {
        clipPath: "polygon(40% 40%, 60% 100%, 100% 60%)",
        scale: 1.4,
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(flairRef.current, {
        clipPath: "circle(45% at 50% 50%)",
        scale: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("li, a, button, input, #clickable");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden";
  
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });
  
      t1.from("#welcome-1", {
        opacity: 0,
        y: "+=50",
        delay: 0.5,
        ease: "power1.in",
      })
        .to("#welcome-1", {
          opacity: 0,
          y: "-=50",
          delay: 0.3,
          ease: "power1.in",
        })
        .to("#cover", {
          yPercent: "-200",
          duration: 1,
          delay: 0.4,
          ease: "power1.in",
        })
        .from("#title-1, #title-2, #title-3, #title-4", {
          opacity: 0,
          y: "+=30",
          delay: 0.1,
          stagger: 0.4,
          ease: "power1.in",
        })
        .to("#title-1, #title-2, #title-3, #title-4", {
          opacity: 0,
          y: "-=30",
          delay: 0.2,
          stagger: 0.4,
          ease: "power1.in",
        })
        .to("#intro-slider", {
          opacity: 0,
          duration: 2,
          delay: 0.1,
          ease: "power1.in",
        })
        .to("#intro-slider", { yPercent: "-200", duration: 0.1 })
        .from("#achira, #silva", {
          opacity: 0,
          y: "+=30",
          stagger: 0.4,
          ease: "power1.in",
        });
    }, container);
  
    return () => {
      ctx.revert();
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <Router>
      <div className="bg-background" >
        <div className="z-50" ref={container}>
          <div className="bg-indigo-700 w-full"></div>

          {/* Welcome animation */}
          <div
            id="cover"
            className="h-full bg-sky-950 w-full absolute top-0 left-0 flex justify-center items-center"
          >
            <div className="flex flex-row z-50">
              <p
                id="welcome-1"
                className="text-9xl text-white font-inter font-thin"
              >
                Welcome.
              </p>
            </div>

            <div className="flex">
              <div
                id="intro-circle"
                className="w-56 h-56 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full absolute "
              ></div>
            </div>
          </div>

          {/* Intro slider */}
          <div
            id="intro-slider"
            className="h-screen p-10 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_100%,rgba(255,255,255,0.00)_100%)] absolute top-0 left-0 font-inter w-full flex flex-col gap-10 tracking-tight z-40"
          >
            <h1 id="title-1" className="text-9xl">
              Software Engineer
            </h1>
            <h1 id="title-2" className="text-9xl">
              Designer
            </h1>
            <h1 id="title-3" className="text-9xl">
              Musician
            </h1>
            <h1 id="title-4" className="text-9xl">
              Game Developer
            </h1>
          </div>
        </div>

        {/* Cursor */}
        <div ref={cursorContainer}>
          <div
            ref={flairRef}
            id="cursor"
            className="flair w-[50px] h-[50px] rounded-full fixed top-0 left-0 pointer-events-none z-40 bg-gradient-to-r from-orange-500 to-orange-300 mix-blend-difference"
          ></div>
        </div>

        <NavBar className={`flex flex-wrap z-20 ${mode}`} />
        <Routes>
          <Route
            className={`flex flex-wrap z-10 ${mode}`}
            path="/"
            element={<Home />}
          />
          <Route
            className={`flex flex-wrap z-10 ${mode}`}
            path="/projects"
            element={<Projects />}
          />
          <Route
            className={`flex flex-wrap z-10 ${mode}`}
            path="/contact"
            element={<ChatBot />}
          />
          <Route
            className={`flex flex-wrap z-10 ${mode}`}
            path="/test"
            element={<Test />}
          />
          <Route
            className={`flex flex-wrap z-10 ${mode}`}
            path="/experience"
            element={<Experience />}
          />
          <Route
            className={`flex flex-wrap z-10 ${mode}`}
            path="/about"
            element={<AboutMe />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
