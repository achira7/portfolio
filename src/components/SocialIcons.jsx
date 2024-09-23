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
    <div className="w-full flex flex-col items-center pt-2 bg-white transform rotate-[-3deg] shadow-md">
      {/* Gmail Icon */}
      <div className="p-5">
        <div className="flex flex-row justify-center items-center mb-2">
          <div className="flex flex-col items-center justify-center px-5">
            <p className="font-caveat text-2xl font-semibold text-color-primary  mb-4 md:text-3xl">
              Email
            </p>
            <a href="mailto:achira.sanjana@gmail.com"
            className="hover:scale-110 transform transition-transform"
            >
              <img
                src={gmail}
                alt="Achira's Email"
                className="mb-4 w-12 h-12"
              />
            </a>
          </div>

          <div className="flex flex-col items-center justify-center px-5">
            <p className="font-caveat text-2xl font-semibold text-color-primary  w-full   mb-4 md:text-3xl">
              GitHub
            </p>
            <a href="https://github.com/achira7"
            className="hover:scale-110 transform transition-transform">
              <img
                src={github}
                alt="Achira's GitHub"
                className="mb-4 w-12 h-12"
              />
            </a>
          </div>
        </div>

        <div className="text-center mb-4">
          <p className="font-caveat font-semibold text-2xl text-color-primary md:text-3xl">
            Follow me on Socials
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {socials.map(({ id, title, img, link }) => (
              <a
                href={link}
                key={id}
                aria-label={title}
                className="hover:scale-110 transform transition-transform"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={img}
                  alt={title}
                  className="w-12 h-12 rounded-lg"
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
