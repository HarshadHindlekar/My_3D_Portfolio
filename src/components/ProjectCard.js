import { useRef, useState } from 'react';

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  const cardRef = useRef(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const handlePointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;

    event.currentTarget.style.setProperty('--card-rotate-x', `${y * -8}deg`);
    event.currentTarget.style.setProperty('--card-rotate-y', `${x * 10}deg`);
  };

  const handlePointerLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.removeProperty('--card-rotate-x');
    cardRef.current.style.removeProperty('--card-rotate-y');
  };

  const contextLabel = title.includes('Dashboard')
    ? 'Analytics'
    : title.includes('Platform')
      ? 'Platform'
      : title.includes('WAR JETS')
        ? 'Multiplayer'
        : 'Web Experience';

  return (
    <div className="project-mission-slide">
      <div 
        ref={cardRef}
        className="project-card"
        onMouseMove={handlePointerMove}
        onMouseLeave={handlePointerLeave}
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
              className="project-image"
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
            <span className="project-context">{contextLabel}</span>
            <h3 className="project-title">{title}</h3>
            <p className="project-description">{description}</p>
            <div className="project-footer">
              <span className="project-link-text">View Project</span>
              <i className="fas fa-arrow-right project-arrow"></i>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
