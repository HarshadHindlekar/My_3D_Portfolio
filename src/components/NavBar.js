import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/logo2.svg';
import { SocialIcons, TabIcons } from "./Service";
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import '../css/Navbar.css'

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" className={scrolled ? "logo-img" : ""} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {TabIcons.map((tab) => <Nav.Link href={'#' + tab.key} className={activeLink === tab.key ? 'active navbar-link' : 'navbar-link'} key={tab.key} onClick={() => onUpdateActiveLink(tab.key)}>{tab.value}</Nav.Link>)}
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {SocialIcons.map((socialIcon) => <a href={socialIcon.href} key={socialIcon.altText}><img src={socialIcon.imgSrc} alt={socialIcon.altText} /></a>)}
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let's Connect</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}
