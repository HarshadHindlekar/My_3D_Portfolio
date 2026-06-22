import { useEffect, useRef } from 'react';
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

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const motionPresets = {
  systems: { x: -64, y: 72, rotate: -5, scale: 0.08 },
  projects: { x: 72, y: -46, rotate: 7, scale: 0.06 },
  signals: { x: -42, y: -58, rotate: -4, scale: 0.05 },
  contact: { x: 36, y: -34, rotate: 3, scale: 0.04 },
};

export const MissionVisual = ({ variant, className = '', alt = '' }) => {
  const visualRef = useRef(null);
  const src = missionVisuals[variant];

  useEffect(() => {
    const visual = visualRef.current;
    if (!visual || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    const preset = motionPresets[variant] || motionPresets.systems;
    let frame = 0;

    const updateMotion = () => {
      frame = 0;
      const section = visual.closest('.mission-section') || visual;
      const rect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = clamp((viewportHeight - rect.top) / (viewportHeight + rect.height), 0, 1);
      const centered = progress - 0.5;
      const presence = clamp(1 - Math.abs(centered) * 1.45, 0.28, 1);

      visual.style.setProperty('--mission-visual-x', `${centered * preset.x}px`);
      visual.style.setProperty('--mission-visual-y', `${centered * preset.y}px`);
      visual.style.setProperty('--mission-visual-rotate', `${centered * preset.rotate}deg`);
      visual.style.setProperty('--mission-visual-scale', `${1 + centered * preset.scale}`);
      visual.style.setProperty('--mission-visual-opacity', `${presence}`);
    };

    const requestMotion = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateMotion);
      }
    };

    updateMotion();
    window.addEventListener('scroll', requestMotion, { passive: true });
    window.addEventListener('resize', requestMotion);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestMotion);
      window.removeEventListener('resize', requestMotion);
    };
  }, [variant]);

  if (!src) {
    return null;
  }

  return (
    <div ref={visualRef} className={`mission-visual mission-visual--${variant} ${className}`.trim()} aria-hidden={alt ? undefined : true}>
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};
