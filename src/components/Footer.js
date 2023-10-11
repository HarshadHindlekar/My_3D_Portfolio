import logo from "../assets/img/logo2.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon2.svg";
import navIcon2 from "../assets/img/nav-icon3.svg";
import ImageSwitcher from "./Footer-Comps/ImageSwitcher";


export const Footer = () => {
  return (
    <footer className="footer"> 
      <img src={logo} alt="Logo" />
      <ImageSwitcher />
      <div className="social-container">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/harshad-hindlekar-b94a07236/"><img src={navIcon1} alt="linkdin" /></a>
          <a href="https://www.instagram.com/h_a_r_s_h_a_d_2_4/"><img src={navIcon2} alt="instagram" /></a>
          <a href="https://www.facebook.com/harshad.hindlekar.9/"><img src={navIcon3} alt="Icon" /></a>
        </div>
        <p>Copyright 2023. All Rights Reserved</p>
      </div>
    </footer>
  )
}
