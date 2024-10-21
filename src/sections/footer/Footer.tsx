import React from "react";
import "./Footer.css";
import { ICONS } from "@/utils/icons";
import Image from "next/image";


const footer = () => {
  return (
    <div>
      <div className="backgroundforfooter">
  {/* Main content */}
  <div className="maincolumn">
    {/* First column */}
    <div className="firstcolumn">
      
    <Image    width={200}  
        height={90} src="/assets/ARS_1_Grey_cropped.png"  alt="Captcha"/>
    {/* check whether the next paragraph should change or not */}
    {/* <p>We make your dreams realize</p> */}

    </div>

    {/* Second column */}
    <div className="secondcolumn">
      {/* Left column */}
      <div className="leftcolumn">
        <p id="Menu">Menu</p>
        <ul>
          <li>Projects</li>
          <li>Solutions</li>
          <li>About Us</li>
        </ul>
      </div>
      {/* Right column */}
      <div className="rightcolumn">
        <p id="Contactcaption">Contact</p>
        <ul>
          <li>Contact Us</li>
          <li>News</li>
        </ul>
      </div>
    </div>
  </div>

  {/* Bottom footer with icons */}
  <div className="bottomfooter">
    <p id="bottomfooterline">2023 LOGOAGENCY. ALL RIGHTS RESERVED.</p>
    <ul className="footerlist" style={{ listStyleType: "none" }}>
      <li><a href="https://www.linkedin.com/company/advanced-robotics-systems/" target="_blank" rel="noopener noreferrer">{ICONS.linkedin}</a></li>
      <li><a href="https://www.facebook.com/profile.php?id=61562469073840&mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">{ICONS.facebook}</a></li>
      <li><a href="https://www.instagram.com/arsystems.sa?igsh=ZTRqZ3d6NDh0eXYw" target="_blank" rel="noopener noreferrer">{ICONS.instagram}</a></li>
      <li><a href="/" target="_blank" rel="noopener noreferrer">{ICONS.twitter}</a></li>
    </ul>
  </div>
</div>
    </div>
  );
};

export default footer;
