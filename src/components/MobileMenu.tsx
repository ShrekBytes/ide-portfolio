import React from 'react';
import LeftSidebar from './LeftSidebar';
import styles from './MobileMenu.module.css';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  activeFile: string;
  setActiveFile: (file: string) => void;
  scrollToSection: (id: string) => void;
  files: any[];
  breadcrumbPath: string[];
}

const MobileMenu = React.forwardRef<HTMLDivElement, MobileMenuProps>(({ isOpen, onClose, activeFile, setActiveFile, scrollToSection, files, breadcrumbPath }, ref) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ''}`} ref={ref}>
      <button className={styles.closeButton} onClick={onClose}>&times;</button>
      <div className={styles.menuContent}>
        <div className={styles.header}>EXPLORER</div>
        {/* Removed hardcoded about-me.js entry */}
        <LeftSidebar activeFile={activeFile} setActiveFile={setActiveFile} scrollToSection={scrollToSection} isMobileMenu={true} files={files} breadcrumbPath={breadcrumbPath} />
      </div>
    </div>
  );
});

export default MobileMenu;
