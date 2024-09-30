import React from "react";

import Polaroid from "../components/Polaroid";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col mt-28 m-5 w-full max-w-screen-2xl mx-auto space-y-10 mb-36">
        <div className="flex flex-col p-5">
          <h1 className="text-color-primary font-caveat font-bold text-3xl ml-5 mb-7 md:text-5xl">
            Heading 1
          </h1>
          <div className="flex flex-col md:flex-row">
            <div className="flex w-4/6 items-center mx-10 mb-5">
              <Polaroid
                image={"../src/assets/achira.png"}
                name={"Achira"}
                align={"left"}
              />
            </div>

            <div className="flex justify-center items-center mx-10">
              <p className=" flex text-center md:text-left text-sm  text-color-secondary font-inter md:text-xl">
                I am Achira Silva. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce interdum varius purus, vitae pharetra
                arcu auctor sit amet.Contrary to popular belief, Lorem Ipsum is
                not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. Contrary to popular
                belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
              </p>
            </div>
          </div>
        </div>




        <div className="flex flex-col p-5">
          <h1 className="text-color-primary font-caveat font-bold text-3xl ml-5 mb-7 md:text-5xl">
            Heading 2
          </h1>
          <div className="flex flex-col md:flex-row-reverse items-center justify-center">
            <div className="flex w-4/6 items-center mx-10 mb-5">
              <Polaroid
                image={"../src/assets/game.jpg"}
                name={"Achira"}
                align={"right"}
              />
            </div>

            <div className="flex justify-center items-center mx-10">
              <p className=" flex text-center md:text-right text-sm  text-color-secondary font-inter md:text-xl">
                I am Achira Silva. Lorem ipsum dolor sit amet, consectetur
                adipiscing elit. Fusce interdum varius purus, vitae pharetra
                arcu auctor sit amet.Contrary to popular belief, Lorem Ipsum is
                not simply random text. It has roots in a piece of classical
                Latin literature from 45 BC, making it over 2000 years old.
                Richard McClintock, a Latin professor at Hampden-Sydney College
                in Virginia, looked up one of the more obscure Latin words,
                consectetur, from a Lorem Ipsum passage, and going through the
                cites of the word in classical literature, discovered the
                undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
                1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good
                and Evil) by Cicero, written in 45 BC. This book is a treatise
                on the theory of ethics, very popular during the Renaissance.
                The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..",
                comes from a line in section 1.10.32. Contrary to popular
                belief, Lorem Ipsum is not simply random text. It has roots in a
                piece of classical Latin literature from 45 BC, making it over
                2000 years old. Richard McClintock, a Latin professor at
                Hampden-Sydney College in Virginia, looked up one of the more
                obscure Latin words, consectetur, from a Lorem Ipsum passage,
                and going through the cites of the word in classical literature,
                discovered the undoubtable source. Lorem Ipsum comes from
                sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
                (The Extremes of Good and Evil) by Cicero, written in 45 BC.
                This book is a treatise on the theory of ethics, very popular
                during the Renaissance. The first line of Lorem Ipsum, "Lorem
                ipsum dolor sit amet..", comes from a line in section 1.10.32.
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
