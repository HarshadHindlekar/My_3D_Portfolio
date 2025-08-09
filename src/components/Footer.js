import logo from "../assets/img/logo2.svg";
import { SocialIcons } from "./Service";
import ImageSwitcher from "./Footer-Comps/ImageSwitcher";
import '../css/Footer.css';
import { OpenPDF } from "./Banner-Comps/OpenPdf";
import { ArrowRightCircle } from "react-bootstrap-icons";
import { useEffect, useState } from 'react';

export const Footer = () => {
  const [year, setYear] = useState(new Date().getFullYear());
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Update year in case component stays mounted across year change
    const timer = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 60000); // Check every minute

    // Trigger fade-in animation
    const timer2 = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => {
      clearInterval(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <footer className={`footer ${isVisible ? 'visible' : ''}`}>
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-logo">
            <img 
              src={logo} 
              alt="Logo" 
              aria-label="Logo"
              loading="lazy"
              className="footer-logo-img"
            />
            <h3>Let's Build Something Amazing</h3>
            <button 
            onClick={OpenPDF} 
            className="resume-footer"
            aria-label="View Resume"
          >
            View Resume <ArrowRightCircle size={20} className="resume-svg-footer" />
          </button>
          </div>
          
          <div className="image-switcher-container">
            <ImageSwitcher />
          </div>
          
          
          <div className="social-icon">
            {SocialIcons.map((socialIcon, index) => (
              <a 
                href={socialIcon.href} 
                key={socialIcon.altText}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={socialIcon.altText}
                style={{ '--i': index }}
              >
                <img 
                  src={socialIcon.imgSrc} 
                  alt={socialIcon.altText} 
                  loading="lazy"
                />
              </a>
            ))}
          </div>
        </div>
        
        
      </div>
      
      <div className="footer-bottom">
        <p>© {year} All Rights Reserved | Designed & Built with ❤️ by Harshad</p>
      </div>
    </footer>
  );
}
