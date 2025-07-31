import React from 'react';
import styles from './RightSidebar.module.css';
import Greeting from './Greeting';

const RightSidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>GREETING</div>
      <Greeting />
    </div>
  );
};

export default RightSidebar;