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
  const [currentMode, setCurrentMode] = useState(mode);
  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  const scrambledAchira = useTextScramble("ACHIRA");
  const scrambledSilva = useTextScramble("SILVA");

  return (
    <div className="bg-background" ref={container}>
      <div className="flex flex-col top-0 left-0 z-20 m-5">
        <div className="flex flex-col">
          <h1
            id="achira"
            className="text-6xl font-black text-color-primary font-inter top-0 flex flex-wrap md:text-8xl"
          >
            {scrambledAchira}
          </h1>

          <h1
            id="silva"
            className="text-6xl font-bold text-color-primary font-inter flex flex-wrap md:text-8xl"
          >
            {scrambledSilva}
          </h1>
          <TypeAnimation
            className="font-caveat text-2xl text-color-primary font-semibold mt-2 md:text-5xl"
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

        <div className="m-7 flex items-start">
          <p className="font-inter text-color-secondary text-base tracking-wide w-full max-w-screen-md md:text-3xl">
            Hi! I'm Achira Silva. I am a creative indiviual and etc. Hi! I'm
            Achira Silva. I am a creative indiviual and etc. Hi! I'm Achira
            Silva. I am a creative indiviual and etc. Hi! I'm Achira Silva. I am
            a creative indiviual and etc. Hi! I'm Achira Silva. I am a creative
            indiviual and etc. Hi! I'm Achira Silva. I am a creative indiviual
            and etc. Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc. Hi! I'm
            Achira Silva. I am a creative indiviual and etc. Hi! I'm Achira
            Silva. I am a creative indiviual and etc. Hi! I'm Achira Silva. I am
            a creative indiviual and etc. Hi! I'm Achira Silva. I am a creative
            indiviual and etc.
          </p>
        </div>

        <div className="w-full my-5 ml-5 mt-5">
          <h1 className="text-3xl font-bold text-color-primary mb-2 font-inter flex flex-wrap md:text-5xl">
            Technologies
          </h1>
          <h2 className="font-inter text-lg ml-2 mb-2 text-color-secondary md:text-2xl">
            Click to see Projects
          </h2>
          <div className="flex">
            <Marquee />
          </div>
        </div>

        <div className="flex items-center justify-center w-[100]">
          <div className="flex-col absolute top-5 right-80 hidden transform rotate-[-5deg] md:flex">
            <h1 className="text-4xl text-color-primary relative inline-block  font-caveat drop-shadow-md">
              Check Out my Projects
            </h1>
            <br />
            <h1 className="text-4xl text-color-primary relative inline-block  font-caveat drop-shadow-md">
              These are my Experiences
            </h1>
            <br />
            <h1 className="text-4xl text-color-primary relative inline-block font-caveat drop-shadow-md">
              Contact Me
            </h1>
          </div>
        </div>

        <div className="flex flex-wrap flex-row absolute right-80 bottom-16 z-0 bg-slate-400">
          <div className="flex flex-wrap">
            <img
              src={mode === "light-mode" ? heroLight : heroDark}
              className="bottom-0 shadow-image w-[400px] md:w-6/12"
              alt="Hero"
            />
          </div>

          <div className="flex items-center justify-center w-[300px] absolute right-0 bottom-8">
            <SocialIcons />
          </div>
        </div>

        <div id="projects" className="flex flex-col">
          <h1 className="text-3xl font-bold text-color-primary font-inter mx-5 mb-5 flex flex-wrap md:text-5xl">
            Projects
          </h1>
          <div className="flex flex-col">
            <div className="flex flex-row flex-wrap">
              <TopProjects />
            </div>

            <div
              id="clickable"
              className="flex flex-row gap-5 items-center justify-center align-middle my-2"
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

        <div id="expereince" className="flex flex-col ">
          <h1 className="text-3xl font-bold text-color-primary font-inter top-0 mx-5 flex flex-wrap md:text-5xl">
            Experience
          </h1>
          <div className="flex flex-col my-5 justify-center items-center">
            <div className="flex flex-row">
              {/* Pintanna */}
              <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
                <div className="px-7 py-5">
                  <div className="flex items-center space-x-4">
                    {/* Flex container */}
                    <div className="space-x-3 hidden md:flex">
                      <a
                        id="clickable"
                        href="https://www.pintannaplantations.lk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={pintanna}
                          alt="Pintanna Plantations"
                          className="w-16 bg-white rounded-lg border border-card-primary-border"
                        />
                      </a>
                    </div>
                    <div className="r">
                      <h1 className="text-color-primary text-xl font-bold md:text-2xl">
                        Pintanna Plantations
                      </h1>
                      <div className="flex flex-row items-center">
                        <h1 className="text-color-primary text-lg md:text-2xl">
                          Graphic Designer
                        </h1>
                        <h1 className="text-color-tertiary text-lg ml-5 md:text-xl">
                          2023 - 2024
                        </h1>
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
              <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
                <div className="px-7 py-5">
                  <div className="flex items-center  space-x-5">
                    {/* Flex container */}
                    <div className="space-x-3 hidden md:flex">
                      <a
                        id="clickable"
                        href="https://pitchperfect.lk/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          src={pitch}
                          alt="Pintanna Plantations"
                          className="w-16 bg-white rounded-lg border border-card-primary-border"
                        />
                      </a>
                    </div>
                    <div className="r">
                      <h1 className="text-color-primary text-xl md:text-2xl font-bold">
                        Picth Perfect
                      </h1>
                      <div className="flex flex-row items-center">
                        <h1 className="text-color-primary text-lg md:text-2xl">
                          Graphic Designer
                        </h1>
                        <h1 className="text-color-tertiary text-lg ml-5 md:text-xl">
                          2023 - 2024
                        </h1>
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

        <div id="education" className="flex flex-col">
          <div className="flex flex-row">
            <h1 className="text-3xl font-bold text-color-primary font-inter top-0 mx-5 my-5 flex flex-wrap md:text-5xl">
              Education
            </h1>
          </div>

          <div className="flex flex-row">
            {/* IIT */}
            <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
              <div className="px-7 py-5">
                <div className="flex items-center space-x-4">
                  {/* Flex container */}
                  <div className="space-x-3 hidden md:flex">
                    <a
                      id="clickable"
                      href="https://www.westminster.ac.uk/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src={westminster}
                        alt="University of Westminster"
                        className="w-16 bg-white rounded-lg border border-card-primary-border"
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
                        className="w-16 bg-white rounded-lg border border-card-primary-border"
                      />
                    </a>
                  </div>
                  <div className="r">
                    <h1 className="text-color-primary text-xl font-bold md:text-2xl">
                      BSc (Hons) Business Information Systems
                    </h1>
                    <h1 className="text-color-primary text-lg md:text-2xl ">
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
                  <div className="space-x-3 hidden md:flex">
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
                        className="w-16 bg-white rounded-lg border border-card-primary-border"
                      />
                    </a>
                  </div>
                  <div className="r">
                    <h1 className="text-color-primary text-xl md:text-2xl font-bold">
                      BSc (Hons) Software Engineering
                    </h1>
                    <h1 className="text-color-primary text-lg md:text-2xl font-semibold">
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
        <div className="flex w-1/3">
          <DownloadCV />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
