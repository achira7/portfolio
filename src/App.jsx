import { useRef, useEffect, useState, useLayoutEffect } from "react";
import gsap from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Designs from "./pages/Designs";
import Experience from "./pages/Experience";
import AboutMe from "./pages/AboutMe";
import GradientComponent from "./components/GradientComponent";
import useHotjar from "./hooks/hotjar";

function App() {

useHotjar( 5223858, 6);

  const cursorContainer = useRef(null);
  const flairRef = useRef(null);
  const container = useRef(null);
  const [mode, setMode] = useState("light-mode");
  const [showNavBar, setShowNavBar] = useState(false); 
  const [showName, setShowName] = useState(false); 
  const [showHome, setShowHome] = useState(false); 

  useEffect(() => {
    const storedMode = localStorage.getItem("mode") || "light-mode";
    setMode(storedMode);
    document.body.classList.add(storedMode);
  }, []);

  useLayoutEffect(() => {
    // Initialize GSAP settings for the flair
    gsap.set(flairRef.current, { xPercent: -50, yPercent: -50, scale: 1 });
    const xSetter = gsap.quickSetter(flairRef.current, "x", "px");
    const ySetter = gsap.quickSetter(flairRef.current, "y", "px");
  
    // Mouse movement handler to move the flair
    const handleMouseMove = (e) => {
      xSetter(e.clientX);
      ySetter(e.clientY);
    };
  
    // Handlers for mouse enter and leave animations
    const handleMouseEnter = () => {
      gsap.to(flairRef.current, {
        clipPath: "polygon(40% 40%, 60% 100%, 100% 60%)",
        scale: 1.4,
        duration: 0.25,
        ease: "power2.inOut",
      });
    };
  
    const handleMouseLeave = () => {
      gsap.to(flairRef.current, {
        clipPath: "circle(45% at 50% 50%)",
        scale: 1,
        duration: 0.25,
        ease: "power2.inOut",
      });
    };
  
    // Function to add event listeners to dynamic elements
    const attachListeners = () => {
      const links = document.querySelectorAll("#clickable, .clickable");
      links.forEach((link) => {
        if (!link.dataset.listenerAdded) {
          link.addEventListener("mouseenter", handleMouseEnter);
          link.addEventListener("mouseleave", handleMouseLeave);
          link.dataset.listenerAdded = true; // Prevent duplicate listeners
        }
      });
    };
  
    // Observe the DOM for dynamic changes
    const observer = new MutationObserver(() => {
      attachListeners();
    });
  
    // Start observing the DOM for changes
    observer.observe(document.body, { childList: true, subtree: true });
  
    // Initial listener attachment
    attachListeners();
  
    // Add the mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);
  
    return () => {
      // Cleanup: Remove mousemove listener and disconnect the observer
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
      // Remove all previously added event listeners
      const links = document.querySelectorAll("#clickable, .clickable");
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);
  

  // App intro animation
  useLayoutEffect(() => {
    if (location.pathname !== "/") {
      // Immediately show Navbar if not on Home page
      setShowNavBar(true);
      setShowName(true);
      setShowHome(true);
      return;
    }
  
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
  
    const ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
          document.documentElement.style.overflow = "auto";
          setShowNavBar(true); // Navbar is displayed only after animation completes
          setShowName(true);
          setShowHome(true);
        },
      });
  
      t1.from("#welcome-1", {
        opacity: 0,
        y: "+=50",
        delay: 0.3,
        ease: "power1.in",
      })
        .to("#welcome-1", {
          opacity: 0,
          y: "-=50",
          delay: 0.5,
          ease: "power1.in",
        })
        .from("#title-1, #title-2, #title-3, #title-4", {
          opacity: 0,
          y: "+=30",
          delay: 0.1,
          stagger: 0.3,
          ease: "power1.in",
        })
        .to("#title-1, #title-2, #title-3, #title-4", {
          opacity: 0,
          y: "-=30",
          delay: 0.2,
          stagger: 0.4,
          ease: "power1.in",
        })
        .to("#cover", {
          yPercent: "-200",
          duration: 0.5,
          ease: "power1.in",
        });
    }, container);
  
    return () => {
      ctx.revert();
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, [location.pathname]);
  

  return (
    <Router>
      <div className="bg-background">
        <div className="relative z-50" ref={container}>
          {location.pathname === "/" && (
            <div
              id="cover"
              className="h-screen w-screen absolute top-0 left-0 flex justify-center items-center z-10"
            >
              <GradientComponent colorA={"#0e2d74"} colorB={"#40c6df"} colorC={"#341abc"} />
              <div className="flex flex-row z-50">
                <p
                  id="welcome-1"
                  className="text-4xl font-semibold text-white font-inter md:text-9xl md:font-thin"
                >
                  Welcome.
                </p>
              </div>
              <div
                id="intro-slider"
                className="h-screen text-white p-5 mt-2 absolute top-0 left-0 font-inter w-full flex flex-col gap-10 tracking-tight z-40 md:p-10"
              >
                <h1 id="title-1" className="text-4xl md:text-9xl">
                  Software Engineer
                </h1>
                <h1 id="title-2" className="text-4xl md:text-9xl">
                  Designer
                </h1>
                <h1 id="title-3" className="text-4xl md:text-9xl">
                  Creative Thinker
                </h1>
                <h1 id="title-4" className="text-4xl md:text-9xl">
                  Game Developer
                </h1>
              </div>
            </div>
          )}
        </div>

        <div ref={cursorContainer} className="hidden md:flex">
          <div
            ref={flairRef}
            id="cursor"
            className="flair w-[25px] h-[25px] rounded-full fixed top-0 left-0 pointer-events-none z-50 bg-gradient-to-r from-orange-500 to-orange-300 mix-blend-difference"
          ></div>
        </div>

        {showNavBar && <NavBar className={`z-40 w-full ${mode}`} />}

        <Routes>
          <Route className={`flex z-10 mt-10 ${mode}`} path="/" element={<Home mode={mode} />} />
          <Route className={`flex flex-wrap z-10 ${mode}`} path="/projects" element={<Projects />} />
          <Route className={`flex flex-wrap z-10 ${mode}`} path="/designs" element={<Designs />} />
          <Route className={`flex flex-wrap z-10 mt-10 ${mode}`} path="/experience" element={<Experience />} />
          <Route className={`flex flex-wrap z-10  ${mode}`} path="/about" element={<AboutMe />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
