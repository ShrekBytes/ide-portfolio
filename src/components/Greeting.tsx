import React from 'react';
import styles from './RightSidebar.module.css';

const Greeting = () => {
  return (
    <div className={styles.content}>
      <h1 className={styles.name}>Gapur Kassym.</h1>
      <h2 className={styles.bio} style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>I am a Fullstack Software Engineer, Writer</h2>
      <p className={styles.bio}>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.</p>
      <button className={styles.button} style={{ marginTop: '1rem' }}>Get In Touch</button>
    </div>
  );
};

export default Greeting;
