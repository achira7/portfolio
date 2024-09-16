import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  const exp = [
    { id: 1, title: "AIESEC", job: "Global Volunteer Coordinator", time: "2022 - 2023", description: "Coordinated volunteer programs for young leaders to experience cross-cultural internships.", color: '#1E40AF' },
    { id: 2, title: "Pintanna Plantations", job: "Marketing Intern", time: "2023", description: "Assisted in marketing and branding strategies for sustainable tea plantations.", color: '#10B981' },
    { id: 3, title: "Pitch Perfect", job: "Sales Consultant", time: "2024", description: "Engaged in business consulting to improve sales pitches and close deals effectively.", color: '#F59E0B' },
    { id: 4, title: "About Me", job: "", time: "", description: "I am a passionate software engineer specializing in full-stack development.", color: '#D97706' },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-500">My Work Experience</h1>
      <VerticalTimeline>
        {exp.map((experience) => (
          <VerticalTimelineElement
            key={experience.id}
            className="vertical-timeline-element--work"
            contentStyle={{ background: experience.color, color: '#fff' }}
            contentArrowStyle={{ borderRight: `10px solid ${experience.color}` }}
            date={experience.time}
            iconStyle={{ background: experience.color, color: '#fff' }}
            icon={<i className="fas fa-briefcase"></i>} // Example icon, replace or customize as needed
          >
            <h3 className="vertical-timeline-element-title font-bold font-inter text-color-primary">{experience.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{experience.job}</h4>
            <p>{experience.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
