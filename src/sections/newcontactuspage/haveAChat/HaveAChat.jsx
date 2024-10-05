import React from "react";
import styles from "./HaveAChat.css";
import { Button } from "@nextui-org/button";
import Image from "next/image";

const HaveAChat = () => {
  return (
    <div className="Bgg">
      <div className="p">
        <p>Let's Have a Chat!</p>
      </div>
      <div className="column">
        {/* left column starts */}

        <div className="left">
          <p>Name</p>
          <input id="input" type="text" />
          <p>Email</p>
          <input id="input" type="email" />
          <p>Reasons of Interest</p>
          <div>
            <input type="radio" id="huey" name="drone" value="huey"/>
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
          <img src="/assets/Captcha.png"  alt="Captcha"/>
          </div>
        </div>
        {/* right column starts */}
        <div className="right">
          <p>Surname</p>
          <input id="input" type="text" />
          <p>Name of your Company</p>
          <input id="input" type="text" />
          <p>Message</p>
          <textarea id="message-area" rows="5"></textarea> 
          <Button id="btn1">Submit</Button>
        </div>
      </div>
    </div>
  );
};

export default HaveAChat;
