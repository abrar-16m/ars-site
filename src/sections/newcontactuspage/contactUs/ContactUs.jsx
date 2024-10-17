import React from "react";
import styles from "./ContactUs.css"

const ContactUs = () => {
  return (
    <div className="backgroundforcontactus">
      {/* division starts where the page is divided into two columns*/}
      <div className="division">
        <div>
          <p id="contactus">Contact Us</p>
        </div>
        {/* second column */}
        <div className="secondcolumnnn">
          {/* <hr /> */}
          {/* <p id="location">Bangladesh</p>
          <p id="address">Oasis, House 47, Road 3A, Dhanmondi, Dhaka - 1205</p>

          <hr />

          <p id="location"> Australia</p>
          <p id="address">576 Flinders Lane Melbourne VIC 3000</p>

          <hr />

          <p id="location">Finland</p>
          <p id="address">Helsinki, Finland 00100</p> */}

          <hr />
<p id="location">Kingdom of Saudi Arabia</p>
<p id="address">R&D Office: 7012 Al Farazdaq St,</p>
<p id="address">Ad Dhubbat, Riyadh 12627, Saudi Arabia</p>
<p id="address"></p>

<hr />
          
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
