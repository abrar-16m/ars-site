import React from "react";
import styles from "./HaveAChat.css";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { ICONS } from "@/utils/icons";

const HaveAChat = () => {
  return (
    <div className="Backgroundforchat">
      <div>
        <p className="firstparap">Let&apos;s Have a Chat!</p>
      </div>
      <div className="Columnforchat">
        {/* left column starts */}

        <div className="Leftforchat">
          <p>Name</p>
          <input id="input" type="text" />
          <p>Email</p>
          <input id="input" type="email" />
          <p>Reasons of Interest</p>
          <div>
            <input type="radio" id="huey" name="drone" value="huey" />
            <label htmlFor="huey">Project</label>
          </div>
          <div>
            <input type="radio" id="dewey" name="drone" value="dewey" />
            <label htmlFor="dewey">Recruitment</label>
          </div>
          <div>
            <input type="radio" id="louie" name="drone" value="louie" />
            <label htmlFor="louie">Other</label>
          </div>

          <div className="captcha">
            <Image    width={250}  
        height={75} src="/assets/Captcha.png" alt="Captcha" />
          </div>
        </div>
        {/* right column starts */}
        <div className="Rightforchat">
          <p>Surname</p>
          <input id="input" type="text" />
          <p>Name of your Company</p>
          <input id="input" type="text" />
          <p>Message</p>
          <textarea id="message-area" rows="5"></textarea>
          <Button id="btn1">Submit</Button>
        </div>
        {/* icons start from here */}
        <ul className="iconlist" style={{ listStyleType: "none" }}>
          <li>
            <a
              href="https://www.linkedin.com/company/advanced-robotics-systems/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS.linkedin}
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61562469073840&mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS.facebook}
            </a>
          </li>
          <li>
            {" "}
            <a
              href="https://www.instagram.com/arsystems.sa?igsh=ZTRqZ3d6NDh0eXYw"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ICONS.instagram}
            </a>
          </li>
          <li>
            <a href="/" target="_blank" rel="noopener noreferrer">
              {ICONS.twitter}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HaveAChat;
