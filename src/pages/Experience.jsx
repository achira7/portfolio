import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

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
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-5xl font-bold text-color-primary font-inter top-0 mx-5 mt-5 flex flex-wrap">
        Projects
      </h1>
      <VerticalTimeline>
        {exp.reverse().map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "rgba(var(--color-blue))",
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
            <h3 className="vertical-timeline-element-title font-bold font-inter text-color-primary">
              {experience.title}
            </h3>
            <h4 className="vertical-timeline-element-subtitle text-color-primary">
              {experience.job}
            </h4>
            <p className="text-color-primary">{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
