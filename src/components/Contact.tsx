import React from 'react';
import styles from './styles/Section.module.css';

const Contact = () => {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.description}>
        I'm currently open to new opportunities and would love to hear from you. Whether you have a question or just want to say hi, I'll do my best to get back to you!
      </p>
      <a href="mailto:samywalid@gmail.com" className={`${styles.emailLink} ${styles.redText}`}>Say Hello</a>
    </div>
  );
};

export default Contact;
