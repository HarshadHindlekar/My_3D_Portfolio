import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.svg';
import { SocialIcons } from "./Service";
import { missionChapters } from "./MissionData";
import { BrowserRouter as Router } from "react-router-dom";
import { BoxArrowUpRight } from "react-bootstrap-icons";
import '../css/Navbar.css'
import { OpenPDF } from "./Banner-Comps/OpenPdf";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  useEffect(() => {
    const syncFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (missionChapters.some((chapter) => chapter.id === hash)) {
        setActiveLink(hash);
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => window.removeEventListener('hashchange', syncFromHash);
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
          setActiveLink(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0.12, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
      setExpanded(false); // Close the menu when a link is clicked
  };

  return (
    <Router>
      <Navbar expand="lg" className={`portfolio-navbar ${scrolled ? "scrolled" : ""}`} expanded={expanded} onToggle={(expanded) => setExpanded(expanded)}>
        <Container className="nav-container">
          <Navbar.Brand href="/" className="brand-mark">
            <img src={logo} alt="Logo" className={scrolled ? "logo-img" : ""} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="portfolio-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="portfolio-navbar-nav" className="nav-shell">
            <Nav className="main-nav">
              {missionChapters.map((chapter) => (
                <Nav.Link
                  href={'#' + chapter.id}
                  className={activeLink === chapter.id ? 'active navbar-link' : 'navbar-link'}
                  key={chapter.id}
                  onClick={() => onUpdateActiveLink(chapter.id)}
                >
                  {chapter.navLabel}
                </Nav.Link>
              ))}
            </Nav>
            
            <span className="navbar-text">
               <div className="social-icon">
                {SocialIcons.map((socialIcon) => <a href={socialIcon.href} key={socialIcon.altText}><img src={socialIcon.imgSrc} alt={socialIcon.altText} /></a>)}
              </div>
              <button className="resume-button" onClick={OpenPDF}><span>See Resume</span><BoxArrowUpRight size={16} /></button>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}

