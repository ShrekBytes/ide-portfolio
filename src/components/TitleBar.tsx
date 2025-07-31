import React from 'react';
import styles from './TitleBar.module.css';

interface TitleBarProps {
  onBurgerClick: () => void;
}

const TitleBar: React.FC<TitleBarProps> = ({ onBurgerClick }) => {
  return (
    <div className={styles.titleBar}>
      <button className={styles.burgerIcon} onClick={onBurgerClick}>&#9776;</button>
      <div className={styles.title}>samy-walid-portfolio</div>
    </div>
  );
};

export default TitleBar;
