import React from "react";

import Polaroid from "../components/Polaroid";

const AboutMe = () => {
  return (
    <div className="flex flex-col bg-background m-5 w-full max-w-screen-2xl mx-auto space-y-10">
      <h1 className="text-5xl font-bold text-color-primary font-inter">
        About Me
      </h1>

      {/* First row: Image on the left, Text on the right */}
      <div className="flex flex-row items-center space-x-10 mx-10">
        <Polaroid
          image={"../src/assets/achira.png"}
          name={"Achira"}
          align={"left"}
        />
        <p className="text-xl flex-1 text-color-secondary font-inter">
          I am Achira Silva. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Fusce interdum varius purus, vitae pharetra arcu auctor sit
          amet.Contrary to popular belief, Lorem Ipsum is not simply random
          text. It has roots in a piece of classical Latin literature from 45
          BC, making it over 2000 years old. Richard McClintock, a Latin
          professor at Hampden-Sydney College in Virginia, looked up one of the
          more obscure Latin words, consectetur, from a Lorem Ipsum passage, and
          going through the cites of the word in classical literature,
          discovered the undoubtable source. Lorem Ipsum comes from sections
          1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
          of Good and Evil) by Cicero, written in 45 BC. This book is a treatise
          on the theory of ethics, very popular during the Renaissance. The
          first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from
          a line in section 1.10.32. Contrary to popular belief, Lorem Ipsum is
          not simply random text. It has roots in a piece of classical Latin
          literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.
        </p>
      </div>

      {/* Second row: Text on the left, Image on the right */}
      <div className="flex flex-row-reverse items-center space-x-reverse space-x-10 mx-10">
        <Polaroid
          image={"../src/assets/game.jpg"}
          name={"Game"}
          align={"right"}
        />
        <p className="text-xl flex-1 text-color-secondary font-inter">
          I enjoy working on web development projects. Nam nec ligula sit amet
          arcu efficitur egestas in ac ipsum.Contrary to popular belief, Lorem
          Ipsum is not simply random text. It has roots in a piece of classical
          Latin literature from 45 BC, making it over 2000 years old. Richard
          McClintock, a Latin professor at Hampden-Sydney College in Virginia,
          looked up one of the more obscure Latin words, consectetur, from a
          Lorem Ipsum passage, and going through the cites of the word in
          classical literature, discovered the undoubtable source. Lorem Ipsum
          comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
          Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.
          This book is a treatise on the theory of ethics, very popular during
          the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
          amet..", comes from a line in section 1.10.32.Contrary to popular
          belief, Lorem Ipsum is not simply random text. It has roots in a piece
          of classical Latin literature from 45 BC, making it over 2000 years
          old. Richard McClintock, a Latin professor at Hampden-Sydney College
          in Virginia, looked up one of the more obscure Latin words,
          consectetur, from a Lorem Ipsum passage, and going through the cites
          of the word in classical literature, discovered the undoubtable
          
        </p>
      </div>
    </div>
  );
};

export default AboutMe;
