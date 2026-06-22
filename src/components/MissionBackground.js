import StarsCanvas from './Banner-Comps/Stars';

export const MissionBackground = () => {
  return (
    <div className="mission-background" aria-hidden="true">
      <StarsCanvas />
      <div className="mission-background__grid" />
      <div className="mission-background__orbit mission-background__orbit--one" />
      <div className="mission-background__orbit mission-background__orbit--two" />
      <div className="mission-background__planet-glow" />
    </div>
  );
};
