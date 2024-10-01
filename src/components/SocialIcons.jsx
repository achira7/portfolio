import React from "react";

const SocialIcons = () => {
  const gmail = "./src/assets/social_logos/gmail.svg";
  const github = "./src/assets/social_logos/github.svg";

  const socials = [
    {
      id: 1,
      title: "LinkedIn",
      img: "./src/assets/social_logos/linkedin.svg",
      link: "https://www.linkedin.com/in/achira-silva/",
    },
    {
      id: 2,
      title: "Behance",
      img: "./src/assets/social_logos/behance.svg",
      link: "https://www.behance.net/achira_silva",
    },
    {
      id: 3,
      title: "Instagram",
      img: "./src/assets/social_logos/instagram.svg",
      link: "https://www.instagram.com/axhira/",
    },
  ];

  return (
    <div className="flex flex-col md:w-[300px] md:h-[300px] w-[70%]  items-center pt-2 bg-white transform rotate-[-7deg] shadow-xl rounded-xl border-2 border-slate-300">
      {/* Gmail Icon */}
      <div className="p-7">
        <div className="flex flex-row justify-center items-center mb-2 ">
          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <p className="font-caveat text-xl font-semibold text-color-primary md:text-3xl">
                Email
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <a
                href="mailto:achira.sanjana@gmail.com"
                className="hover:scale-110 transform transition-transform flex justify-center items-center"
              >
                <img
                  src={gmail}
                  alt="Achira's Email"
                  // className="mb-4 w-12 h-12"
                  className="w-3/5 h-3/5"
                />
              </a>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="flex">
              <p className="font-caveat text-xl font-semibold text-color-primary md:text-3xl">
                GitHub
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <a
                href="mailto:achira.sanjana@gmail.com"
                className="hover:scale-110 transform transition-transform flex justify-center items-center"
              >
                <img
                  src={github}
                  alt="Achira's GitHub"
                  // className="mb-4 w-12 h-12"
                  className="w-2/5 h-2/5 py-2"
                />
              </a>
            </div>
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
                href={link}
                key={id}
                aria-label={title}
                className="hover:scale-110 transform transition-transform flex"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={img} alt={title} className="w-3/5 h-3/5 py-2 mx-3 rounded-lg" />
              </a>
            ))}
          </div>
          
          
        </div>
      </div>
    </div>
  );
};

export default SocialIcons;
