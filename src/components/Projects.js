import { Container, Row, Col, Tab, Nav, Badge } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import '../css/Projects.css'
import TrackVisibility from 'react-on-screen';
import { projects, projects1 } from "./Service";
import { useState, useEffect } from 'react';

export const Projects = () => {
  const [activeTab, setActiveTab] = useState('first');
  const [isVisible, setIsVisible] = useState(false);

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
      <Container>
        <Row>
          <Col size={12}>
            <div className={`project-header ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
              <h2 className={isVisible ? 'tracking-in-contract-bck-top' : ''}>
                My <span className="highlight">Projects</span>
              </h2>
              <p className="section-subtitle">Here are some of my featured projects. Click to explore more details!</p>
              
              <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={(k) => setActiveTab(k)}>
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first" className={activeTab === 'first' ? 'active' : ''}>
                      <i className="fas fa-laptop-code me-2"></i>Web Apps
                      <Badge bg="primary" className="ms-2">{projects1.length}</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second" className={activeTab === 'second' ? 'active' : ''}>
                      <i className="fas fa-mobile-alt me-2"></i>UI/UX
                      <Badge bg="primary" className="ms-2">{projects.length}</Badge>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third" className={activeTab === 'third' ? 'active' : ''}>
                      <i className="fas fa-ellipsis-h me-2"></i>More
                      <Badge bg="secondary" className="ms-2">Coming Soon</Badge>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__fadeInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row className="g-4">
                      {projects1.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                          index={index}
                          isVisible={isVisible}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row className="g-4">
                      {projects.map((project, index) => (
                        <ProjectCard
                          key={index}
                          {...project}
                          index={index + projects1.length}
                          isVisible={isVisible}
                        />
                      ))}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <div className="coming-soon-container">
                      <div className="coming-soon-content">
                        <i className="fas fa-rocket fa-3x mb-3"></i>
                        <h3>More Awesome Projects Coming Soon!</h3>
                        <p>I'm constantly working on new projects. Stay tuned for updates!</p>
                        <div className="spinner-border text-primary mt-3" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
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
