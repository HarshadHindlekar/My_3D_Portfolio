import colorSharp from "../assets/img/color-sharp.png"
import Tech from "./Skills-comps/Tech";
import '../css/Skills.css';
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <TrackVisibility partialVisibility>
              {({ isVisible }) =>
                <div className="skill-bx wow zoomIn">
                  <h2 className={isVisible ? 'tracking-in-contract-bck' : ''}>Skills</h2>
                  <p>Here are some meteorite(SKILLS) samples I collected.</p>
                  <Tech />
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  )
}
