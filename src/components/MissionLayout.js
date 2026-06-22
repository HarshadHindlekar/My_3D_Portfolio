import { useEffect, useState } from 'react';
import { missionChapters } from './MissionData';
import { MissionBackground } from './MissionBackground';
import { MissionRail } from './MissionRail';

export const MissionLayout = ({ children }) => {
  const [activeChapter, setActiveChapter] = useState(missionChapters[0].id);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const getHeaderOffset = () => {
      const nav = document.querySelector('.portfolio-navbar');
      return (nav?.getBoundingClientRect().height || 0) + 24;
    };

    const scrollToHash = (hash, behavior = 'smooth') => {
      const id = hash.replace('#', '');
      if (!id) return false;

      const target = document.getElementById(id);
      if (!target) return false;

      const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
      window.scrollTo({
        top: Math.max(0, top),
        behavior,
      });
      setActiveChapter(id);
      return true;
    };

    const handleAnchorClick = (event) => {
      const anchor = event.target.closest('a[href^="#"]');
      if (!anchor) return;

      const hash = anchor.getAttribute('href');
      if (!hash || hash === '#') return;

      const targetExists = document.getElementById(hash.replace('#', ''));
      if (!targetExists) return;

      event.preventDefault();
      window.history.pushState(null, '', hash);
      scrollToHash(hash);
    };

    const scheduleHashScroll = (hash, behavior = 'smooth') => {
      [0, 180, 520, 1000].forEach((delay) => {
        window.setTimeout(() => scrollToHash(hash, behavior), delay);
      });
    };

    const handleHashChange = () => {
      scheduleHashScroll(window.location.hash);
    };

    document.addEventListener('click', handleAnchorClick);
    window.addEventListener('hashchange', handleHashChange);

    if (window.location.hash) {
      window.history.scrollRestoration = 'manual';
      scheduleHashScroll(window.location.hash, 'auto');
    }

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

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
