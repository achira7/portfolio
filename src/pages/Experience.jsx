import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-10">
      <h1 className="text-4xl font-bold text-center mb-10 text-blue-500">My Work Experience</h1>
      <VerticalTimeline>
        {/* AIESEC Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1E40AF', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #1E40AF' }}
          date="2022 - 2023"
          iconStyle={{ background: '#1E40AF', color: '#fff' }}
          icon={<i className="fas fa-briefcase"></i>} // Font Awesome Icon for Work
        >
          <h3 className="vertical-timeline-element-title">AIESEC</h3>
          <h4 className="vertical-timeline-element-subtitle">Global Volunteer Coordinator</h4>
          <p>
            Coordinated volunteer programs for young leaders to experience cross-cultural internships.
          </p>
        </VerticalTimelineElement>

        {/* Pintanna Plantation Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#10B981', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #10B981' }}
          date="2023"
          iconStyle={{ background: '#10B981', color: '#fff' }}
          icon={<i className="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Pintanna Plantation</h3>
          <h4 className="vertical-timeline-element-subtitle">Marketing Intern</h4>
          <p>
            Assisted in marketing and branding strategies for sustainable tea plantations.
          </p>
        </VerticalTimelineElement>

        {/* Pitch Perfect Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#F59E0B', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid #F59E0B' }}
          date="2024"
          iconStyle={{ background: '#F59E0B', color: '#fff' }}
          icon={<i className="fas fa-briefcase"></i>}
        >
          <h3 className="vertical-timeline-element-title">Pitch Perfect</h3>
          <h4 className="vertical-timeline-element-subtitle">Sales Consultant</h4>
          <p>
            Engaged in business consulting to improve sales pitches and close deals effectively.
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
