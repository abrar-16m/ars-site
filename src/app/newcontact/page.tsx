import React from "react";
import Create from "@/sections/newcontactuspage/create/Create";
import HaveAChat from "@/sections/newcontactuspage/haveAChat/HaveAChat";
import ContactUs from "@/sections/newcontactuspage/contactUs/ContactUs";

const page = () => {
  return (
    <div>
      <Create />
      <ContactUs />
      <HaveAChat />
    </div>
  );
};

export default page; 
