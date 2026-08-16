import logo from "../assets/img/branding/hh-logo.svg";
import footerPhoto from "../assets/img/me-after.svg";
import '../css/Footer.css';
import { ProfileActions } from './ProfileActions';
import { useEffect, useState } from 'react';
import { AskAi } from "./AskAi";

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-photo-wrap">
            <img
              src={footerPhoto}
              alt="Harshad Hindlekar"
              loading="lazy"
              className="footer-photo"
            />
          </div>

          <div className="footer-logo">
            <img
              src={logo}
              alt="HH monogram logo"
              aria-label="HH monogram logo"
              loading="lazy"
              className="footer-logo-img"
            />
            <h3>Frontend & Full Stack Developer Open to Opportunities</h3>
            <ProfileActions variant="footer" />
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <AskAi />
          <p>&copy; {year} Harshad Hindlekar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
