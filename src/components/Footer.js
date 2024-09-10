import logo from "../assets/img/logo2.svg";
import { SocialIcons } from "./Service";
import ImageSwitcher from "./Footer-Comps/ImageSwitcher";
import '../css/Footer.css'
import { OpenPDF } from "./Banner-Comps/OpenPdf";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const Footer = () => {

  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />
      <ImageSwitcher />
      <div className="social-container">
        <button onClick={OpenPDF} className="resume-footer">See Resume <ArrowRightCircle size={25} className="resume-svg-footer" /></button>
        <div className="social-icon">
          {SocialIcons.map((socialIcon) => <a href={socialIcon.href} key={socialIcon.altText}><img src={socialIcon.imgSrc} alt={socialIcon.altText} /></a>)}
        </div>
        <p>© {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </footer>
  )
}
