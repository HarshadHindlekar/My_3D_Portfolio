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
                  <h2 className={isVisible ? 'tracking-in-contract-bck' : ''}>
                    Technical Proficiencies
                    <div className="gradient-underline"></div>
                  </h2>
                  <p className="skills-intro">
                    I've honed my skills across various technologies to build robust and scalable applications. 
                    Explore the interactive 3D tech stack below to see the tools and technologies I work with.
                  </p>
                  
                  <div className="tech-showcase">
                    <Tech />
                  </div>
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="colorSharp" />
    </section>
  )
}
