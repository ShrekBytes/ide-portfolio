import React from 'react';
import sectionStyles from './styles/Section.module.css';
import rightSidebarStyles from './RightSidebar.module.css';

const AboutMeSection = () => {
  return (
    <div className={sectionStyles.section}>
      <h2 className={sectionStyles.title}>About Me</h2>
      <div className={rightSidebarStyles.aboutMeLayout}>
        <div className={rightSidebarStyles.aboutMeTextContent}>
          <p className={sectionStyles.description}>
            Hello! I'm a passionate software engineer with a knack for building elegant and efficient solutions. I specialize in front-end development with React and enjoy creating intuitive user experiences. My journey in tech has been driven by curiosity and a desire to solve real-world problems through code. I'm always eager to learn new technologies and improve my craft.
          </p>
          <div className={sectionStyles.stackContainer}>
            <span className={sectionStyles.stackTag}>React</span>
            <span className={sectionStyles.stackTag}>TypeScript</span>
            <span className={sectionStyles.stackTag}>Node.js</span>
            <span className={sectionStyles.stackTag}>Express</span>
            <span className={sectionStyles.stackTag}>MongoDB</span>
            <span className={sectionStyles.stackTag}>Python</span>
            <span className={sectionStyles.stackTag}>Django</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSection;
