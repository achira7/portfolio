import { useRef, useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  const flairRef = useRef(null);
  const cursorContainer = useRef(null)

  useEffect(() => {
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
        scale: 1.7,
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
    
    const links = document.querySelectorAll("li, a, button");
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
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from("#cursor",
        {opacity: 0,
          delay: 15,
          ease: "power1.in",
        })    
    }, cursorContainer);

    return () => ctx.revert();
  }, []);

  return (
    <Router >
      <div ref={cursorContainer}>
      <div
      ref={flairRef}
        id="cursor"
        className="flair w-[100px] h-[100px] rounded-full fixed top-0 left-0 pointer-events-none z-20 bg-gradient-to-r from-orange-500 to-orange-300 mix-blend-difference">

        </div>
        </div>
      <NavBar className="flex flex-wrap z-10" />
      <Routes>
        <Route className="flex flex-wrap -z-10" path="/" element={<Home />} />
        <Route className="flex flex-wrap -z-10" path="/projects" element={<Projects />} />
      </Routes>
    </Router>
  );
}

export default App;
