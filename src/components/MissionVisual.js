import systemsAstronaut from '../assets/img/mission-cutouts/systems-astronaut.png';
import projectsAstronaut from '../assets/img/mission-cutouts/projects-astronaut.png';
import signalsAstronaut from '../assets/img/mission-cutouts/signals-astronaut.png';
import contactAstronaut from '../assets/img/mission-cutouts/contact-astronaut.png';

const missionVisuals = {
  systems: systemsAstronaut,
  projects: projectsAstronaut,
  signals: signalsAstronaut,
  contact: contactAstronaut,
};

export const MissionVisual = ({ variant, className = '', alt = '' }) => {
  const src = missionVisuals[variant];

  if (!src) {
    return null;
  }

  return (
    <div className={`mission-visual mission-visual--${variant} ${className}`.trim()} aria-hidden={alt ? undefined : true}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};
