import React from 'react';
import styles from './MainContent.module.css';

import AboutMeSection from './AboutMeSection';
import Experience from './Experience';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';

import Greeting from './Greeting';

interface MainContentProps {
  isMobile: boolean;
}

const MainContent = React.forwardRef<HTMLDivElement, MainContentProps>(({ isMobile }, ref) => {
  return (
    <div className={styles.mainContent} ref={ref}>
      {isMobile && <div id="greeting-section"><Greeting /></div>} {/* Render Greeting for mobile */}
      <div id="about-me"><AboutMeSection /></div>
      <div id="experience"><Experience /></div>
      <div id="skills"><Skills /></div>
      <div id="projects"><Projects /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
});

export default MainContent;