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

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();

      t1.from(
        [
          "#welcome-1",
        ],
        {
          opacity: 0,
          y: "+=50",
          delay: 0.5,
          stagger: 0.1,
          ease: "power1.in",
        }
      )
        .to(
          [
            "#welcome-1",
          //   "#welcome-2",
          //   "#welcome-3",
          //   "#welcome-4",
          //   "#welcome-5",
          //   "#welcome-6",
          //   "#welcome-7",
          //   "#welcome-8",
           ],
          {
            opacity: 0,
            y: "-=50",
            delay: 0.3,
            stagger: 0.1,
            ease: "power1.in",
          }
        )
        .to("#cover", {
          yPercent: "-200",
          duration: 1,
          delay: 0.4,
          ease: "power1.in",
        })
        .from(["#title-1", "#title-2", "#title-3", "#title-4"], {
          opacity: 0,
          y: "+=30",
          delay: 0.1,
          stagger: 0.4,
          ease: "power1.in",
        })
        .to(["#title-1", "#title-2", "#title-3", "#title-4"], {
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
        .to("#intro-slider", {
          yPercent: "-200",
          duration: 0.1,
        })
        .from(["#achira", "#silva"], {
          opacity: 0,
          y: "+=30",
          stagger: 0.4,
          ease: "power1.in",
        });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-background" ref={container}>
      <div className="bg-indigo-700 w-full z-30"> </div>
      <div
        id="cover"
        // className="h-full bg-[radial-gradient(169.40%_189.55%_at_94.76%_6.29%,rgba(10,10,10,10.00)_100%,rgba(255,255,255,0.00)_100%)] w-full absolute top-0 left-0 flex justify-center items-center"
        className="h-full bg-sky-950  w-full absolute top-0 left-0 flex justify-center items-center"
      >


        <div className="flex flex-row z-30">
          <p id="welcome-1" className="text-9xl text-white font-inter font-thin">
            Welcome.
          </p>
        </div>

        <div className="flex">
          <div
            id="intro-circle"
            className="w-56 h-56 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full absolute "
          ></div>
          <div
            id="intro-circle"
            className="w-10 h-10 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full absolute "
          ></div>
          <div
            id="intro-circle"
            className="w-56 h-56 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full absolute "
          ></div>
          <div
            id="intro-circle"
            className="w-56 h-56 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full absolute "
          ></div>
          <div
            id="intro-circle"
            className="w-56 h-56 bg-[radial-gradient(169.40%_189.40%_at_94.76%_6.29%,rgba(10,10,10,10.40)_0%,rgba(255,255,255,0.00)_100%)] rounded-full absolute "
          ></div>
        </div>

        

      </div>
      <div
        id="intro-slider"
        className="h-screen  p-10 bg-sky-500 absolute top-0 left-0 font-inter w-full flex flex-col gap-10 tracking-tight z-10"
      >
        <h1 id="title-1" className="text-9xl">
          Software Engineer
        </h1>
        <h1 id="title-2" className="text-9xl">
          Desinger
        </h1>
        <h1 id="title-3" className="text-9xl">
          Musician
        </h1>
        <h1 id="title-4" className="text-9xl">
          Game Developer
        </h1>
      </div>

    

      <div className="h-screen flex flex-col flex-wrap top-0 left-0 z-20">
        <div><h1
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
        </h1></div>

        <div className="m-7 flex items-start">
          <p className="font-space text-color-primary text-3xl">
            Hi! I'm Achira Silva. I am a creative indiviual and etc....
          </p>
        </div>


        <div className="flex items-center justify-center w-[100]">
        <GradientComponent colorA={'#341abc'} colorB={'#341abc'} colorC={'#341abc'} />
          <div className="w-1/4">
            <img src={achiraImage} className="absolute w-[200] top-0 grayscale"/>
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
          <h1>About Me</h1>
          <p>I am aAchira Silva etc etc i make apps</p>
        </div>

        <div className="flex">
          <h1>About Me</h1>
          <p>I am achira silev etc etc i make apps</p>
        </div>

        <div className="flex">
          <h1>About Me</h1>
          <p>I am achira silev etc etc i make apps</p>
        </div>
      </div>

      <Button name="Test"/>

      
    </div>
  );
};

export default Home;
