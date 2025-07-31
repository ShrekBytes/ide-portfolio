import './style.css'
import { portfolioData } from './data/portfolio.js'

class PortfolioApp {
  constructor() {
    this.currentSection = 'about';
    this.portfolioData = portfolioData;
    this.init();
  }

  init() {
    this.setupNavigation();
    this.loadPersonalInfo();
    this.loadAllContent();
    this.setupScrollNavigation();
    // Set initial active section
    this.updateActiveSection('about');
  }

  setupNavigation() {
    // File explorer navigation
    const fileItems = document.querySelectorAll('.file');
    fileItems.forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const section = item.dataset.section;
        this.scrollToSection(section);
        // Close mobile menu after navigation
        this.closeMobileMenu();
      });
    });

    // Mobile menu toggle
    this.setupMobileMenu();
  }

  setupMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebarLeft = document.querySelector('.sidebar-left');
    const mobileOverlay = document.getElementById('mobile-overlay');

    if (mobileMenuToggle && sidebarLeft && mobileOverlay) {
      // Toggle menu on burger click
      mobileMenuToggle.addEventListener('click', () => {
        this.toggleMobileMenu();
      });

      // Close menu on overlay click
      mobileOverlay.addEventListener('click', () => {
        this.closeMobileMenu();
      });

      // Close menu on escape key
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.closeMobileMenu();
        }
      });
    }
  }

  toggleMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebarLeft = document.querySelector('.sidebar-left');
    const mobileOverlay = document.getElementById('mobile-overlay');

    mobileMenuToggle.classList.toggle('active');
    sidebarLeft.classList.toggle('active');
    mobileOverlay.classList.toggle('active');
    
    // Prevent body scroll when menu is open
    if (sidebarLeft.classList.contains('active')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  closeMobileMenu() {
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const sidebarLeft = document.querySelector('.sidebar-left');
    const mobileOverlay = document.getElementById('mobile-overlay');

    if (mobileMenuToggle && sidebarLeft && mobileOverlay) {
      mobileMenuToggle.classList.remove('active');
      sidebarLeft.classList.remove('active');
      mobileOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  scrollToSection(section) {
    const targetElement = document.getElementById(`section-${section}`);
    const isMobile = window.innerWidth <= 768;
    
    if (targetElement) {
      if (isMobile) {
        // On mobile, scroll the window to the target element
        const targetOffset = targetElement.offsetTop - 84; // Account for fixed title bar + breadcrumbs
        window.scrollTo({
          top: targetOffset,
          behavior: 'smooth'
        });
      } else {
        // On desktop, scroll within the editor-content
        const editorContent = document.querySelector('.editor-content');
        if (editorContent) {
          const targetOffset = targetElement.offsetTop - editorContent.offsetTop;
          editorContent.scrollTo({
            top: targetOffset,
            behavior: 'smooth'
          });
        }
      }
      
      // Update active states
      this.updateActiveSection(section);
    }
  }

  updateActiveSection(section) {
    // Update active file in sidebar
    document.querySelectorAll('.file').forEach(file => {
      file.classList.remove('active');
    });
    const targetFile = document.querySelector(`[data-section="${section}"]`);
    if (targetFile) {
      targetFile.classList.add('active');
    }
    
    // Update breadcrumbs
    this.updateBreadcrumbs(section);
    this.currentSection = section;
  }



  updateBreadcrumbs(section) {
    const currentSection = document.getElementById('current-section');
    const sectionConfig = {
      'about': 'about.md',
      'experience': 'experience.json',
      'skills': 'skills.js',
      'projects': 'projects.tsx',
      'contact': 'contact.html'
    };
    currentSection.textContent = sectionConfig[section];
  }

  loadPersonalInfo() {
    const { personal } = this.portfolioData;
    
    // Update profile image
    const profileImg = document.getElementById('profile-img');
    profileImg.src = personal.profileImage;
    profileImg.alt = personal.name;

    // Update name and title
    document.querySelector('.name').textContent = personal.name;
    document.querySelector('.title').textContent = personal.title;

    // Update bio
    document.querySelector('.bio p').textContent = personal.bio;

    // Update social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks[0].href = personal.social.github;
    socialLinks[0].textContent = 'GitHub';
    socialLinks[1].href = personal.social.linkedin;
    socialLinks[1].textContent = 'LinkedIn';
    socialLinks[2].href = personal.social.twitter;
    socialLinks[2].textContent = 'Twitter';

    // Status bar links are now hardcoded in HTML
    // No need to update them dynamically
  }

  loadAllContent() {
    const contentArea = document.getElementById('content-area');
    
    contentArea.innerHTML = `
      <div id="section-about" class="content-section">
        ${this.renderAbout()}
      </div>
      
      <div id="section-experience" class="content-section">
        ${this.renderExperience()}
      </div>
      
      <div id="section-skills" class="content-section">
        ${this.renderSkills()}
      </div>
      
      <div id="section-projects" class="content-section">
        ${this.renderProjects()}
      </div>
      
      <div id="section-contact" class="content-section">
        ${this.renderContact()}
      </div>
    `;
    
    // Setup contact form after content is loaded
    this.setupContactForm();
    
    // Scroll to top after loading content
    setTimeout(() => {
      const editorContent = document.querySelector('.editor-content');
      if (editorContent) {
        editorContent.scrollTop = 0;
      }
    }, 50);
  }

  setupScrollNavigation() {
    // Wait for content to be loaded before setting up intersection observer
    setTimeout(() => {
      const sections = document.querySelectorAll('[id^="section-"]');
      
      // Use different root for mobile vs desktop
      const isMobile = window.innerWidth <= 768;
      const root = isMobile ? null : document.querySelector('.editor-content');
      
      const options = {
        root: root,
        rootMargin: '-20% 0px -20% 0px',
        threshold: [0, 0.1, 0.25, 0.5, 0.75, 1]
      };

      const observer = new IntersectionObserver((entries) => {
        // Find all intersecting entries
        const intersectingEntries = entries.filter(entry => entry.isIntersecting);
        
        if (intersectingEntries.length > 0) {
          // Find the entry with the highest intersection ratio
          let mostVisible = intersectingEntries.reduce((prev, current) => {
            return (current.intersectionRatio > prev.intersectionRatio) ? current : prev;
          });

          if (mostVisible.intersectionRatio > 0.1) {
            const sectionId = mostVisible.target.id.replace('section-', '');
            this.updateActiveSection(sectionId);
          }
        }
      }, options);

      sections.forEach(section => {
        observer.observe(section);
      });
      
      // Handle resize events to reinitialize observer if needed
      let resizeTimeout;
      window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          const newIsMobile = window.innerWidth <= 768;
          if (newIsMobile !== isMobile) {
            // Disconnect old observer
            observer.disconnect();
            // Reinitialize with new settings
            this.setupScrollNavigation();
          }
        }, 250);
      });
    }, 200);
  }

  renderAbout() {
    const { about } = this.portfolioData;
    return this.markdownToHtml(about.content);
  }

  renderExperience() {
    const { experience } = this.portfolioData;
    const experienceHtml = experience.map(exp => `
      <div class="experience-item">
        <div class="experience-header">
  <div>
            <div class="experience-title">${exp.title}</div>
            <div class="experience-company">${exp.company}</div>
          </div>
          <div class="experience-duration">${exp.duration}</div>
        </div>
        <div class="experience-description">
          <p>${exp.description}</p>
          <div class="skill-list" style="margin-top: 12px;">
            ${exp.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    return `
      <h1>Work Experience</h1>
      <p>Here's my professional journey and the roles that have shaped my career:</p>
      ${experienceHtml}
    `;
  }

  renderSkills() {
    const { skills } = this.portfolioData;
    const skillsHtml = Object.entries(skills).map(([category, skillList]) => `
      <div class="skill-category">
        <h4>${category}</h4>
        <div class="skill-list">
          ${skillList.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
        </div>
      </div>
    `).join('');

    return `
      <h1>Skills & Technologies</h1>
      <p>Here are the technologies and tools I work with:</p>
      <div class="skills-grid">
        ${skillsHtml}
      </div>
    `;
  }

  renderProjects() {
    const { projects } = this.portfolioData;
    const projectsHtml = projects.map(project => `
      <div class="project-card">
        <div class="project-title">${project.title}</div>
        <div class="project-description">${project.description}</div>
        <div class="skill-list" style="margin-bottom: 16px;">
          ${project.technologies.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
        </div>
        <div class="project-links">
          ${project.github ? `<a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>` : ''}
          ${project.demo ? `<a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>` : ''}
        </div>
      </div>
    `).join('');

    return `
      <h1>Projects</h1>
      <p>Here are some of the projects I've worked on:</p>
      <div class="project-grid">
        ${projectsHtml}
      </div>
    `;
  }

  renderContact() {
    const { contact, personal } = this.portfolioData;
    return `
      ${this.markdownToHtml(contact.content)}
      
      <div style="margin-top: 32px;">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> <a href="mailto:${personal.email}">${personal.email}</a></p>
        <p><strong>Phone:</strong> <a href="tel:${personal.phone}">${personal.phone}</a></p>
        <p><strong>Location:</strong> ${personal.location}</p>
      </div>

      <div style="margin-top: 32px;">
        <h2>Send a Message</h2>
        <form class="contact-form" id="contact-form">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="subject">Subject</label>
            <input type="text" id="subject" name="subject" required>
          </div>
          <div class="form-group">
            <label for="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
    </div>
          <button type="submit" class="submit-btn">Send Message</button>
        </form>
  </div>
    `;
  }

  setupContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        this.handleContactSubmit(form);
      });
    }
  }

  handleContactSubmit(form) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a backend service
    // For this demo, we'll just show an alert
    alert('Thank you for your message! This is a demo form - in a real implementation, this would send an email.');
    
    // Reset form
    form.reset();
  }

  markdownToHtml(markdown) {
    // Simple markdown parser for basic formatting
    return markdown
      .replace(/^# (.*$)/gm, '<h1>$1</h1>')
      .replace(/^## (.*$)/gm, '<h2>$1</h2>')
      .replace(/^### (.*$)/gm, '<h3>$1</h3>')
      .replace(/^\*\*(.*)\*\*/gm, '<strong>$1</strong>')
      .replace(/^\*(.*)\*/gm, '<em>$1</em>')
      .replace(/^\- (.*$)/gm, '<li>$1</li>')
      .replace(/(<li>.*<\/li>)/gs, '<ul>$1</ul>')
      .replace(/\n\n/g, '</p><p>')
      .replace(/^(?!<[h|u|l])/gm, '<p>')
      .replace(/(?<![>])$/gm, '</p>')
      .replace(/<p><\/p>/g, '')
      .replace(/<p>(<[h|u])/g, '$1')
      .replace(/(<\/[h|u].*>)<\/p>/g, '$1');
  }
}

// Initialize the portfolio app when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new PortfolioApp();
});

// Handle responsive navigation for mobile
function setupMobileNavigation() {
  // Add mobile menu toggle if needed
  // This could be expanded for mobile-specific navigation
}

// Initialize mobile navigation
setupMobileNavigation();