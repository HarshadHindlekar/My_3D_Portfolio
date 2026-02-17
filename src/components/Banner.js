import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img1.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import StarsCanvas from "./Banner-Comps/Stars";
import '../css/Banner.css';
import '../css/Contact.css';
import { isMobile } from 'react-device-detect';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Front End Developer II", "Software Engineer II", "Full Stack Web Developer"];
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

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Harshad`} <br /><span className="txt-rotate" data-period="1000" data-rotate={'[' + toRotate + ']'}><span className="wrap">{text}</span></span></h1>
                  <p className={`my-intro ${isVisible ? "text-focus-in" : ""}`}>I'm a Senior Frontend Developer with 3+ years of experience building scalable, real-time web applications and analytics dashboards. I specialize in React, Vue 3, Nuxt, Next.js, and TypeScript, along with modern UI systems like Tailwind and responsive design.

                    I’ve developed live tracking systems, 3D analytics dashboards, AI-powered platforms, and enterprise safety & logistics solutions used across 100+ facilities and thousands of users. I also work with REST/GraphQL APIs, cloud services (AWS & Azure), authentication/security (RBAC, 2FA), and performance optimization.

                    I focus on creating fast, intuitive, and reliable products that solve real-world business problems while keeping the user experience simple and engaging.

                    Let’s build something impactful together 🚀</p>
                </div>}
            </TrackVisibility>
          </Col>
          {!isMobile && <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>}
        </Row>
      </Container>
      <StarsCanvas />
    </section>
  )
}
