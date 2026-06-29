import { Container } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import 'animate.css';
import '../css/Projects.css'
import { projects, projects1 } from "./Service";
import { useMemo, useState, useEffect } from 'react';
import { MissionSection } from "./MissionSection";
import { MissionVisual } from "./MissionVisual";

const priorityTitles = [
  'APS Security Dashboard',
  'INCOIS Marine Fisheries Platform',
  'Portfolio Management Dashboard',
  'WAR JETS - P2P Multiplayer',
  'Nike Clone Vue',
  'Windows 11 Web Experience',
];

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const allProjects = useMemo(() => {
    const merged = [...projects1, ...projects];
    return merged.sort((a, b) => {
      const aIndex = priorityTitles.indexOf(a.title);
      const bIndex = priorityTitles.indexOf(b.title);
      return (aIndex === -1 ? 99 : aIndex) - (bIndex === -1 ? 99 : bIndex);
    });
  }, []);

  const visibleProjects = [...allProjects, ...allProjects].slice(activeIndex, activeIndex + 3);

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + allProjects.length) % allProjects.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % allProjects.length);
  };

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const rect = element.getBoundingClientRect();
        setIsVisible(rect.top < window.innerHeight * 0.8);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <MissionSection id="projects" className="project">
      <Container fluid className="project-mission-container">
        <div className="project-mission-layout">
          <div className={`project-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
            <MissionVisual variant="projects" className="project-section-visual" alt="Astronaut launching glowing project modules in orbit" />
            <h2>Projects That Ship Impact</h2>
            <p>From dashboards to immersive browser experiences, here are missions I have launched.</p>
            <a className="mission-btn mission-btn--ghost" href="#testimonials">Open Comm Channel</a>
          </div>
          <div className="project-carousel" aria-label="Featured projects">
            <button className="project-nav project-nav--prev" onClick={goPrev} aria-label="Previous project">{'<'}</button>
            <div className="project-carousel__track">
              {visibleProjects.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${activeIndex}-${index}`}
                  {...project}
                />
              ))}
            </div>
            <button className="project-nav project-nav--next" onClick={goNext} aria-label="Next project">{'>'}</button>
            <div className="project-dots" aria-hidden="true">
              {allProjects.slice(0, Math.min(allProjects.length, 6)).map((project, index) => (
                <span key={project.title} className={index === activeIndex % 6 ? 'is-active' : ''} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </MissionSection>
  )
}
