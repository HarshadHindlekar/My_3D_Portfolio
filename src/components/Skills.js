import Tech from "./Skills-comps/Tech";
import '../css/Skills.css';
import TrackVisibility from "react-on-screen";
import { MissionSection } from "./MissionSection";
import { MissionVisual } from "./MissionVisual";

export const Skills = () => {
  return (
    <MissionSection id="skills" number="02" label="Systems" eyebrow="Systems" className="skill">
      <TrackVisibility partialVisibility>
        {({ isVisible }) =>
          <div className="mission-chapter-grid mission-chapter-grid--systems">
            <div className={`systems-copy ${isVisible ? 'is-visible' : ''}`}>
              <h2>Engineering the Core Systems</h2>
              <p>
                The tools and technologies that power my mission control: frontend interfaces,
                backend services, cloud deployment, and data systems.
              </p>
              <a className="mission-btn mission-btn--ghost" href="#projects">View Launchpad</a>
            </div>
            <div className={`systems-map ${isVisible ? 'is-visible' : ''}`}>
              <MissionVisual variant="systems" className="systems-visual" alt="Astronaut operating a mission-control engineering console" />
              <Tech />
            </div>
          </div>}
      </TrackVisibility>
    </MissionSection>
  )
}
