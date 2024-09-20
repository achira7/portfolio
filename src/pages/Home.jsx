import React from "react";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

//componenets
import Button from "../components/Button";
import GradientComponent from "../components/GradientComponent";

//Assets
import heroLight from "../assets/hero/hero-light.png"
import heroDark from "../assets/hero/hero-dark.png"

const Home = ({ mode }) => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);


  return (
    <div className="bg-background " ref={container}>
      <div className="h-screen flex flex-col flex-wrap top-0 left-0 z-20">
        <div>
          <h1
            id="achira"
            className="text-9xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap"
          >
            ACHIRA
          </h1>

          <h1
            id="silva"
            className="text-9xl font-bold text-color-secondary font-inter mx-5"
          >
            SILVA
          </h1>
        </div>

        <div className="m-7 flex items-start">
          <p className="font-inter text-color-secondary text-3xl tracking-wide w-full">
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
            Hi! I'm Achira Silva. I am a creative indiviual and etc.
          </p>
        </div>

        <div className="flex items-center justify-center w-[100]">
          <GradientComponent
            colorA={"#0e2d74"}
            colorB={"#40c6df"}
            colorC={"#341abc"}
          />
          <div className="w-1/6">
          <img
              src={mode === "light-mode" ? heroLight : heroDark}
              className="absolute top-0 w-full max-w-[800px]"
              alt="Hero"
            />
          </div>
        </div>

        <div className="flex">
          <h1 className="ml-5 mt-5 text-5xl font-bold font-inter text-color-primary">
            Projects
          </h1>
          <p>I am aAchira Silva etc etc i make apps</p>
          <Button name={"All Projects"} link={"/projects"} color={"green"} />
        </div>

        <div className="flex">
          <h1 className="ml-5 mt-5 text-5xl font-bold font-inter text-color-primary">
            Education
          </h1>
          <p>I am aAchira Silva etc etc i make apps</p>
          <Button name={"All Projects"} link={"/projects"} color={"green"} />
        </div>

        <div className="flex">
          <h1 className="ml-5 mt-5 text-5xl font-bold font-inter text-color-primary">
            Work Experienc
          </h1>
          <p>I am aAchira Silva etc etc i make apps</p>
          <Button name={"All Projects"} link={"/projects"} color={"green"} />
        </div>

        <hr class="border-color-primary border-2 shadow-lg" />
      </div>

    </div>
  );
};

export default Home;
