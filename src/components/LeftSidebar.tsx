import React, { useState, useMemo } from 'react';
import styles from './LeftSidebar.module.css';

interface FileItem {
  id: string;
  displayName: string;
  children?: FileItem[];
}

interface LeftSidebarProps {
  activeFile: string;
  setActiveFile: (file: string) => void;
  scrollToSection: (id: string) => void;
  isMobileMenu?: boolean;
  files: FileItem[];
  breadcrumbPath: string[];
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ activeFile, setActiveFile, scrollToSection, isMobileMenu, files, breadcrumbPath }) => {
  const [openDropdowns, setOpenDropdowns] = useState<Set<string>>(new Set());

  const toggleDropdown = (id: string) => {
    setOpenDropdowns((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const renderFileItem = (file: FileItem, isChild: boolean = false) => (
    <React.Fragment key={file.id}>
      <span
        className={`${styles.fileItem} ${breadcrumbPath.includes(file.id) ? styles.active : ''} ${isChild ? styles.childItem : ''}`}
        onClick={() => {
          setActiveFile(file.id);
          scrollToSection(file.id);
        }}
      >
        {file.children && (
          <span
            className={`${styles.dropdownIcon} ${openDropdowns.has(file.id) ? styles.open : ''}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent div click
              toggleDropdown(file.id);
            }}
          >
            › {/* Chevron-like icon */} 
          </span>
        )}
        <span>{file.displayName}</span>
      </span>
      {file.children && openDropdowns.has(file.id) && (
        <div className={styles.nestedFileList}>
          {file.children.map((child) => renderFileItem(child, true))}
        </div>
      )}
    </React.Fragment>
  );

  const displayedFiles = isMobileMenu ? files : files.filter(file => file.id !== 'greeting-section');

  return (
    <div className={`${styles.sidebar} ${isMobileMenu ? styles.mobileSidebar : ''}`}>
      {!isMobileMenu && <div className={styles.header}>EXPLORER</div>}
      <div className={styles.fileList}> {/* Changed to div */} 
        {displayedFiles.map((file) => renderFileItem(file))}
      </div>
    </div>
  );
};

export default LeftSidebar;