import React from "react";
import Polaroid from "../components/Polaroid";
import Footer from "../components/Footer";

const AboutMe = () => {
  return (
    <div className="bg-background">
      <div className="flex flex-col mt-28 m-5 w-full max-w-screen-2xl mx-auto space-y-10 mb-36 items-center justify-center">
        <div className="flex flex-col md:pt-3 items-center justify-center">
          <div className="flex justify-center flex-col  items-center mx-10 ">
            <div className="flex  flex-col items-center mb-1 md:mb-5">
              <h1 className="flex text-center text-color-primary font-caveat text-3xl  mb-3 md:text-4xl">
                Hey there,
              </h1>

              <h1 className="flex text-center text-color-primary font-caveat font-bold text-3xl  md:text-5xl">
                I am Achira Silva,
              </h1>
            </div>

            <div className=" justify-center items-center md:mx-36 p-8 mb-5">
              <p className="flex text-center md:text-left text-base  text-color-secondary md:leading-9 font-inter md:text-xl leading-[2] pb-8">
                A Creative individual with a passion for creating things from
                Web Apps to Video Games to Music to Novels and everything in
                between. Whether it’s a new language, Pixel Art, or Playing the
                Keyboards, I’m in for learning that as long as it interests me.
              </p>

              <p className="flex text-center md:text-left text-base md:leading-9 text-color-secondary font-inter md:text-xl leading-[2] pb-8">
                As a BIS graduate, I am passionate about roles that involve
                analyzing, improving, and ensuring the quality of business
                processes and software systems. My strong interest in Data &
                Software Quality Assurance drives me to identify and address
                even the smallest inconsistencies, ensuring that the final
                product meets the highest standards of performance and
                reliability.<br/><br/>
                I find great satisfaction in testing and validating
                systems to guarantee they align with business requirements and
                user expectations. In addition, I have a keen interest in
                Business Analysis, where I enjoy collaborating with stakeholders
                to gather requirements, analyze processes, and propose effective
                solutions.
              </p>

              <p className="flex text-center md:text-left text-base md:leading-9 text-color-secondary font-inter md:text-xl leading-[2] pb-8">
                As a developer, I have a strong passion for Full Stack Web
                Development, with the MERN stack being my go-to tech stack for
                building dynamic, responsive, and user-friendly applications. I
                thrive on the challenge of crafting seamless user experiences
                and robust backend systems, and I'm always eager to explore new
                tools and technologies to expand my skill set and stay ahead in
                the ever-evolving tech landscape. <br/><br/>
                
                Beyond web development, I
                enjoy experimenting with Game Development, where I can merge
                creativity with technical skills to bring interactive
                experiences to life. I’m also keen on Mobile App Development,
                exploring ways to create intuitive and accessible applications
                that solve real-world problems. This versatility allows me to
                approach development with an open mind, blending innovation with
                a solid technical foundation.
              </p>

              <p className="flex flex-auto text-center md:text-left text-base md:leading-9 text-color-secondary font-inter md:text-xl leading-[2]">
                With a background in creative design and practical
                experience as a Graphic Designer, I bring a unique
                perspective to crafting visually appealing and user-centric
                solutions. My passion for design goes beyond aesthetics,
                focusing on creating meaningful and intuitive experiences that
                resonate with users. <br/><br/>
                
                This foundation naturally leads me to delve
                into UI/UX Design and Interaction Design, where I enjoy
                blending creativity with functionality. I thrive on designing
                interfaces that not only look stunning but also provide seamless
                and engaging user journeys, ensuring every interaction feels
                intuitive and purposeful.
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
