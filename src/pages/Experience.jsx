import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Button from "../components/Button";
import Footer from "../components/Footer";

const Experience = () => {
  const exp = [
    {
      id: 1,
      title: "AIESEC",
      job: "Global Volunteer Coordinator",
      time: "2022 - 2023",
      description:
        "Coordinated volunteer programs for young leaders to experience cross-cultural internships.",
      website: "https://aiesec.org/",
    },
    {
      id: 2,
      title: "Pintanna Plantations",
      job: "Marketing Intern",
      time: "2023",
      description:
        "Assisted in marketing and branding strategies for sustainable tea plantations.",
      website: "https://www.pintannaplantations.lk/",
    },
    {
      id: 3,
      title: "Pitch Perfect",
      job: "Sales Consultant",
      time: "2024",
      description:
        "Engaged in business consulting to improve sales pitches and close deals effectively.",
      website: "https://pitchperfect.lk/",
    },
  ];

  return (
    <div className="bg-background mt-24 ">
      <h1 className="text-5xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap">
        Experience
      </h1>
      <div className="flex items-center justify-center w-full py-6">
        <h2 className="font-inter text-4xl font-bold text-color-primary items-center">
          Timeline
        </h2>
      </div>

      <div className="w-full mb-10">
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
              <h3 className="vertical-timeline-element-title text-2xl font-bold font-inter text-color-primary">
                {experience.title}
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-color-primary">
                {experience.job}
              </h4>
              <p className="text-color-secondary font-inter">
                {experience.description}
              </p>

              <Button name={"Read More"} link={"google.com"} />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>

      <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
        <div className="p-5">
          <h1 className="flex font-inter text-3xl text-color-primary font-bold">
            Pitch Perfect
          </h1>
          <p className="text-xl font-inter text-color-secondary mt-1">
            At Pitch Perfect I did this and I did that etc....
          </p>
        </div>
      </div>

      <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
        <div className="p-5">
          <h1 className="flex font-inter text-3xl text-color-primary font-bold">
          Pintanna Plantations
          </h1>
          <p className="text-xl font-inter text-color-secondary mt-1">
            At Pintanna Plantations I did this and I did that etc....
          </p>
        </div>
      </div>

      <div className="mb-10 mx-5 bg-card-primary border border-card-primary-border rounded-xl bg-gradient-to-t from-card-primary-bottom to-card-primary-top shadow-xl z-20">
        <div className="p-5">
          <h1 className="flex font-inter text-3xl text-color-primary font-bold">
            AIESEC
          </h1>
          <p className="text-xl font-inter text-color-secondary mt-1">
            At AIESEC I did this and I did that etc....
          </p>
        </div>
      </div>
<Footer />
    </div>
  );
};

export default Experience;
