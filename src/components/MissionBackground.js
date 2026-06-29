import { lazy, Suspense } from 'react';
import { StarfieldLoader } from './LoadingShell';

const StarsCanvas = lazy(() => import('./Banner-Comps/Stars'));

export const MissionBackground = () => {
  return (
    <div className="mission-background" aria-hidden="true">
      <Suspense fallback={<StarfieldLoader />}>
        <StarsCanvas />
      </Suspense>
      <div className="mission-background__grid" />
      <div className="mission-background__asteroids">
        {Array.from({ length: 9 }, (_, index) => (
          <span key={index} />
        ))}
      </div>
      <div className="mission-background__orbit mission-background__orbit--one" />
      <div className="mission-background__orbit mission-background__orbit--two" />
      <div className="mission-background__planet-glow" />
    </div>
  );
};
