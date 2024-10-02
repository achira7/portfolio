import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Button from "../components/Button";
import Footer from "../components/Footer";
import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  const Qexp = [
    {
      id: 1,
      title: "AIESEC",
      job: "Full Member",
      time: "2021 – 2023",
      description: "Held many positions",
      website: "https://aiesec.org/",
      link: "https://www.behance.net/moodboard/215289677/AIESEC",
    },
    {
      id: 2,
      title: "Pintanna Plantations",
      job: "Junior Graphic Designer",
      time: "December 2022 - May 2023",
      description:
        "Mainly responsible for creating social media posts for pintanna plantat",
      website: "https://www.pintannaplantations.lk/",
      link: "https://www.behance.net/moodboard/215289653/Pintanna-Plantations",
    },
    {
      id: 3,
      title: "Pitch Perfect",
      job: "Graphic Designer",
      time: "May 2023 - December 2023",
      description:
        "Engaged in business consulting to improve sales pitches and close deals effectively.",
      website: "https://pitchperfect.lk/",
      link: "",
    },
  ];

  const exp = [
    {
      id: 1,
      title: "AIESEC",
      time: "2021 – 2023",
      position: "Volunteer",
      description:
        "I volunteered with AIESEC Sri Lanka, actively contributing to the organization's mission of developing young leaders in Sri Lanka. As part of the world’s largest youth-led non-profit, I had the opportunity to support the organization while also gaining valuable experiences myself.",
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
        "Social Media Management",
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
      image: "https://www.behance.net/moodboard/215289677/AIESEC",
      link: "https://www.behance.net/moodboard/215289677/AIESEC",
    },
    {
      id: 2,
      title: "Pintanna Plantations",
      time: "December 2022 - May 2023",
      position: "Junior Graphic Designer",
      description:
        "Pintanna Plantation is an agricultural investment organization in Sri Lanka. I started my professional career as a graphic designer at Pintanna Plantations.",
      points: [
        "Developed and designed social media content, digital media, and marketing graphics that effectively promoted Pintanna Plantations’ brand across various online platforms, ensuring consistency and high engagement.",
        "Collaborated with the marketing team members to create visuals aligned with the company’s goals in the agriculture and investment sectors.",
        "Collaborated closely with the marketing team to create designs aligned with the company’s strategic goals in the agriculture and investment sectors to attract more customers.",
      ],
      skills: ["Creative Thinking", "Meeting Deadlines", "Communication", "Teamwork"],
      hard_skills: ["Photoshop", "Illustrator", "Lightroom", "Trello"],
      website: "https://www.pintannaplantations.lk/",
      image: "https://www.behance.net/moodboard/215289653/Pintanna-Plantations",
      link: "https://www.behance.net/moodboard/215289653/Pintanna-Plantations",
    },
    {
      id: 3,
      title: "Pitch Perfect",
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
                      src={`../src/assets/logos/${experience.id}.jpg`}
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
                    <Button name={"Read More"} link={"google.com"} />
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
                <h3 className="vertical-timeline-element-title text-lg font-bold font-inter text-color-primary">
                  {experience.title}
                </h3>
                <h4 className="vertical-timeline-element-subtitle text-color-primary">
                  {experience.job}
                </h4>
                <div className="flex">
                  <p className="text-color-secondary font-inter text-base">
                    {experience.description}
                  </p>
                </div>
                <div className="flex mt-10">
                  <Button
                    className="flex"
                    name={"Read More"}
                    link={"google.com"}
                  />
                </div>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>

        <div className="w-[90%] md:w-[60%]">
          {/* <ExperienceCard
            heading="Software Engineer Intern"
            position="Graphic Designer"
            description="Developed various features for the company's web application."
            points={[
              "Implemented user authentication.",
              "Optimized database queries, reducing load time by 30%.",
              "Collaborated with cross-functional teams.",
            ]}
            skills={["Teamwork", "Creativty"]}
            hard_skills={["React", "Node.js", "PostgreSQL"]}
            image={'../src/assets/game.jpg'}
            link={'google.com'}
          /> */}

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

        <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
          <div className="p-5">
            <h1 className="flex font-inter text-2xl md:text-3xl text-color-primary font-bold">
              Pitch Perfect
            </h1>
            <p className=" text-base md:text-xl font-inter text-color-secondary mt-1">
              At Pitch Perfect I did this and I did that etc....
            </p>
          </div>
        </div>

        <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
          <div className="p-5">
            <h1 className="flex font-inter text-2xl md:text-3xl text-color-primary font-bold">
              Pintanna Plantations
            </h1>
            <p className="text-base md:text-xl font-inter text-color-secondary mt-1">
              At Pintanna Plantations I did this and I did that etc....
            </p>
          </div>
        </div>

        <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
          <div className="p-5">
            <h1 className="flex font-inter text-2xl md:text-3xl text-color-primary font-bold">
              AIESEC
            </h1>
            <p className="text-base md:text-xl font-inter text-color-secondary mt-1">
              At AIESEC I did this and I did that etc....
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Experience;
