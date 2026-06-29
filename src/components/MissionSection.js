export const MissionSection = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`mission-section ${className}`.trim()} data-chapter={id}>
      {children}
    </section>
  );
};
