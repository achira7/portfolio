import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Button from "../components/Button";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard";

// images
import AIESEC from "../assets/logos/1.jpg"
import Pintanna from "../assets/logos/2.jpg"
import PicthPerfect from "../assets/logos/3.jpg"

import AIESEC_img from "../assets/images/aiesec-1.png"

const Experience = () => {
  const images = "../src/assets/images/";
  const exp = [
    {
      id: 1,
      title: "AIESEC Sri Lanka",
      icon: AIESEC,
      time: "2021 – 2023",
      position: "Volunteer",
      description:
        "I volunteered with AIESEC Sri Lanka, contributing to the mission of developing young leaders in Sri Lanka while also gaining valuable experiences for myself.",
      points: [
        "As a full member, held many creative and leadership positions at the university and national level.",
        "Held multiple creative and leadership roles at both university and national levels.",
        "Organized and actively participated in university-level and national-level AIESEC events.",
        "Designed web, social media, and print materials for AIESEC in IIT and AIESEC Sri Lanka, including event-specific graphics.",
        "Led the Marketing Teams at IIT and the Graphic Team for the National Showcasing Team.",
        "Collaborated with cross-functional teams to execute successful marketing campaigns and events.",
      ],
      skills: [
        "Teamwork",
        "Event Organizing",
        "Leadership",
        "Creative Design",
        "Negotiation",
        "Time Management",
        "Creative Thinking",
        "Adaptability",
      ],
      hard_skills: [
        "Photoshop",
        "Illustrator",
        "Premiere Pro",
        "Canva",
        "G Suite",
        "Meta Business Suite",
        "ClickUp",
      ],
      website: "https://aiesec.org/",
      image: AIESEC_img,
      link: "https://www.behance.net/moodboard/215289677/AIESEC",
    },
    {
      id: 2,
      title: "Pintanna Plantations",
      icon: Pintanna,
      time: "December 2022 - May 2023",
      position: "Junior Graphic Designer",
      description:
        "Pintanna Plantation is an agricultural investment organization in Sri Lanka. I started my professional career as a graphic designer at Pintanna Plantations.",
      points: [
        "Developed and designed social media content, digital media, and marketing graphics that effectively promoted Pintanna Plantations’ brand across various online platforms, ensuring consistency and high engagement.",
        "Collaborated with the marketing team members to create visuals aligned with the company’s goals in the agriculture and investment sectors.",
        "Collaborated closely with the marketing team to create designs aligned with the company’s strategic goals in the agriculture and investment sectors to attract more customers.",
      ],
      skills: [
        "Creative Thinking",
        "Meeting Deadlines",
        "Communication",
        "Teamwork",
      ],
      hard_skills: ["Photoshop", "Illustrator", "Lightroom", "Trello"],
      website: "https://www.pintannaplantations.lk/",
      image: "https://www.behance.net/moodboard/215289653/Pintanna-Plantations",
      link: "https://www.behance.net/moodboard/215289653/Pintanna-Plantations",
    },
    {
      id: 3,
      title: "Pitch Perfect",
      icon: PicthPerfect,
      time: "May 2023 - December 2023",
      position: "Graphic Designer",
      description:
        "Pitch Perfect is a Sri Lankan startup focused on print-related media, especially TV commercials and other media services for Canadian businesses.",
      points: [
        "Created print designs for small to medium-sized businesses across various industries in Canada, including Real Estate, Food & Beverages, and Entertainment.",
        "Adapted to the Canadian local design language, effectively aligning designs with unfamiliar cultural and industry standards.",
        "Adjusted to Canadian work hours, often working night shifts to ensure seamless collaboration with clients and team members in different time zones, while maintaining consistent productivity and meeting project deadlines.",
      ],
      skills: ["Handling Clients", "Adaptability"],
      hard_skills: ["Adobe Photoshop", "Adobe Illustrator", "Adobe InDesign"],
      website: "https://pitchperfect.lk/",
      image: "",
      link: "",
    },
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const yOffset = window.innerHeight * 0.07;
    const yPosition =
      element.getBoundingClientRect().top + window.pageYOffset - yOffset;

    window.scrollTo({ top: yPosition, behavior: "smooth" });
  };

  return (
    <div className="bg-background mt-[25%] md:mt-[5%]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center justify-center w-full md:mb-5">
          <h2 className="font-inter text-2xl font-bold text-color-primary md:mt-7 items-center md:text-3xl">
            Timeline
          </h2>
        </div>

        {/* Desktop Version */}
        <div className="mb-10 md:w-full md:mb-10 hidden md:flex">
          <VerticalTimeline>
            {exp.reverse().map((experience) => (
              <VerticalTimelineElement
                key={experience.id}
                dateClassName="timeline-date"
                className="vertical-timeline-element--work text-color-secondary font-inter text-lg"
                contentStyle={{
                  background: "rgba(var(--color-blue))",
                  padding: "20px",
                  borderRadius: "8px",
                }}
                contentArrowStyle={{
                  borderRight: `25px solid rgba(var(--color-blue))`,
                }}
                date={experience.time}
                iconStyle={{
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "50%",
                  border: `4px solid rgba(var(--color-primary))`,
                }}
                icon={
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={experience.icon}
                      alt={`${experience.title} logo`}
                      className="object-contain w-full h-full"
                    />
                  </a>
                }
              >
                <h3 className="vertical-timeline-element-title text-2xl font-bold font-inter text-color-primary">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-color-primary">
                  {experience.job}
                </h4>
                <p className="text-color-secondary font-inter">
                  {experience.description}
                </p>
                <div className="flex flex-row gap-5">
                  <div className="mt-5">
                    <button
                      id="clickable"
                      className="flex items-center cursor-none justify-center bg-color-green hover:scale-110  rounded-lg font-inter px-4 py-2 shadow-md transition-all duration-300"
                      onClick={() =>
                        scrollToSection(
                          experience.title.replace(/\s+/g, "-").toLowerCase()
                        )
                      }
                    >
                      <span
                        className="text-white text-xs md:text-base cursor-none"
                        id="clickable"
                      >
                        Read More
                      </span>
                    </button>
                  </div>

                  <div className="mt-5">
                    <Button
                      color={"blue"}
                      name={"See Work"}
                      link={"google.com"}
                    />
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        {/* Mobile Version */}
        <div className="mb-10 md:mb-10 md:hidden items-center justify-center">
          <VerticalTimeline
            layout={"1-column-left"}
            className="justify-end items-end"
            dateClassName={{ position: top }}
          >
            {exp.reverse().map((experience) => (
              <VerticalTimelineElement
                position={"right"}
                key={experience.id}
                className="vertical-timeline-element--work text-color-secondary font-inter text-base "
                contentStyle={{
                  background: "rgba(var(--color-blue))",
                  padding: "20px",
                  borderRadius: "8px",
                  minWidth: "30%",
                  maxHeight: "250px",
                  marginLeft: "50px",
                }}
                contentArrowStyle={{
                  borderRight: `10px solid rgba(var(--color-blue))`,
                }}
                date={experience.time}
                iconStyle={{
                  background: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                  borderRadius: "50%",
                  border: `4px solid rgba(var(--color-primary))`,
                }}
                icon={
                  <a
                    href={experience.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`../src/assets/logos/${experience.id}.jpg`}
                      alt={`${experience.title} logo`}
                      className="object-contain w-full h-full"
                    />
                  </a>
                }
              >
                <div className="flex flex-col">
                  <div className="">
                    <h3 className="vertical-timeline-element-title text-lg font-bold font-inter text-color-primary">
                      {experience.title}
                    </h3>
                  </div>
                  <div className="">
                    <h4 className="vertical-timeline-element-subtitle text-color-primary">
                      {experience.job}
                    </h4>
                  </div>

                  <div className="flex">
                    <p className="text-color-secondary font-inter text-base">
                      {experience.description}
                    </p>
                  </div>
                  <div className="flex md:mt-10 mt-5">
                    <button
                      id="clickable"
                      className="flex items-center cursor-none justify-center bg-color-green hover: scale-110  rounded-lg font-inter px-4 py-2 shadow-md transition-all duration-300"
                      onClick={() =>
                        scrollToSection(
                          experience.title.replace(/\s+/g, "-").toLowerCase()
                        )
                      }
                    >
                      <span
                        className="text-white text-xs md:text-base cursor-none"
                        id="clickable"
                      >
                        Read More
                      </span>
                    </button>
                  </div>
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="w-[90%] md:w-[60%]">
          {exp.map((experience) => (
            <ExperienceCard
              key={experience.id}
              title={experience.title}
              position={experience.position}
              description={experience.description}
              points={experience.points}
              skills={experience.skills}
              hard_skills={experience.hard_skills}
              image={experience.image}
              link={experience.link}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
