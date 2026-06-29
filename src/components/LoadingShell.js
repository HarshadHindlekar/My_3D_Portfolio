export const SectionLoader = ({ section = 'default', label = 'Preparing mission systems' }) => {
  const bars = Array.from({ length: 3 }, (_, index) => index);

  return (
    <div
      className={`mission-section-loader mission-section-loader--${section}`}
      role="status"
      aria-live="polite"
    >
      <div className="mission-section-loader__radar" aria-hidden="true">
        <span />
        <span />
      </div>
      <div className="mission-section-loader__content">
        <span className="mission-section-loader__eyebrow">Stand by</span>
        <strong>{label}</strong>
        <div className="mission-section-loader__bars" aria-hidden="true">
          {bars.map((bar) => (
            <span key={bar} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const EarthLoader = () => (
  <div className="earth-loader" role="status" aria-live="polite">
    <div className="earth-loader__planet" aria-hidden="true">
      <span />
    </div>
    <strong>Loading orbital view</strong>
  </div>
);

export const StarfieldLoader = () => (
  <div className="starfield-loader" aria-hidden="true">
    <span />
    <span />
    <span />
  </div>
);
