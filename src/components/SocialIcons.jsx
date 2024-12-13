import React from "react";

import Instagram from "../assets/social_logos/instagram.svg";
import Linkedin from "../assets/social_logos/linkedin.svg";
import Behance from "../assets/social_logos/behance.svg";

import Gmail from "../assets/social_logos/gmail.svg";
import GitHub from "../assets/social_logos/github.svg";

const SocialIcons = () => {
  const socials = [
    {
      id: 1,
      title: "LinkedIn",
      img: Linkedin,
      link: "https://www.linkedin.com/in/achira-silva/",
    },
    {
      id: 2,
      title: "Behance",
      img: Behance,
      link: "https://www.behance.net/achira_silva",
    },
    {
      id: 3,
      title: "Instagram",
      img: Instagram,
      link: "https://www.instagram.com/axhira/",
    },
  ];

  return (
    <div className="flex flex-col md:w-[300px] md:h-[300px] w-[70%]  items-center pt-2 transform rotate-[-7deg] shadow-2xl rounded-xl border-2 border-card-primary-border  bg-card-primary-top">
      {/* Gmail Icon */}
      <div className="p-7">
        <div className="flex flex-row justify-center items-center mb-2 ">
          <div className="flex flex-col justify-center items-center">
            <a
            id="clickable"
              href="mailto:achira.sanjana@gmail.com"
              className="flex hover:scale-110 transform transition-transform justify-center items-center flex-col"
            >
              <p className="font-caveat text-xl font-semibold text-color-primary md:text-3xl">
                Email
              </p>

              <img
              id="clickable"
                src={Gmail}
                alt="Achira's Email"
                // className="mb-4 w-12 h-12"
                className="w-3/5 h-3/5"
              />
            </a>
          </div>

          <div className="flex flex-col justify-center items-center">
          <a
          id="clickable"
                href="https://github.com/achira7"
                className="flex hover:scale-110 transform transition-transform justify-center items-center flex-col"
              >
              <p className="font-caveat text-xl font-semibold text-color-primary md:text-3xl">
                GitHub
              </p>


            <div className="flex flex-col justify-center items-center">
              
                <img
                  src={GitHub}
                  alt="Achira's GitHub"
                  // className="mb-4 w-12 h-12"
                  className="w-2/5 h-2/5 py-2"
                />
              
            </div></a>
          </div>
        </div>

        <div className="grid grid-flow-row justify-center items-center mb-2 mt-3">
          <div className="flex w-full  justify-center items-center">
            <p className="font-caveat font-semibold text-2xl text-color-primary md:text-3xl">
              Follow me on Socials
            </p>
          </div>

          <div className="grid grid-cols-3 justify-end items-end w-full mt-1">
            {socials.map(({ id, title, img, link }) => (
              <a
              id="clickable"
                href={link}
                key={id}
                aria-label={title}
                className="hover:scale-110 transform transition-transform flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-3/5 h-3/5 py-2 mx-3 rounded-lg"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
