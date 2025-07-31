import React, { useMemo } from 'react';
import styles from './Breadcrumbs.module.css';

interface BreadcrumbsProps {
  activeFile: string;
  breadcrumbPath: string[];
  files: any[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbPath, files }) => {
  const fileMap = useMemo(() => {
    const map = new Map<string, any>();
    const buildMap = (items: any[]) => {
      for (const item of items) {
        map.set(item.id, item);
        if (item.children) {
          buildMap(item.children);
        }
      }
    };
    buildMap(files);
    return map;
  }, [files]);

  return (
    <div className={styles.breadcrumbs}>
      {breadcrumbPath.map((id, index) => {
        const file = fileMap.get(id);
        if (!file) return null;
        return (
          <React.Fragment key={id}>
            <span>{file.displayName}</span>
            {index < breadcrumbPath.length - 1 && <span>&gt;</span>}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default Breadcrumbs;
