import missionVisuals from '../assets/img/mission-section-visuals.png';

export const MissionVisual = ({ variant, className = '', alt = '' }) => {
  return (
    <div className={`mission-visual mission-visual--${variant} ${className}`.trim()} aria-hidden={alt ? undefined : true}>
      <img src={missionVisuals} alt={alt} loading="lazy" />
    </div>
  );
};
