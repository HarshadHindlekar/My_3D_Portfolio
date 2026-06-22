import { useEffect, useState } from 'react';
import { missionChapters } from './MissionData';
import { MissionBackground } from './MissionBackground';
import { MissionRail } from './MissionRail';

export const MissionLayout = ({ children }) => {
  const [activeChapter, setActiveChapter] = useState(missionChapters[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const sections = missionChapters
      .map((chapter) => document.getElementById(chapter.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveChapter(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.12, 0.3, 0.55],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateProgress = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const nextProgress = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, nextProgress)));
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);

    return () => {
      window.removeEventListener('scroll', updateProgress);
      window.removeEventListener('resize', updateProgress);
    };
  }, []);

  return (
    <div className="mission-layout">
      <MissionBackground />
      <MissionRail
        chapters={missionChapters}
        activeChapter={activeChapter}
        scrollProgress={scrollProgress}
      />
      <main className="mission-main">{children}</main>
    </div>
  );
};
