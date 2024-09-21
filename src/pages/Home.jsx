import React from "react";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

//componenets
import Button from "../components/Button";
import GradientComponent from "../components/GradientComponent";
import Marquee from "../components/Marquee";
import { useTextScramble } from "../hooks/useTextScramble";
import Footer from "../components/Footer";

//Assets
import heroLight from "../assets/hero/hero-light.png";
import heroDark from "../assets/hero/hero-dark.png";
import westminster from "../assets/university_logos/westminster.jpeg";
import plymouth from "../assets/university_logos/plymouth.png";
import iit from "../assets/university_logos/iit.png";
import nsbm from "../assets/university_logos/nsbm.jpg";

const Home = ({ mode }) => {
  const [currentMode, setCurrentMode] = useState(mode);
  useEffect(() => {
    setCurrentMode(mode);
  }, [mode]);

  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  const scrambledAchira = useTextScramble("ACHIRA"); // Scrambled "ACHIRA"
  const scrambledSilva = useTextScramble("SILVA");

  return (
    <div className="bg-background" ref={container}>
      <div className="flex flex-col top-0 left-0 z-20">
        <div>
      <h1
        id="achira"
        className="text-9xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap"
      >
        {scrambledAchira} {/* Display scrambled "ACHIRA" */}
      </h1>

      <h1
        id="silva"
        className="text-9xl font-bold text-color-secondary font-inter mx-5"
      >
        {scrambledSilva} {/* Display scrambled "SILVA" */}
      </h1>
    </div>

        <div className="m-7 flex items-start">
          <p className="font-inter text-color-secondary text-3xl tracking-wide w-full max-w-screen-md">
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

        <div className="w-full  my-5 ml-5 mt-5 z-10">
          <h1 className="text-5xl font-bold font-inter text-color-primary mb-2">
            Technologies
          </h1>
          <h2 className="font-inter text-2xl text-color-secondary">Click to see Projects</h2>
          <Marquee />
        </div>

        <div className="flex items-center justify-center w-[100]">
          {/* <GradientComponent
            colorA={"#0e2d74"}
            colorB={"#40c6df"}
            colorC={"#341abc"}
          /> */}
          <div className="w-1/6">
            <img
              src={mode === "light-mode" ? heroLight : heroDark}
              className="absolute bottom-0 w-full max-w-[700px] md:max-w-[550px]"
              alt="Hero"
            />
          </div>
        </div>

        <div className="flex">
          <h1 className="ml-5 mt-5 text-5xl font-bold font-inter text-color-primary">
            Projects
          </h1>
        </div>

        <div className="flex">
          <h1 className="ml-5 mt-5 text-5xl font-bold font-inter text-color-primary">
          Experience
          </h1>

        </div>

        <div>
          <h1 className="ml-5 my-5 text-5xl font-bold font-inter text-color-primary">
            Education
          </h1>
          {/* IIT */}
          <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
            <div className="px-7 py-5">
              <div className="flex items-center  space-x-5">
                {" "}
                {/* Flex container */}
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
                <div className="r">
                  <h1 className="text-color-primary text-3xl font-bold">
                    BSC (Hons) Business Information Systems
                  </h1>
                  <h1 className="text-color-primary text-2xl font-semibold">
                    from University of Westminster, Uk
                  </h1>
                </div>
              </div>

              <h1 className="flex text-color-primary text-xl font-semibold mt-2 ">
                Informatics Institute of Technology (IIT), Sri Lanka
              </h1>

              <p className="font-inter text-base text-color-secondary mt-1 text-justify">
                This course covers key areas such as IT strategy, data
                management, business analysis, and software development.
                Students gain practical skills in managing business IT systems,
                understanding digital transformation, and aligning technology
                with business goals, preparing them for roles in business
                analysis, IT consultancy, and systems management.
              </p>
            </div>
          </div>

          {/* NSBM */}
          <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl max-w-[1000px]">
            <div className="px-7 py-5">
              <div className="flex items-center  space-x-5">
                {" "}
                {/* Flex container */}
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
                <div className="r">
                  <h1 className="text-color-primary text-3xl font-bold">
                    BSc (Hons) Software Engineering
                  </h1>
                  <h1 className="text-color-primary text-2xl font-semibold">
                    from University of Plymouth, Uk
                  </h1>
                </div>
              </div>

              <h1 className="flex text-color-primary text-xl font-semibold mt-2 ">
                NSBM Green University, Sri Lanka
              </h1>

              <p className="font-inter text-base text-color-secondary mt-1 text-justify">
                This course focuses on software development, algorithms,
                database management, and systems architecture. Students learn to
                design, develop, and manage high-quality software solutions
                while mastering programming languages, software project
                management, and agile methodologies. Graduates are prepared for
                roles in software development, quality assurance, and system
                design.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
