import React from "react";
import Polaroid from "../components/Polaroid";
import Footer from "../components/Footer";

//images
import Baby from "../assets/images/baby.jpg";
import NLDS from "../assets/images/nlds.jpg";
import Self from "../assets/images/portrait.jpg";

const AboutMe = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col mt-28 m-5 w-full max-w-screen-2xl mx-auto space-y-10 mb-36 items-center justify-center">
        <div className="flex flex-col pt-3 items-center justify-center">
          <div className="flex flex-col md:flex-row">
            <div className="flex w-4/6 items-center justify-center mx-10  mb-5">
              <Polaroid image={Baby} name={"Me as a baby"} align={"left"} />
            </div>

            <div className="flex flex-col justify-center items-center mx-10">
              <h1 className="flex text-color-primary font-caveat font-bold text-3xl md:ml-5 mb-7 md:text-5xl">
                School Life
              </h1>

              <p className=" flex text-center md:text-center text-base  text-color-secondary font-inter md:text-xl">
                I started my education at Mahargama Dharmashoka College, and
                later transferred to Dharmapala Vidyalaya, Pannipitiya. After
                scoring 8As and 1B in my O-Levels, I had the opportunity to join
                Nalanda College, Colombo for my Advanced Level studies. <br />{" "}
                <br />
                During my school years, I also played badminton, which was my
                go-to sport.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-3 items-center justify-center">
          <div className="flex flex-col md:flex-row-reverse items-center justify-center">
            <div className="flex w-4/6 items-center mx-10 mb-5">
              <Polaroid image={NLDS} name={"NLDS 2021 OC"} align={"right"} />
            </div>

            <div className="flex flex-col justify-center items-center mx-10">
              <h1 className="text-color-primary font-caveat font-bold text-3xl md:ml-5 mb-7 md:text-5xl">
                University Life
              </h1>

              <p className=" flex text-center md:text-center text-base  text-color-secondary font-inter md:text-xl">
                During my time at IIT, I got the chance to be part of something
                new—AIESEC was introduced at our university, and I applied to
                join the first-ever Management Board in AIESEC IIT. Being part
                of AIESEC was a great experience. It sharpened my soft skills
                and gave me new perspectives, which really enriched my
                university life. <br /> <br />
                During this time I also started studying Software Engineering at
                NSBM managing both workloads at 2 universities. In NSBM I was a
                team member organizing the Fresher’s Day for our batch.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col pt-3 items-center justify-center">
          <div className="flex flex-col md:flex-row items-center justify-center">
            {/* <div className="flex w-4/6 items-center mx-10 mb-5">
              <Polaroid
                image={"../src/assets/game.jpg"}
                name={"Achira"}
                align={"left"}
              />
            </div> */}

            <div className="flex flex-col justify-center items-center mx-10">
              <h1 className="text-color-primary font-caveat font-bold text-3xl md:ml-5 mb-7 md:text-5xl">
                Hobbies & Interests
              </h1>

              <p className=" flex text-center md:text-center text-base  text-color-secondary font-inter md:text-xl">
                I've always been into creating things and problem-solving. My
                love for creativity started way back in primary school when I
                spent a lot of time in the school library, diving into Sinhala
                literature. I read books across all kinds of genres, and that
                eventually sparked my own creative writing journey. I ended up
                writing novels, short stories, and poems, and even published a
                book!
                <br />
                <br />
                Although I wouldn’t call myself a hardcore gamer, I’ve always
                played games casually. Early in my university days, I got
                inspired by YouTube to try developing my own games. That’s when
                I started using the Unity Game Engine, and game development
                became a hobby of mine. <br />
                <br />
                Around the same time, I also got into electronic music
                production. I started uploading my music to YouTube and
                SoundCloud. My previous experience playing guitar really helped
                me transition into music production smoothly.
                <br />
                <br />
                At AIESEC, I stumbled into the world of graphic design and
                immediately fell in love with its creative, expressive side.
                That passion eventually turned into a profession when I started
                working as a Graphic Designer for Pintanna Plantations.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutMe;
