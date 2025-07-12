import { Col } from "react-bootstrap";
import { useState, useEffect } from 'react';

export const ProjectCard = ({ title, description, imgUrl, href, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    // Trigger animation when component comes into view
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsInView(true);
      }, 100 + (index % 5) * 100); // Staggered animation
      
      return () => clearTimeout(timer);
    }
  }, [isVisible, index]);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  return (
    <Col xs={12} sm={6} lg={4} className="mb-4">
      <div 
        className={`project-card ${isInView ? 'visible' : ''} ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a 
          href={href} 
          target="_blank" 
          rel="noopener noreferrer"
          className="project-link"
          aria-label={`View ${title} project`}
        >
          <div className="project-image-container">
            <div className="image-overlay"></div>
            <img 
              src={imgUrl} 
              alt={title} 
              className={`project-image ${isImageLoaded ? 'loaded' : 'loading'}`}
              loading="lazy"
              onLoad={handleImageLoad}
            />
            {!isImageLoaded && (
              <div className="image-placeholder">
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="project-content">
            <div className="project-badge">
              <i className="fas fa-external-link-alt"></i>
            </div>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-footer">
              <span className="project-link-text">View Project</span>
              <i className="fas fa-arrow-right project-arrow"></i>
            </div>
          </div>
        </a>
      </div>
    </Col>
  );
};
