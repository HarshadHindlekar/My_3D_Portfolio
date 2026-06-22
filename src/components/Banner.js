import { useRef, useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/me.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import '../css/Banner.css';
import '../css/Contact.css';
import { isMobile } from 'react-device-detect';
import { MissionSection } from './MissionSection';
import { missionStats } from './MissionData';

export const Banner = () => {
  const bannerRef = useRef(null);
  const visualRef = useRef(null);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Software Engineer", "Frontend Specialist", "Full Stack Developer"];
  const period = 2000;

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  useEffect(() => {
    const banner = bannerRef.current;
    const visual = visualRef.current;
    if (!banner || !visual) return undefined;
    let frame = 0;

    const handlePointerMove = (event) => {
      const rect = banner.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      banner.style.setProperty('--pointer-x', `${x * 26}px`);
      banner.style.setProperty('--pointer-y', `${y * 20}px`);
      visual.style.setProperty('--visual-rotate-x', `${y * -7}deg`);
      visual.style.setProperty('--visual-rotate-y', `${x * 9}deg`);
    };

    const resetPointer = () => {
      banner.style.setProperty('--pointer-x', '0px');
      banner.style.setProperty('--pointer-y', '0px');
      visual.style.setProperty('--visual-rotate-x', '0deg');
      visual.style.setProperty('--visual-rotate-y', '0deg');
    };

    const updateScrollMotion = () => {
      frame = 0;
      const rect = banner.getBoundingClientRect();
      const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
      const progress = Math.min(1, Math.max(0, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      const travel = progress - 0.2;

      visual.style.setProperty('--hero-scroll-x', `${travel * -58}px`);
      visual.style.setProperty('--hero-scroll-y', `${progress * 68}px`);
      visual.style.setProperty('--hero-scroll-rotate', `${travel * -4}deg`);
      visual.style.setProperty('--hero-scroll-opacity', `${Math.max(0.42, 1 - progress * 0.56)}`);
    };

    const requestScrollMotion = () => {
      if (!frame) {
        frame = window.requestAnimationFrame(updateScrollMotion);
      }
    };

    banner.addEventListener('pointermove', handlePointerMove);
    banner.addEventListener('pointerleave', resetPointer);
    window.addEventListener('scroll', requestScrollMotion, { passive: true });
    window.addEventListener('resize', requestScrollMotion);
    updateScrollMotion();

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      banner.removeEventListener('pointermove', handlePointerMove);
      banner.removeEventListener('pointerleave', resetPointer);
      window.removeEventListener('scroll', requestScrollMotion);
      window.removeEventListener('resize', requestScrollMotion);
    };
  }, []);

  return (
    <MissionSection id="home" number="01" label="Launch" eyebrow="Launch" className="banner">
      <div className="mission-hero" ref={bannerRef}>
        <Container fluid>
          <Row className="align-items-center mission-hero__row">
            <Col xs={12} lg={7} className="mission-hero__content">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <h1>{`Hi! I'm Harshad`} <br /><span className="txt-rotate" data-period="1000" data-rotate={'[' + toRotate + ']'}><span className="wrap">{text}</span></span></h1>
                    <div className="mission-code" aria-label="Developer mission details">
                      <code>const developer = {'{'}</code>
                      <code>  code: true,</code>
                      <code>  ship: 'curiosity',</code>
                      <code>  mission: 'build impact'</code>
                      <code>{'}'}</code>
                    </div>
                    <p className={`my-intro ${isVisible ? "text-focus-in" : ""}`}>I build real-time web apps, analytics dashboards, and scalable platforms using React, Vue, Next.js, TypeScript, and modern backends. I turn complex product problems into fast, reliable, and meaningful user experiences.</p>
                    <div className="mission-hero__actions">
                      <a className="mission-btn mission-btn--primary" href="#skills">Explore Mission</a>
                      <a className="mission-btn mission-btn--ghost" href="#projects">See My Work</a>
                    </div>
                    <div className="mission-stats">
                      {missionStats.map((stat) => (
                        <div className="mission-stat" key={stat.label}>
                          <strong aria-label={stat.ariaLabel}>{stat.value}</strong>
                          <span>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>}
              </TrackVisibility>
            </Col>
            {!isMobile && <Col xs={12} lg={5} className="mission-hero__visual">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={`hero-visual ${isVisible ? "animate__animated animate__zoomIn" : ""}`} ref={visualRef}>
                    <span className="orbit-ring orbit-ring-one" aria-hidden="true"></span>
                    <span className="orbit-ring orbit-ring-two" aria-hidden="true"></span>
                    <span className="orbit-dot orbit-dot-one" aria-hidden="true"></span>
                    <span className="orbit-dot orbit-dot-two" aria-hidden="true"></span>
                    <img src={headerImg} alt="Harshad Hindlekar" />
                  </div>}
              </TrackVisibility>
            </Col>}
          </Row>
        </Container>
      </div>
    </MissionSection>
  )
}
