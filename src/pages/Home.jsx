import React from "react";
import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";

//componenets
import Button from "../components/Button";
import GradientComponent from "../components/GradientComponent";

//Assets
import achiraImage from "../assets/achira.png";
import overlayImage from "../assets/halftone_overlay.jpg";

const Home = () => {
  const container = useRef(null);

  gsap.registerPlugin(useGSAP);

  const [randomNumbers, setRandomNumbers] = useState({ randX: 0, randY: 0 });

  const [circlePositions, setCirclePositions] = useState([]);

  useEffect(() => {
    const generateRandomNumber = () => {
      const isNegative = Math.random() < 0.5;
      if (isNegative) {
        return Math.floor(Math.random() * 121) - 200;
      } else {
        return Math.floor(Math.random() * 121) + 80;
      }
    };

    setRandomNumbers({
      randX: generateRandomNumber(),
      randY: generateRandomNumber(),
    });
  }, []);

  return (
    <div className="bg-background" ref={container}>
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
          <p className="font-inter text-color-primary text-3xl tracking-wide">
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
              src={achiraImage}
              className="absolute top-0 grayscale"
            />
            <img
              src={overlayImage}
              className="absolute top-0 mix-blend-screen"
              style={{
                maskImage: `url(${achiraImage})`,
                WebkitMaskImage: `url(${achiraImage})`,
              }}
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

        <p>

        </p>
      </div>

    </div>
  );
};

export default Home;
