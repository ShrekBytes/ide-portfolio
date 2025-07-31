import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import './styles/global.css';
import LeftSidebar from './components/LeftSidebar';
import MainContent from './components/MainContent';
import RightSidebar from './components/RightSidebar';
import TitleBar from './components/TitleBar';
import StatusBar from './components/StatusBar';
import Breadcrumbs from './components/Breadcrumbs';
import MobileMenu from './components/MobileMenu';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [activeFile, setActiveFile] = useState(isMobile ? 'greeting-section' : 'about-me');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mainContentRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const programmaticScrollRef = useRef(false);

  const files = useMemo(() => [
    { id: 'greeting-section', displayName: 'Welcome' },
    { id: 'about-me', displayName: 'About Me' },
    {
      id: 'experience',
      displayName: 'Experience',
      children: [
        { id: 'experience-senior-software-engineer', displayName: 'Senior Software Engineer' },
        { id: 'experience-full-stack-developer', displayName: 'Full Stack Developer' },
        { id: 'experience-software-development-intern', displayName: 'Software Development Intern' },
      ],
    },
    {
      id: 'projects',
      displayName: 'Projects',
      children: [
        { id: 'project-ecommerce-platform', displayName: 'E-commerce Platform' },
        { id: 'project-real-time-chat-application', displayName: 'Real-time Chat Application' },
        { id: 'project-portfolio-website', displayName: 'Portfolio Website' },
      ],
    },
    { id: 'skills', displayName: 'Skills' },
    { id: 'contact', displayName: 'Contact' },
  ], []);

  const parentMap = useMemo(() => {
    const map: { [key: string]: string } = {};
    const buildMap = (items, parentId) => {
      for (const item of items) {
        if (parentId) {
          map[item.id] = parentId;
        }
        if (item.children) {
          buildMap(item.children, item.id);
        }
      }
    };
    buildMap(files);
    return map;
  }, [files]);

  const breadcrumbPath = useMemo(() => {
    const path: string[] = [];
    let currentId: string | undefined = activeFile;
    while (currentId) {
      path.push(currentId);
      currentId = parentMap[currentId];
    }
    return path.reverse();
  }, [activeFile, parentMap]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      programmaticScrollRef.current = true;
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
      setTimeout(() => {
        programmaticScrollRef.current = false;
      }, 1000); // Should be longer than the smooth scroll duration
    }
  };

  const handleScroll = useCallback(() => {
    if (programmaticScrollRef.current) return;

    const sections = isMobile ? 
      ['greeting-section', 'about-me', 'experience', 'experience-senior-software-engineer', 'experience-full-stack-developer', 'experience-software-development-intern', 'skills', 'projects', 'project-ecommerce-platform', 'project-real-time-chat-application', 'project-portfolio-website', 'contact'] : 
      ['about-me', 'experience', 'experience-senior-software-engineer', 'experience-full-stack-developer', 'experience-software-development-intern', 'skills', 'projects', 'project-ecommerce-platform', 'project-real-time-chat-application', 'project-portfolio-website', 'contact'];

    const scrollPosition = mainContentRef.current.scrollTop;
    const sectionOffsets = sections.map(id => {
      const el = document.getElementById(id);
      return el ? el.offsetTop : 0;
    });

    for (let i = sectionOffsets.length - 1; i >= 0; i--) {
      if (scrollPosition >= sectionOffsets[i] - 100) {
        setActiveFile(sections[i]);
        break;
      }
    }
  }, [isMobile]);

  useEffect(() => {
    const mainContent = mainContentRef.current;
    mainContent.addEventListener('scroll', handleScroll);

    // Scroll to the top on initial load
    if (mainContent) {
      mainContent.scrollTo({ top: 0, behavior: 'instant' });
    }

    return () => {
      mainContent.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="app">
      <TitleBar onBurgerClick={() => setIsMobileMenuOpen(true)} />
      <div className="main-container">
        {!isMobile && (
          <LeftSidebar activeFile={activeFile} setActiveFile={setActiveFile} scrollToSection={scrollToSection} files={files} breadcrumbPath={breadcrumbPath} />
        )}
        <div className="content-container">
          <Breadcrumbs activeFile={activeFile} breadcrumbPath={breadcrumbPath} files={files} />
          <MainContent ref={mainContentRef} isMobile={isMobile} />
        </div>
        {!isMobile && <RightSidebar />}
      </div>
      <StatusBar />
      <MobileMenu
        ref={mobileMenuRef}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        activeFile={activeFile}
        setActiveFile={setActiveFile}
        scrollToSection={scrollToSection}
        files={files}
        breadcrumbPath={breadcrumbPath}
      />
    </div>
  );
}

export default App;