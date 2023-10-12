import logo from "../assets/img/logo2.svg";
import { SocialIcons } from "./Service";
import ImageSwitcher from "./Footer-Comps/ImageSwitcher";

export const Footer = () => {

  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />
      <ImageSwitcher />
      <div className="social-container">
        <div className="social-icon">
          {SocialIcons.map((socialIcon) => <a href={socialIcon.href} key={socialIcon.altText}><img src={socialIcon.imgSrc} alt={socialIcon.altText} /></a>)}
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  )
}
