import React from 'react';
import sectionStyles from './styles/Section.module.css';
import timelineStyles from './styles/Timeline.module.css';

const Experience = () => {
  return (
    <div className={sectionStyles.section}>
      <h2 className={sectionStyles.title}>Experience</h2>
      <div className={timelineStyles.timeline}>
        <div id="experience-senior-software-engineer" className={`${sectionStyles.item} ${timelineStyles.item}`}>
          <div className={timelineStyles.year}>Present</div>
          <h3 className={sectionStyles.itemTitle}>Senior Software Engineer <span className={sectionStyles.company}>@ Tech Solutions Inc.</span></h3>
          <p className={sectionStyles.date}>January 2022 - Present</p>
          <ul className={sectionStyles.list}>
            <li>Lead the development of a new client-facing analytics dashboard using React, TypeScript, and Chart.js, resulting in a 20% increase in user engagement.</li>
            <li>Architect and implement scalable backend services with Node.js and Express, handling over 1 million daily requests.</li>
            <li>Mentor junior engineers, conduct code reviews, and advocate for best practices in an Agile environment.</li>
          </ul>
          <p className={sectionStyles.hollowBox}>Leading a team in developing cutting-edge web applications and backend services, focusing on scalability and user experience.</p>
          <div className={sectionStyles.stackContainer}>
            <span className={sectionStyles.stackTag}>React</span>
            <span className={sectionStyles.stackTag}>TypeScript</span>
            <span className={sectionStyles.stackTag}>Node.js</span>
            <span className={sectionStyles.stackTag}>Express</span>
            <span className={sectionStyles.stackTag}>Chart.js</span>
          </div>
        </div>
        <div id="experience-full-stack-developer" className={`${sectionStyles.item} ${timelineStyles.item}`}>
          <div className={timelineStyles.year}>2021</div>
          <h3 className={sectionStyles.itemTitle}>Full Stack Developer <span className={sectionStyles.company}>@ Innovate Co.</span></h3>
          <p className={sectionStyles.date}>June 2020 - December 2021</p>
          <ul className={sectionStyles.list}>
            <li>Developed and maintained features for a large-scale e-commerce platform using Vue.js and Django.</li>
            <li>Collaborated with designers and product managers to create a seamless user experience.</li>
            <li>Wrote and maintained unit and integration tests to ensure code quality and reliability.</li>
          </ul>
          <p className={sectionStyles.hollowBox}>Contributed to the full lifecycle development of an e-commerce platform, enhancing features and ensuring robust performance.</p>
          <div className={sectionStyles.stackContainer}>
            <span className={sectionStyles.stackTag}>Vue.js</span>
            <span className={sectionStyles.stackTag}>Django</span>
            <span className={sectionStyles.stackTag}>Python</span>
            <span className={sectionStyles.stackTag}>PostgreSQL</span>
          </div>
        </div>
        <div id="experience-software-development-intern" className={`${sectionStyles.item} ${timelineStyles.item}`}>
          <div className={timelineStyles.year}>2019</div>
          <h3 className={sectionStyles.itemTitle}>Software Development Intern <span className={sectionStyles.company}>@ Digital Creations</span></h3>
          <p className={sectionStyles.date}>May 2019 - August 2019</p>
          <ul className={sectionStyles.list}>
            <li>Assisted in the development of a mobile application using React Native.</li>
            <li>Worked on bug fixes and contributed to the improvement of the existing codebase.</li>
            <li>Gained experience with the full software development lifecycle.</li>
          </ul>
          <p className={sectionStyles.hollowBox}>Gained foundational experience in mobile application development and contributed to core codebase improvements.</p>
          <div className={sectionStyles.stackContainer}>
            <span className={sectionStyles.stackTag}>React Native</span>
            <span className={sectionStyles.stackTag}>JavaScript</span>
            <span className={sectionStyles.stackTag}>Firebase</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;