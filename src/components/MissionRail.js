export const MissionRail = ({ chapters, activeChapter, scrollProgress }) => {
  return (
    <>
      <aside className="mission-rail" aria-label="Mission story navigation">
        <div className="mission-rail__title">Mission Story</div>
        <div className="mission-rail__track">
          <span className="mission-rail__progress" style={{ height: `${scrollProgress}%` }} />
          {chapters.map((chapter) => {
            const isActive = chapter.id === activeChapter;

            return (
              <a
                key={chapter.id}
                href={`#${chapter.id}`}
                className={`mission-rail__item ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'step' : undefined}
              >
                <span className="mission-rail__dot" />
                <span className="mission-rail__number">{chapter.number}</span>
                <span className="mission-rail__label">{chapter.label}</span>
              </a>
            );
          })}
        </div>
        <div className="mission-rail__footer">Follow the Mission</div>
      </aside>
      <div className="mission-mobile-progress" aria-hidden="true">
        <span style={{ width: `${scrollProgress}%` }} />
      </div>
    </>
  );
};
