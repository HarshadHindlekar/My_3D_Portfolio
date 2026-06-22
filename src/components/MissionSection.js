export const MissionSection = ({ id, number, label, eyebrow, children, className = '' }) => {
  return (
    <section id={id} className={`mission-section ${className}`.trim()} data-chapter={id}>
      <div className="mission-section__meta" aria-hidden="true">
        <span>{number}</span>
        <strong>{label}</strong>
      </div>
      {eyebrow ? (
        <p className="mission-section__eyebrow">
          <span>{number}</span>
          {eyebrow}
        </p>
      ) : null}
      {children}
    </section>
  );
};
