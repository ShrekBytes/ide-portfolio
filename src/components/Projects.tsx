import React from 'react';
import styles from './styles/Section.module.css';

const Projects = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Projects</h2>
      <div id="project-ecommerce-platform" className={styles.item}>
        <h3 className={styles.itemTitle}>E-commerce Platform</h3>
        <img src="https://via.placeholder.com/400x200?text=E-commerce+Platform" alt="E-commerce Platform" className={styles.projectImage} />
        <p className={styles.description}>A full-featured e-commerce website built with the MERN stack. Features include product search, shopping cart, user authentication, and a payment gateway integration.</p>
        <div className={styles.stackContainer}>
          <span className={styles.stackTag}>MongoDB</span>
          <span className={styles.stackTag}>Express.js</span>
          <span className={styles.stackTag}>React</span>
          <span className={styles.stackTag}>Node.js</span>
          <span className={styles.stackTag}>Stripe API</span>
        </div>
        <a href="#" className={`${styles.link} ${styles.cyanText} ${styles.projectLinkButton}`}>View on GitHub</a>
      </div>
      <div id="project-real-time-chat-application" className={styles.item}>
        <h3 className={styles.itemTitle}>Real-time Chat Application</h3>
        <img src="https://via.placeholder.com/400x200?text=Chat+Application" alt="Real-time Chat Application" className={styles.projectImage} />
        <p className={styles.description}>A web-based chat application using Socket.io and Express. Users can join chat rooms, send private messages, and see who is online.</p>
        <div className={styles.stackContainer}>
          <span className={styles.stackTag}>Socket.io</span>
          <span className={styles.stackTag}>Express.js</span>
          <span className={styles.stackTag}>Node.js</span>
          <span className={styles.stackTag}>WebSockets</span>
        </div>
        <a href="#" className={`${styles.link} ${styles.cyanText} ${styles.projectLinkButton}`}>View on GitHub</a>
      </div>
      <div id="project-portfolio-website" className={styles.item}>
        <h3 className={styles.itemTitle}>Portfolio Website</h3>
        <img src="https://via.placeholder.com/400x200?text=Portfolio+Website" alt="Portfolio Website" className={styles.projectImage} />
        <p className={styles.description}>This very portfolio website, built with React and TypeScript, styled to look like a modern code editor.</p>
        <div className={styles.stackContainer}>
          <span className={styles.stackTag}>React</span>
          <span className={styles.stackTag}>TypeScript</span>
          <span className={styles.stackTag}>Vite</span>
          <span className={styles.stackTag}>CSS Modules</span>
        </div>
        <a href="#" className={`${styles.link} ${styles.cyanText} ${styles.projectLinkButton}`}>View on GitHub</a>
      </div>
    </div>
  );
};

export default Projects;
