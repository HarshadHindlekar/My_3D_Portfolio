import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.svg';
import { SocialIcons, TabIcons } from "./Service";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import '../css/Navbar.css'
import { isMobile } from "react-device-detect";

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

  const onUpdateActiveLink = (value) => {
      setActiveLink(value);
      setExpanded(false); // Close the menu when a link is clicked
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""} expanded={expanded} onToggle={(expanded) => setExpanded(expanded)}>
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className={scrolled ? "logo-img" : ""} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id={ expanded || !isMobile ? "basic-navbar-nav" : ""} className={isMobile ? "flex flex-column  gap-4 p-2" : ""}>
            <Nav className={isMobile ? "" : "ms-auto"}>
              {TabIcons.map((tab) => <Nav.Link href={'#' + tab.key} className={activeLink === tab.key ? 'active navbar-link' : 'navbar-link'} key={tab.key} onClick={() => onUpdateActiveLink(tab.key)}>{tab.value}</Nav.Link>)}
            </Nav>
            <span className={isMobile ? "flex flex-column navbar-text" : "navbar-text"}>
              <div className="social-icon">
                {SocialIcons.map((socialIcon) => <a href={socialIcon.href} key={socialIcon.altText}><img src={socialIcon.imgSrc} alt={socialIcon.altText} /></a>)}
              </div>
              <HashLink to='#connect' onClick={() => setExpanded(false)}>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
