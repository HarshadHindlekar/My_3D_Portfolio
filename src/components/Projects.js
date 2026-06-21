import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../css/Projects.css'
import { projects, projects1 } from "./Service";
import { useState, useEffect } from 'react';

export const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const allProjects = [...projects1, ...projects];

  const renderProjectSlider = (projectList) => {
    return (
      <div className="project-slider" aria-label="Auto scrolling project carousel">
        <div className="project-slider-track">
          {[0, 1].map((groupIndex) => (
            <div
              className="project-slider-group"
              aria-hidden={groupIndex === 1}
              key={`project-slider-group-${groupIndex}`}
            >
              {projectList.map((project, index) => (
                <ProjectCard
                  key={`${project.title}-${groupIndex}-${index}`}
                  {...project}
                  index={index}
                  isVisible={isVisible}
                  variant="slider"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  };

  useEffect(() => {
    // Add scroll animation trigger
    const handleScroll = () => {
      const element = document.getElementById('projects');
      if (element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        setIsVisible(isVisible);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className={`project ${isVisible ? 'visible' : ''}`} id="projects">
      <div className="project-orbit-line" aria-hidden="true"></div>
      <Container>
        <Row>
          <Col size={12}>
            <div className={`project-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
              <h2 className={isVisible ? 'tracking-in-contract-bck-top' : ''}>
                My <span className="highlight">Projects</span>
              </h2>
              <p className="section-subtitle">Here are some of my featured projects. Click to explore more details!</p>
              <div id="slideInUp" className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                {renderProjectSlider(allProjects)}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="background-shapes">
        <div className="shape-1"></div>
        <div className="shape-2"></div>
      </div>
      <img className="background-image-right" src={colorSharp2} alt='background' loading="lazy" />
    </section>
  )
}
