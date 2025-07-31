import React from 'react';
import styles from './styles/Section.module.css';

const Skills = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillsContainer}>
        <span className={styles.skillTag}>JavaScript (ES6+)</span>
        <span className={styles.skillTag}>TypeScript</span>
        <span className={styles.skillTag}>Python</span>
        <span className={styles.skillTag}>HTML5</span>
        <span className={styles.skillTag}>CSS3</span>
        <span className={styles.skillTag}>React</span>
        <span className={styles.skillTag}>Node.js</span>
        <span className={styles.skillTag}>Express</span>
        <span className={styles.skillTag}>Vue.js</span>
        <span className={styles.skillTag}>Django</span>
        <span className={styles.skillTag}>Next.js</span>
        <span className={styles.skillTag}>Git & GitHub</span>
        <span className={styles.skillTag}>Docker</span>
        <span className={styles.skillTag}>Webpack</span>
        <span className={styles.skillTag}>Babel</span>
        <span className={styles.skillTag}>Vercel</span>
        <span className={styles.skillTag}>AWS</span>
      </div>
    </div>
  );
};

export default Skills;
