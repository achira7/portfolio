import React from "react";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

//componenets
import Button from "../components/Button";
import Marquee from "../components/Marquee";
import { useTextScramble } from "../hooks/useTextScramble";
import Footer from "../components/Footer";
import DownloadCV from "../components/DownloadCV";
import SocialIcons from "../components/SocialIcons";
import TopProjects from "../components/TopProjects";

//Assets
import heroLight from "../assets/hero/hero-light.png";
import heroDark from "../assets/hero/hero-dark.png";
import westminster from "../assets/university_logos/westminster.jpeg";
import plymouth from "../assets/university_logos/plymouth.png";
import iit from "../assets/university_logos/iit.png";
import nsbm from "../assets/university_logos/nsbm.jpg";
import pintanna from "../assets/logos/2.jpg";
import pitch from "../assets/logos/3.jpg";

const Home = ({ mode }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentMode, setCurrentMode] = useState(mode);

  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  const scrambledAchira = useTextScramble("ACHIRA");
  const scrambledSilva = useTextScramble("SILVA");

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const yOffset = window.innerHeight * 0.07; 
    const yPosition = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
  
    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        // Tailwind's `sm` breakpoint (640px)
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    handleResize();

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="bg-background  md:mt-5 homepage" ref={container}>
      <div className="flex flex-col top-0 left-0 z-20 m-5 md:m-8">
        <div className=" md:border-color-primary md:border-b-8 ">
          <div className="flex flex-col mt-16 md:mt-0">
            <h1
              id="achira"
              className="text-5xl font-black text-color-primary font-inter top-0 flex flex-wrap md:text-9xl"
            >
              {scrambledAchira}
            </h1>

            <h1
              id="silva"
              className="text-5xl font-bold text-color-primary font-inter flex flex-wrap md:text-8xl"
            >
              {scrambledSilva}
            </h1>
            <TypeAnimation
              className="font-caveat text-2xl text-color-primary font-semibold md:mt-2 md:text-6xl"
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "Designer",
                1000,
                "Creative Thinker",
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

           {/* <p className=" text-6xl text-red-400 md:text-purple-400 lg:text-emerald-400 xl:text-sky-500">TEST</p>  */}

          <div className="grid grid-row-3 md:grid-cols-3 justify-center items-start">
            <div className="mt-5 flex-col flex items-start align-top ">
              <p className="mb-4 font-inter text-color-secondary text-base tracking-wide w-full max-w-screen-md md:text-3xl">
                Hey there, I am Achira Silva, a Creative individual with a passion for
                creating things from Web Apps to Video Games to Music to Novels
                and everything in between. <br />
              </p>

              

              <p className="font-inter text-color-secondary text-base tracking-wide w-full max-w-screen-md md:text-3xl">
                As an IT graduate, I am interested in Full Stack Web Development
                and Mobile Application Development. I always look for new things
                to learn and explore. Whether it’s a new language, Pixel Art, or
                Playing the Keyboards, I’m in for learning that as long as it interests
                me.
              </p>
              <a id="clickable" href="./about" className="font-inter text-color-primary text-base tracking-wide underline w-full md:mt-3 max-w-screen-md md:text-2xl"> 
              Read More
              </a>
              
            </div>
            <div className="relative flex bottom-10 items-center justify-center" id="floating">
              {/* HERO IMAGE */}
              <img
                src={mode === "light-mode" ? heroLight : heroDark}
                className="bottom-0 shadow-image w-4/5 md:w-5/6 lg:w-full"
                alt="Hero"
              />

              {/* Gradient Overlay */}
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent"></div>
            </div>

            <div
              id={!isMobile ? "floatingAlt" : undefined}
              className="flex h-full w-full items-center justify-center md:justify-left md:items-center md:right-36"
            >
              <SocialIcons />
            </div>
          </div>

          <div className="flex flex-wrap flex-row right-[500px] absolute bottom-16 z-0">
            <div className="flex flex-wrap"></div>
          </div>
        </div>

        <div className="w-full my-5 mt-5 mb-10 items-center justify-center md:justify-start md:items-start ">
          <div className="flex items-center justify-center flex-col mt-5 md:justify-start md:items-start ">
            <h1 className="text-3xl font-bold text-color-primary mb-2 font-inter flex flex-wrap md:text-5xl">
              Technologies
            </h1>
            <h2 className="font-inter md:ml-1 text-color-secondary">
              <span className="hidden md:flex text-2xl">
                Click to see Projects
              </span>
              <span className="flex md:hidden text-lg">
                Tap to see Projects
              </span>
            </h2>
          </div>

          <div className="flex">
            <Marquee className="" />
          </div>
        </div>

        <div className="flex-col absolute top-40 right-[25%] hidden transform rotate-[-5deg] md:flex gap-y-8">
          <h1
            id="clickable"
            onClick={() => scrollToSection("projects")}
            className="text-4xl text-color-primary relative inline-block  font-caveat drop-shadow-md hover:scale-110 duration-300"
          >
            Check Out my Projects
          </h1>

          <h1
            id="clickable"
            className="text-4xl text-color-primary relative inline-block  font-caveat drop-shadow-md  hover:scale-110 duration-300"
            onClick={() => scrollToSection("expereince")}
          >
            My Experiences
          </h1>

          <h1
            id="clickable"
            className="text-4xl text-color-primary relative inline-block font-caveat drop-shadow-md hover:scale-110 duration-300"
            onClick={() => scrollToSection("education")}
          >
            Education & Qualifications
          </h1>

          <h1
            id="clickable"
            className="text-4xl text-color-primary relative inline-block  font-caveat drop-shadow-md hover:scale-110 duration-300"
            onClick={() => scrollToSection("cv")}
          >
            Download my CV
          </h1>
        </div>

        <div id="projects" className="flex flex-col  ">
          <div className="flex flex-col items-center justify-center md:justify-start md:items-start md:ml-5 ">
            <h1 className="text-3xl font-bold text-color-primary font-inter mb-5 flex flex-wrap md:text-5xl items-center justify-center md:justify-start md:items-start">
              Projects
            </h1>

            <h2 className="font-inter text-lg ml-1 mb-2 text-color-secondary md:text-2xl text-center md:text-start">
              Best personal/professional projects from my{" "}
              <br className="flex md:hidden" />{" "}
              <a
                href="https://github.com/achira7"
                className="text-color-primary underline"
                id="clickable"
              >
                {" "}
                GitHub Repository.{" "}
              </a>
            </h2>
          </div>

          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap">
              <TopProjects />
            </div>

            <div
              id="clickable"
              className="flex flex-row gap-5 items-center justify-center align-middle mt-2 mb-10"
            >
              <Button
                name={"View All Projects"}
                link={"/projects"}
                color={"green"}
                icon={""}
              />
            </div>
          </div>
        </div>

        <div
          id="expereince"
          className="flex flex-col items-center justify-center md:justify-center md:items-center"
        >
          <div className="flex justify-center items-center md:justify-start md:items-start w-full mb-5">
            <div className="flex">
              <h1 className="text-3xl font-bold text-color-primary font-inter top-0 mx-5 flex flex-wrap md:text-5xl">
                Experience
              </h1>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center mb-5">
            <div className="flex flex-col md:flex-row">
              {/* Pintanna */}
              <div className="mb-7 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
                <div className="px-7 py-5">
                  <div className="flex items-center space-x-4">
                    {/* Flex container */}
                    <div className="space-x-3 flex md:mb-3 mb-2">
                      <a
                        id="clickable"
                        href="https://www.pintannaplantations.lk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={pintanna}
                          alt="Pintanna Plantations"
                          className="md:w-16 w-12 bg-white rounded-lg border border-card-primary-border"
                        />
                      </a>

                      <div className="">
                        <h1 className="text-color-primary text-lg font-bold md:text-2xl">
                          Pintanna Plantations
                        </h1>
                        <div className="flex flex-row items-center">
                          <h1 className="text-color-primary text-base md:text-2xl">
                            Graphic Designer
                          </h1>
                          <h1 className="text-color-tertiary text-sm ml-5 md:text-xl">
                            2023 - 2024
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-inter  text-sm text-color-secondary mt-1 text-justify md:text-base">
                    This course covers key areas such as IT strategy, data
                    management, business analysis, and software development.
                    Students gain practical skills in managing business IT
                    systems, understanding digital transformation, and aligning
                    technology with business goals, preparing them for roles in
                    business analysis, IT consultancy, and systems management.
                  </p>
                </div>
              </div>

              {/* Pitch Perfect */}
              <div className="mb-7 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
                <div className="px-7 py-5">
                  <div className="flex items-center  space-x-4">
                    {/* Flex container */}
                    <div className="space-x-3 flex md:mb-3 mb-2">
                      <a
                        id="clickable"
                        href="https://pitchperfect.lk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={pitch}
                          alt="Pitch Perfect"
                          className="md:w-16 w-12 bg-white rounded-lg border border-card-primary-border"
                        />
                      </a>

                      <div className="">
                        <h1 className="text-color-primary text-lg font-bold md:text-2xl">
                          Picth Perfect
                        </h1>
                        <div className="flex flex-row items-center">
                          <h1 className="text-color-primary text-base md:text-2xl">
                            Graphic Designer
                          </h1>
                          <h1 className="text-color-tertiary text-sm ml-5 md:text-xl">
                            2023 - 2024
                          </h1>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="font-inter text-sm text-color-secondary mt-1 text-justify md:text-base">
                    This course covers key areas such as IT strategy, data
                    management, business analysis, and software development.
                    Students gain practical skills in managing business IT
                    systems, understanding digital transformation, and aligning
                    technology with business goals, preparing them for roles in
                    business analysis, IT consultancy, and systems management.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                name={"View All Experience"}
                link={"/experience"}
                color={"green"}
                icon={""}
              />
            </div>
          </div>
        </div>

        <div
          id="education"
          className="flex flex-col items-center justify-center md:justify-start md:items-start"
        >
          <div className="flex flex-row ">
            <h1 className="text-3xl font-bold text-color-primary font-inter top-0 mx-5 my-5 flex flex-wrap md:text-5xl ">
              Education
            </h1>
          </div>

          <div className="flex  flex-col md:flex-row">
            {/* IIT */}
            <div className=" mb-5 md:mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
              <div className="px-7 py-5">
                <div className="flex items-center space-x-4">
                  {/* Flex container */}
                  <div className="space-x-1 md:space-x-4 flex">
                    <a
                      id="clickable"
                      href="https://www.westminster.ac.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={westminster}
                        alt="University of Westminster"
                        className="md:w-16 w-16 bg-white rounded-lg border border-card-primary-border"
                      />
                    </a>
                    <a
                      id="clickable"
                      href="https://www.iit.ac.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={iit}
                        alt="IIT"
                        className="hidden md:flex w-16 bg-white rounded-lg border border-card-primary-border"
                      />
                    </a>
                  </div>
                  <div className="">
                    <h1 className="text-color-primary text-lg font-bold md:text-2xl">
                      BSc (Hons) Business Information Systems
                    </h1>
                    <h1 className="text-color-primary text-base md:text-2xl ">
                      University of Westminster, UK
                    </h1>
                  </div>
                </div>

                <h1 className="flex text-color-primary text-base font-semibold mt-2 md:text-xl">
                  Informatics Institute of Technology (IIT), Sri Lanka
                </h1>

                <p className="font-inter  text-sm text-color-secondary mt-1 text-justify md:text-base">
                  This course covers key areas such as IT strategy, data
                  management, business analysis, and software development.
                  Students gain practical skills in managing business IT
                  systems, understanding digital transformation, and aligning
                  technology with business goals, preparing them for roles in
                  business analysis, IT consultancy, and systems management.
                </p>
              </div>
            </div>

            {/* NSBM */}
            <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
              <div className="px-7 py-5">
                <div className="flex items-center  space-x-5">
                  {" "}
                  {/* Flex container */}
                  <div className="space-x-1 md:space-x-4 flex">
                    <a
                      id="clickable"
                      href="https://www.plymouth.ac.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={plymouth}
                        alt="University of Plymouth"
                        className="w-16 bg-white rounded-lg border border-card-primary-border"
                      />
                    </a>
                    <a
                      id="clickable"
                      href="https://www.nsbm.ac.lk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={nsbm}
                        alt="NSBM"
                        className="hidden md:flex w-16 bg-white rounded-lg border border-card-primary-border"
                      />
                    </a>
                  </div>
                  <div className="r">
                    <h1 className="text-color-primary text-lg md:text-2xl font-bold">
                      BSc (Hons) Software Engineering
                    </h1>
                    <h1 className="text-color-primary text-base md:text-2xl font-semibold">
                      University of Plymouth, UK
                    </h1>
                  </div>
                </div>

                <h1 className="flex text-color-primary text-base font-semibold mt-2 md:text-xl">
                  NSBM Green University, Sri Lanka
                </h1>

                <p className="font-inter text-sm text-color-secondary mt-1 text-justify md:text-base">
                  This course focuses on software development, algorithms,
                  database management, and systems architecture. Students learn
                  to design, develop, and manage high-quality software solutions
                  while mastering programming languages, software project
                  management, and agile methodologies. Graduates are prepared
                  for roles in software development, quality assurance, and
                  system design.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          id="cv"
          className="flex w-full justify-center items-center mb-5 md:mt-12 md:mb-12"
        >
          <div className="flex justify-center items-center">
            <DownloadCV />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
